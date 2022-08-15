interface Envify {
  (data: Record<string, any>, opts?: { useImportMeta: boolean });
}

declare const envify: Envify;
export default envify;
