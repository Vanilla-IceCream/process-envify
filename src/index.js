export default (obj) => {
  const envify = {};
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  for (let i = 0, l = keys.length; i < l; i++) {
    envify[`process.env.${keys[i]}`] = JSON.stringify(values[i]);
  }

  return envify;
};
