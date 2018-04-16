
# license-o-matic
[![package version](https://img.shields.io/npm/v/license-o-matic.svg?style=flat-square)](https://npmjs.org/package/license-o-matic)
[![package downloads](https://img.shields.io/npm/dm/license-o-matic.svg?style=flat-square)](https://npmjs.org/package/license-o-matic)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/license-o-matic.svg?style=flat-square)](https://npmjs.org/package/license-o-matic)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Generate common [SPDX](https://spdx.org/) license with ease

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [CLI](#cli)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install license-o-matic
$ # OR
$ yarn add license-o-matic
```

## Usage

```js
const licenseOMatic = require('license-o-matic')

console.log(licenseOMatic.getIdentifiers())
// [ 'mit',
//   'apache-2.0',
//   'gpl-3.0-only',
//   'mpl-2.0',
//   'unlicense',
//   'lgpl-3.0-only' ]

const mit = licenseOMatic.getLicense('mit')

console.log(mit({copyrightHolder: 'Tiaan du Plessis'}))
// MIT License

// Copyright (c) 2018 Tiaan du Plessis

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGESOR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OROTHER DEALINGS IN THE SOFTWARE.

```

## CLI

```sh
$ npm -g install license-o-matic
$ # OR
$ yarn global add license-o-matic
$ # After install
$ license-o-matic ls
$ # 
$ # - mit
$ # - apache-2.0
$ # - gpl-3.0-only
$ # - mpl-2.0
$ # - unlicense
$ # - lgpl-3.0-only
$ # 
$ license-o-matic --license=mit --copyrightHolder="Tiaan du Plessis"
$ # License created
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3.Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    
