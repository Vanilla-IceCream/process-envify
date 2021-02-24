'use strict';

function index (data, opts) {
  if ( opts === void 0 ) opts = {};

  var envify = {};
  var keys = Object.keys(data);
  var values = Object.values(data);

  for (var i = 0, l = keys.length; i < l; i += 1) {
    var key = keys[i];
    var value = JSON.stringify(values[i]);

    if (opts.useImportMeta) {
      envify[("import.meta.env." + key)] = value;
    } else {
      envify[("process.env." + key)] = value;
    }
  }

  return envify;
}

module.exports = index;
//# sourceMappingURL=process-envify.cjs.js.map
