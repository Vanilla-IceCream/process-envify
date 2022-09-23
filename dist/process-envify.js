const i = (s) => {
  const t = {}, n = Object.keys(s), c = Object.values(s);
  for (let e = 0, o = n.length; e < o; e += 1) {
    const l = n[e], r = JSON.stringify(c[e]);
    t[`process.env.${l}`] = r;
  }
  return t;
};
export {
  i as default
};
