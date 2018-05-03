var polyfill = function () {
  var reduce = Function.bind.call(Function.call, Array.prototype.reduce);
  var isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
  var concat = Function.bind.call(Function.call, Array.prototype.concat);
  var keys = Reflect.ownKeys;

  if (!Object.values) {
    Object.values = function values(O) {
      return reduce(keys(O), function (v, k) { return concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []); }, []);
    };
  }
};

function index (obj) {
  polyfill();

  var envify = {};
  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (var i = 0, l = keys.length; i < l; i++) {
    envify[("process.env." + (keys[i]))] = JSON.stringify(values[i]);
  }

  return envify;
}

export default index;
export { polyfill };
//# sourceMappingURL=process-envify.esm.js.map
