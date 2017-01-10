<div align="center">
  <a href="https://github.com/nicomf1982/generator-new-node-module">
  <p> GENERATOR-new-node-module</p>
    </a>
</div>


<p align="center"><big>
< Yeoman generator create scaffolding node modules />

</p>

# #Install
Install generator-nodeModule from npm, run:


```
$ npm install -g yo
```

```
$ npm install -g generator-new-node-module
```

Finally initiate the generator:

```
$ yo new-node-module
```

#  #Features

* [Babel](https://babeljs.io) :point_up:
* [Lint](http://stackoverflow.com/questions/8503559/what-is-linting) with [ESLint](http://eslint.org/)
* [Tests](http://programmers.stackexchange.com/questions/135218/what-is-the-difference-between-writing-test-cases-for-bdd-and-tdd) with [tape][tape] in ES6
* [Travis CI](http://docs.travis-ci.com/user/languages/javascript-with-nodejs/) and [Coveralls](https://coveralls.io)
* [Airbnb](https://github.com/airbnb/javascript) CodeStyle
* [Husky](https://github.com/typicode/husky) before commit/push
* Productivity   [scripts](https://github.com/bucaran/generator-rise/blob/master/app/templates/package.json#L11) and source [watcher](https://github.com/mikeal/watch)
* [Check](https://github.com/maxogden/dependency-check) `package` dependencies
* Automatic TOC with [tocdoc](https://github.com/thlorenz/doctoc)


# #Usage
> You need [Yeoman](http://yeoman.io/) to run this command.

```
yo new-node-module
→ create package.json
→ create README.md
→ create LICENSE
→ create CHANGELOG.md
→ create src/index.js
→ create test/index.js
→ create .editorconfig
→ create .gitignore
→ create .travis.yml
→ create .eslintrc
```

#  #Workflow

* Add code to `src/index.js` and tests to `test/index.js`.

* Lint, build and test a project with `npm run build`.

* Build and watch changes in `src/` with `npm run watch`

* Run only tests with `npm run test`.

* Check coverage with `npm run coverage`.

* Generate a TOC for the `CHANGELOG` with `npm run toc`

* Deploy to a remote origin with `npm run deploy`.

* Bump version and publish a package with `npm run major` or `minor/patch`

# #License

MIT ©

[tape]:    https://github.com/substack/tape
