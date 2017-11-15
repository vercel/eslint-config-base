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
			console.error(`ERROR! No ${PACKAGE_FILENAME} was found in the current directory.`);
			process.exit(1);
		}
	
		throw err;
	}
})();

const pkg = JSON.parse(packageFileContents);

if (pkg.scripts && pkg.scripts.lint) {
	console.error('ERROR! Cowardly refusing to overwrite existing `lint` script in', packagePath);
	process.exit(1);
}

console.log('△  Adding `scripts.lint` to', packagePath);
(pkg.scripts = pkg.scripts || {}).lint = 'eslint --ext .jsx,.js .';

if (hasGitHooks() && (!pkg.git || !pkg.git['pre-commit'] || pkg.git['pre-commit'].indexOf('lint') === -1)) {
	const git = (pkg.git = pkg.git || {});
	(git['pre-commit'] = git['pre-commit'] || []).unshift('lint');
	console.log('△  Detected @zeit/git-hooks - adding a lint step to the `pre-commit` hook as well');
}

const formattedJson = JSON.stringify(pkg, null, '  ');

fs.writeFileSync(packagePath, formattedJson, 'utf-8');
console.log('△  ZEIT linter configuration initialized successfully!');
