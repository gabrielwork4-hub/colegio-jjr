# Publicação: GitHub + Cloudflare Pages

O repositório `gabrielwork4-hub/colegio-jjr`, branch `main`, publica o site estático no Cloudflare Pages. O domínio canônico é `https://www.colegiojjr.com.br/`. O domínio raiz `https://colegiojjr.com.br/` redireciona permanentemente para `www`, preservando caminho e query string.

## Configuração do Pages

- Projeto: `colegio-jjr`.
- Build command: `npm run build`.
- Diretório de saída: `dist`.
- Domínios personalizados: `colegiojjr.com.br` e `www.colegiojjr.com.br`.
- O deploy é disparado por push na branch `main`.

## Redirecionamento do domínio raiz

No Cloudflare, mantenha `@` e `www` apontados para o Pages e use uma Redirect Rule na zona `colegiojjr.com.br`:

- Condição: hostname igual a `colegiojjr.com.br`.
- Destino: `https://www.colegiojjr.com.br` + caminho da requisição.
- Preserve a query string.
- Status: `301` (permanente).

Assim, `/sobre-nos/?origem=campanha` no domínio raiz deve ir para o mesmo caminho e query no host `www`. Mantenha os registros de e-mail (MX, SPF, DKIM e DMARC) e não altere nameservers como parte desta configuração.

## Validação

- `https://www.colegiojjr.com.br/` abre o site com HTTPS.
- `https://colegiojjr.com.br/` responde com redirecionamento permanente para `www`.
- O redirecionamento preserva caminho e parâmetros.
- `https://www.colegiojjr.com.br/robots.txt` aponta para o sitemap `www`.
- `https://www.colegiojjr.com.br/sitemap-index.xml` e os sitemaps referenciados retornam XML válido com URLs canônicas.
- `https://www.colegiojjr.com.br/llms.txt` lista as rotas públicas com o host `www`.
- Canônicos, Open Graph e dados estruturados usam `https://www.colegiojjr.com.br`.

O painel `/admin/` ainda depende de Netlify Identity e Git Gateway; ele não faz parte da publicação pública pelo Cloudflare Pages.
