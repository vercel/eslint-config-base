#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PACKAGE_FILENAME = 'package.json';

const packagePath = path.join(process.cwd(), PACKAGE_FILENAME);

function hasModule(name) {
	try {
		require(name);
		return true;
	} catch (err) {
		void err;
		return false;
	}
}

const hasGitHooks = hasModule('@zeit/git-hooks');
const hasBabel = hasModule('babel-eslint');
const hasFlowtype = hasModule('eslint-plugin-flowtype');

const packageFileContents = (() => {
	try {
		return fs.readFileSync(packagePath, 'utf-8');
	} catch (err) {
		if (err.code === 'ENOENT') {
			console.error(`△  ERROR! No ${PACKAGE_FILENAME} was found in the current directory.`);
			process.exit(1);
		}

		throw err;
	}
})();

const pkg = JSON.parse(packageFileContents);

if (pkg.eslintConfig) {
	console.error('△  ERROR! Terminating; cowardly refusing to overwrite existing `eslintConfig` in', packagePath);
	process.exit(1);
}

const eslintConfig = {
	'extends': ['@zeit/eslint-config-base']
};

if (hasFlowtype) {
	if (!hasBabel) {
		console.error('△  WARNING! FlowType plugin was detected, but not the `babel-eslint` package. It\'s required in order for FlowType to work.');
		console.error('            Install it by running `yarn add --dev babel-eslint`. I\'ll assume you\'ll be doing this and add it to your');
		console.error('            package.json anyway.');
	}

	eslintConfig.parser = 'babel-eslint';
	eslintConfig.plugins = ['flowtype'];
	eslintConfig.settings = {
		flowtype: {
			onlyFilesWithFlowAnnotation: true
		}
	};
}

pkg.eslintConfig = eslintConfig;

if (pkg.scripts && pkg.scripts.lint) {
	console.error('△  WARNING! Cowardly refusing to overwrite existing `lint` script in', packagePath);
} else {
	console.log('△  Adding `scripts.lint` to', packagePath);
	(pkg.scripts = pkg.scripts || {}).lint = 'eslint --ext .jsx,.js .';
}

if (hasGitHooks()
		&& (!pkg.git
		|| !pkg.git['pre-commit']
		|| (Array.isArray(pkg.git['pre-commit']) && pkg.git['pre-commit'].indexOf('lint-staged') === -1)
		|| (typeof pkg.git['pre-commit'] === 'string' && pkg.git['pre-commit'] !== 'lint-staged'))) {
	// Add it as a linter step for pre-commit
	console.log('△  Detected @zeit/git-hooks - adding a lint step to the `pre-commit` hook as well');

	if (pkg.scripts && pkg.scripts['lint-staged']) {
		console.error('△  WARNING! Cowardly refusing to overwrite existing `lint-staged` script in', packagePath);
	} else {
		(pkg.scripts = pkg.scripts || {})['lint-staged'] = 'git diff --cached --name-only \'*.js\' \'*.jsx\' | xargs eslint';
	}

	const git = (pkg.git = pkg.git || {});
	if (!git['pre-commit']) {
		git['pre-commit'] = 'lint-staged';
	} else {
		if (typeof git['pre-commit'] === 'string') {
			git['pre-commit'] = [git['pre-commit']];
		}

		git['pre-commit'].unshift('lint-staged');
	}
}

const formattedJson = JSON.stringify(pkg, null, '  ');

fs.writeFileSync(packagePath, formattedJson, 'utf-8');
console.log('△  ZEIT linter configuration initialized successfully!');
