<big><h1 align="center"><%= moduleName %></h1></big>

<p align="center">
  <a href="https://npmjs.org/package/<%= moduleName %>">
    <img src="https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/<%= githubUsername %>/<%= moduleName %>">
    <img src="https://img.shields.io/coveralls/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>">
    <img src="https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/<%= moduleName %>">
    <img src="http://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg">
    <img src="https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/<%= githubUsername %>/<%= moduleName %>/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/<%= moduleName %>.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
<%= moduleDesc %>
</big></p>


## Install

```sh
npm i -D <%= moduleName %>
```

## Usage

```js
import <%= camelModuleName %> from "<%= moduleName %>"

<%= camelModuleName %>() // true
```

## License

MIT © [<%= name %>](<%= website %>)

[npm-url]: https://npmjs.org/package/<%= moduleName %>
[npm-image]: https://img.shields.io/npm/v/<%= moduleName %>.svg?style=flat-square

[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[travis-image]: https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/<%= githubUsername %>/<%= moduleName %>
[coveralls-image]: https://img.shields.io/coveralls/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square

[depstat-url]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>
[depstat-image]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/<%= moduleName %>.svg?style=flat-square
