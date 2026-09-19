const HAS_EXTENSION = /\.[a-z0-9]+$/i;

/**
 * Monta um endereço interno já com o prefixo da publicação.
 *
 * O site usa `trailingSlash: 'always'`, então as rotas precisam terminar em
 * barra — inclusive antes de âncora ou query. Sem isso o menu nunca reconhece
 * a página atual e o navegador gasta um redirecionamento a cada clique.
 * Arquivos (sitemap-index.xml, favicon.svg) ficam de fora da regra.
 */
export function internalPath(path: string): string {
  // Endereços externos passam intactos: as páginas misturam fotos do acervo
  // com as imagens do protótipo que ainda não foram substituídas.
  if (/^(https?:)?\/\//.test(path)) return path;

  const [pathname = '', suffix = ''] = splitSuffix(path);
  const clean = pathname.replace(/^\/+/, '');
  const needsSlash = clean !== '' && !clean.endsWith('/') && !HAS_EXTENSION.test(clean);

  return `${import.meta.env.BASE_URL}${needsSlash ? `${clean}/` : clean}${suffix}`;
}

function splitSuffix(path: string): [string, string] {
  const index = path.search(/[?#]/);
  return index === -1 ? [path, ''] : [path.slice(0, index), path.slice(index)];
}

/** Resolve imagens locais (/images/...) respeitando o base path; URLs absolutas passam direto. */
export function assetPath(src: string): string {
  return /^https?:\/\//.test(src) ? src : internalPath(src);
}
