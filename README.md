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
// input
const foo = () => process.env.NODE_ENV;
const bar = () => process.env.PORT;
```

### Rollup

```js
// rollup.config.js
import replace from 'rollup-plugin-replace';
import envify from 'process-envify';

export default {
  [...]
  plugins: [
    replace({
      ...envify({
        NODE_ENV: 'development',
        PORT: 3000,
      }),
      // other ...
    }),
  ],
  [...]
};
```

```js
// output
const foo = () => 'development';
const bar = () => 3000;
```

### Webpack

```js
// webpack.config.js
const webpack = require('webpack');
const envify = require('process-envify');

[...]
  plugins: [
    new webpack.DefinePlugin({
      ...envify({
        NODE_ENV: 'development',
        PORT: 3000,
      }),
      // other ...
    }),
  ],
[...]
```

```js
// output
const foo = () => 'development';
const bar = () => 3000;
```

### Gulp

```js
// gulpfile.js
const gulp = require('gulp');
const replaces = require('gulp-replaces');
const envify = require('process-envify');

gulp.task('default', () => {
  return gulp
    .src('./src/main.js')
    .pipe(replaces({
      ...envify({
        NODE_ENV: 'development',
        PORT: 3000,
      }),
      // other ...
    }))
    .pipe(gulp.dest('./dist'));
});
```

```js
// output
const foo = () => 'development';
const bar = () => 3000;
```
