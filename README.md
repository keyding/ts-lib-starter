# ts-lib-starter 

> <samp>TypeScript Tool Library Development Template.</samp>

## Usage

```sh
$ npx degit keyding/ts-lib-starter <new-project>
```

## Install

```sh
$ cd <new-project>
$ pnpm install
```

## Development

```sh
$ pnpm dev
```

## Test

```sh
$ pnpm test
```

## Build

```sh
# Before building, `typecheck`, `test`, `foramt` and `lint` are performed in sequence.
$ pnpm build
```

## Bump version

**Bump a package version**

```sh
# Bump `patch` version, tag, commit message.
# 9eb0f3a (HEAD -> main, tag: v0.0.1) Release v0.0.1
$ pnpm version patch -m 'Release v%s'
```

```sh
# Bump `prepatch` version, tag, commit message.
# 10a763d (HEAD -> main, tag: v0.0.1-beta.0) Release v0.0.1-beta.0
$ pnpm version prepatch --preid beta -m 'Release v%s'
```

For details, please refer to [npm-version](https://docs.npmjs.com/cli/v7/commands/npm-version).
