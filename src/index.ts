export default (data: Record<string, unknown>, opts: { useImportMeta?: boolean } = {}) => {
  const envify = {} as Record<string, unknown>;
  const keys = Object.keys(data);
  const values = Object.values(data);

  for (let i = 0, l = keys.length; i < l; i += 1) {
    const key = keys[i];
    const value = JSON.stringify(values[i]);

    if (opts.useImportMeta) {
      envify[`import.meta.env.${key}`] = value;
    } else {
      envify[`process.env.${key}`] = value;
    }
  }

  return envify;
};
