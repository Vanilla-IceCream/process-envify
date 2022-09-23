# process-envify [![Build Status](https://travis-ci.org/Vanilla-IceCream/process-envify.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/process-envify) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/process-envify/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/process-envify?branch=master)

A process env helper for injecting strings.

## Install

```bash
$ npm i process-envify -D
# or
$ pnpm i process-envify -D
# or
$ yarn add process-envify -D
```

## Usage

```js
// Input:
const getBookName = () => process.env.BOOK_NAME;
```

```js
// In your build tool (see below):
import envify from 'process-envify';

envify({ BOOK_NAME: 'ECMAScript: Up and Running' });
```

```js
// Output:
const getBookName = () => 'ECMAScript: Up and Running';
```

### Vite (`vite.config.ts`)

```ts
import { defineConfig } from 'vite';
import envify from 'process-envify';

export default defineConfig({
  define: envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
});
```

### Vue CLI (`vue.config.js`)

```js
const envify = require('process-envify');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      Object.assign(
        args[0],
        envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
      );

      return args;
    });
  },
};
```

### CRACO (Create React App Configuration Override, `craco.config.js`)

```js
const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      plugins: [
        new webpack.DefinePlugin(
          envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
        ),
      ],
    },
  },
};
```

### Angular CLI (`angular.json`) + Angular Builders (`extra-webpack.config.js`)

```json
{
  "architect": {
    "serve": {
      "builder": "@angular-builders/custom-webpack:dev-server",
      "options": {
        "customWebpackConfig": {
          "path": "./extra-webpack.config.js"
        }
      }
    },
    "build": {
      "builder": "@angular-builders/custom-webpack:browser",
      "options": {
        "customWebpackConfig": {
          "path": "./extra-webpack.config.js"
        }
      }
    }
  }
}
```

```js
const webpack = require('webpack');
const envify = require('process-envify');

module.exports = {
  plugins: [
    new webpack.DefinePlugin(
      envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
    ),
  ],
};
```

### Rollup (`rollup.config.js`)

```js
import replace from '@rollup/plugin-replace';
import envify from 'process-envify';

export default {
  plugins: [
    replace(
      envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
    ),
  ],
};
```

### Webpack (`webpack.config.js`)

```js
const webpack = require('webpack');
const envify = require('process-envify');

module.exports = {
  plugins: [
    new webpack.DefinePlugin(
      envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
    ),
  ],
};
```

### Gulp (`gulpfile.js`)

```js
const gulp = require('gulp');
const replaces = require('gulp-replaces');
const envify = require('process-envify');

function defaultTask() {
  return gulp
    .src('./src/main.js')
    .pipe(replaces(
      envify({ BOOK_NAME: 'ECMAScript: Up and Running' }),
    ))
    .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask;
```
