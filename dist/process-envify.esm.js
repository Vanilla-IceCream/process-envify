function index (obj) {
  var envify = {};
  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    envify[("process.env." + (keys[i]))] = JSON.stringify(values[i]);
  }

  return envify;
}

export default index;
//# sourceMappingURL=process-envify.esm.js.map
