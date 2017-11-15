#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const PACKAGE_FILENAME = 'package.json';

const packagePath = path.join(process.cwd(), PACKAGE_FILENAME);

function hasGitHooks() {
	try {
		require('@zeit/git-hooks');
		return true;
	} catch (err) {
		void err;
		return false;
	}
}

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

pkg.eslintConfig = {extends: ['@zeit/eslint-config-zeit']};

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
