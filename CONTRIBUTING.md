# Dev ops

Ops are maintained in
[![opspec 0.1.6](https://img.shields.io/badge/opspec-0.1.6-brightgreen.svg?colorA=6b6b6b&colorB=fc16be)](https://opspec.io/0.1.6) definition
format.

They can be consumed via tools like [opctl](https://opctl.io).

# Acceptance criteria

Contributions are subject to:

- accepted review by one or more
  [maintainers](https://github.com/orgs/distributedlock/teams/maintainers/members)
- the [build](.opspec/build) op continuing to run with a successful
  outcome

# Code style

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) is enforced.

# Unit testing

## Test framework

Tests are written w/ [jest](https://facebook.github.io/jest/)

## Mocks

All mocks are manual & per test to reduce test coupling & improve maintainability

## Test location

Tests are kept alongside source code.

## Test format

Tests are written in arrange, act, assert format w/ the given object under test referred to as `objectUnderTest`
