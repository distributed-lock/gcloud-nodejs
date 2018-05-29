[![Build Status](https://travis-ci.org/distributedlock/gcloud-nodejs.svg?branch=master)](https://travis-ci.org/distributedlock/gcloud-nodejs)
[![Coverage](https://codecov.io/gh/distributedlock/gcloud-nodejs/branch/master/graph/badge.svg)](https://codecov.io/gh/distributedlock/gcloud-nodejs)

> *Be advised: this project is currently at Major version zero. Per the
> semantic versioning spec: "Major version zero (0.y.z) is for initial
> development. Anything may change at any time. The public API should
> not be considered stable."*

NodeJS Distributed lock which uses Google Cloud Datastore for storage

# Installation

## NPM
```shell
npm install --save @distributedlock/gcloud
```

## Yarn
```shell
yarn add @distributedlock/gcloud
```

# Examples

# Basic usage

```javascript
const distributedLock = require('@distributedlock/gcloud')

await acquireLock()
```

# Support

[open an issue](https://github.com/distributed-lock/gcloud-nodejs/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see [CONTRIBUTING.md](CONTRIBUTING.md)
