# @zeit/eslint-config-zeit

A Node.js ESLint configuration for ZEIT source code.

## Usage

Add this package to your project as a dev-dependency:

```console
$ yarn add --dev eslint @zeit/eslint-config-zeit
```

Optionally add `@zeit/git-hooks` if you want to auto-lint upon committing:

```console
$ yarn add --dev @zeit/git-hooks
```

Then initialize the linter:

```console
$ yarn zeit-lint-init
```

It is also recommended to [add an `.editorconfig` file](https://github.com/zeit/editorconfig-zeit)
to your project to make GitHub display the code a little neater as well as help team
members in correctly formatting their code to pass lint checks.

```console
$ curl -LOJ editorconfig.zeit.sh
```
