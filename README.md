# process-envify [![Build Status](https://travis-ci.org/Vanilla-IceCream/process-envify.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/process-envify) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/process-envify/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/process-envify?branch=master)

A process env helper for injecting strings.

## Install

```bash
$ npm i process-envify -D
# or
$ yarn add process-envify -D
```

## Usage

```js
// rollup.config.js
import replace from 'rollup-plugin-replace';
import envify from 'process-envify';

import env from './env';

export default {
  [...]
  plugins: [
    replace({
      ...envify(env),
      // other ...
    }),
  ],
  [...]
};
```

```js
// webpack.config.js
const webpack = require('webpack');
const envify = require('process-envify');

const env = require('./env');

[...]
  plugins: [
    new webpack.DefinePlugin({
      ...envify(env),
      // other ...
    }),
  ],
[...]
```

```js
// gulpfile.js
const gulp = require('gulp');
const replaces = require('gulp-replaces');
const envify = require('process-envify');

const env = require('./env');

gulp.task('default', () => {
  return gulp
    .src('./src/main.js')
    .pipe(replaces({
      ...envify(env),
      // other ...
    }))
    .pipe(gulp.dest('./dist'));
});
```

```js
// env.js
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

module.exports = {
  NODE_ENV,
  PORT,
};
```
