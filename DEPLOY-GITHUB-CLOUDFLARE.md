# Publicação: GitHub + Cloudflare Pages

O repositório `gabrielwork4-hub/colegio-jjr`, branch `main`, publica o site estático no Cloudflare Pages. O domínio canônico é `https://colegiojjr.com.br/`. O host `www.colegiojjr.com.br` deve redirecionar permanentemente para o domínio raiz, preservando caminho e query string.

## Configuração atual do Pages

- Projeto: `colegio-jjr`.
- Build command: `npm run build`.
- Diretório de saída: `dist`.
- Domínios personalizados: `colegiojjr.com.br` e `www.colegiojjr.com.br`.
- O deploy é disparado por push na branch `main`.

## Redirecionamento de www

No Cloudflare, mantenha `www` apontado para o Pages e crie uma Redirect Rule na zona `colegiojjr.com.br`:

- Condição: hostname igual a `www.colegiojjr.com.br`.
- Destino: `https://colegiojjr.com.br` + caminho da requisição.
- Preserve a query string.
- Status: `301` (permanente).

Assim, por exemplo, `/sobre-nos/?origem=campanha` em `www` deve ir para o mesmo caminho e query no domínio raiz. Mantenha os registros de e-mail (MX, SPF, DKIM e DMARC) e não altere nameservers como parte desta configuração.

## Validação

- `https://colegiojjr.com.br/` abre o site com HTTPS.
- `https://www.colegiojjr.com.br/` responde com redirecionamento permanente para o domínio raiz.
- O redirecionamento preserva caminho e parâmetros.
- `https://colegiojjr.com.br/robots.txt` aponta para o sitemap do domínio raiz.
- `https://colegiojjr.com.br/sitemap-index.xml` e os sitemaps referenciados retornam XML válido com URLs canônicas.
- `https://colegiojjr.com.br/llms.txt` lista as rotas públicas com o domínio raiz.
- Canônicos, Open Graph e dados estruturados usam `https://colegiojjr.com.br`.

O painel `/admin/` ainda depende de Netlify Identity e Git Gateway; ele não faz parte da publicação pública pelo Cloudflare Pages.
