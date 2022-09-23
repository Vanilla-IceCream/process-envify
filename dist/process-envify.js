const i = (t, l = {}) => {
  const s = {}, n = Object.keys(t), r = Object.values(t);
  for (let e = 0, u = n.length; e < u; e += 1) {
    const o = n[e], c = JSON.stringify(r[e]);
    l.useImportMeta ? s[`{"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true}.${o}`] = c : s[`process.env.${o}`] = c;
  }
  return s;
};
export {
  i as default
};
