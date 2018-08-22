# @zeit/eslint-config-base

A Node.js ESLint configuration for ZEIT source code.

## Usage

Add this package to your project as a dev-dependency:

```console
$ yarn add --dev eslint @zeit/eslint-config-base
```

Optionally add `@zeit/git-hooks` if you want to auto-lint upon committing:

```console
$ yarn add --dev @zeit/git-hooks
```

Then initialize the linter. Note that any optional stuff (git hooks)
need to be present _before_ running this script.

```console
$ yarn zeit-lint-init
```

In the event you need to re-run the configuration (e.g. you forgot one of the optional packages),
you can use `--force` to re-run the configuration process.

The caveats to this are that any after-the-fact manual changes to `eslintConfig` will be overwritten,
and any optional dependency configurations (git hooks, etc.) that were _removed_ since the first time
`zeit-lint-init` was run will remain in package.json and need to be manually cleaned up.

```console
$ yarn zeit-lint-init --force
```
