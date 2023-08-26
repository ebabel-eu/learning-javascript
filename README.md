# learning-javascript

Combining Maths with Javascript in learning exercises.

## Install dependencies

`npm install`

## Run in your console

`npm start`

## Unit tests

`npm test`

## Lint

`npm run lint`

## Audit dependencies vulnerabilities

`npm audit`

## Sync with `main` branch from other repository
While in my `main` branch, run `git pull upstream main`.

This works because I setup the other repository as my upstream with a one-off command `git remote add upstream https://github.com/dgapitts/learning-javascript.git`

As a result, when I check which remote repositories I am connected to with `git remote -v`, I get
```shell
origin	git@github.com:ebabel-eu/learning-javascript.git (fetch)
origin	git@github.com:ebabel-eu/learning-javascript.git (push)
upstream	https://github.com/dgapitts/learning-javascript.git (fetch)
upstream	https://github.com/dgapitts/learning-javascript.git (push)
```
