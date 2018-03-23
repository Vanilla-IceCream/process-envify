'use strict';

function index (obj) {
  var envify = {};
  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    envify[("process.env." + (keys[i]))] = JSON.stringify(values[i]);
  }

  return envify;
}

module.exports = index;
//# sourceMappingURL=process-envify.cjs.js.map
