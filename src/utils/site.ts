export function internalPath(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

/** Resolve imagens locais (/images/...) respeitando o base path; URLs absolutas passam direto. */
export function assetPath(src: string): string {
  return /^https?:\/\//.test(src) ? src : internalPath(src);
}
