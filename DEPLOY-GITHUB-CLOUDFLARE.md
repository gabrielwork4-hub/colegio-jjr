# Publicação: GitHub Pages + Cloudflare DNS

O repositório publica o site estático com GitHub Actions e GitHub Pages. O domínio canônico da compilação é `https://www.colegiojjr.com.br/`; o Cloudflare gerencia o DNS do domínio.

## Preparação no GitHub

1. Confirme que o repositório `gabrielwork4-hub/colegio-jjr` está público ou tem um plano compatível com GitHub Pages.
2. Em **Settings → Pages**, escolha **GitHub Actions** como fonte de publicação.
3. Verifique a propriedade de `colegiojjr.com.br` no GitHub antes de associar o domínio ao Pages.
4. Em **Settings → Pages → Custom domain**, configure `www.colegiojjr.com.br` e salve.
5. Após DNS e publicação, habilite **Enforce HTTPS** quando a opção estiver disponível.

O workflow usa uma publicação customizada por GitHub Actions. Nesse modo, o domínio precisa ser associado nas configurações do Pages; o arquivo `CNAME` não é necessário.

## Registros DNS no Cloudflare

Adicione os quatro registros `A` para o domínio raiz (`@`):

| Tipo | Nome | Conteúdo |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Adicione o subdomínio canônico `www`:

| Tipo | Nome | Conteúdo |
| --- | --- | --- |
| CNAME | `www` | `gabrielwork4-hub.github.io` |

Os registros `A` no domínio raiz permitem que o GitHub Pages redirecione `colegiojjr.com.br` para o domínio canônico `www.colegiojjr.com.br`. Se for habilitar IPv6, use também os quatro destinos `AAAA` publicados pela documentação do GitHub Pages. Remova registros conflitantes/default antigos para `@` e `www`, mas preserve os registros de e-mail existentes (MX, SPF, DKIM e DMARC).

Deixe `@` e `www` como **DNS only** durante a validação do domínio e emissão do certificado do GitHub Pages. Só avalie ativar o proxy do Cloudflare depois de confirmar HTTPS e funcionamento de todas as páginas; se aparecer erro de TLS, redirecionamento ou conteúdo, volte os registros para DNS only.

## Validação antes de anunciar o site

- A ação **Publicar site no GitHub Pages** conclui sem erro.
- `https://www.colegiojjr.com.br/` responde com HTTPS e serve a versão escolhida do site.
- `https://colegiojjr.com.br/` redireciona para `https://www.colegiojjr.com.br/`.
- `https://www.colegiojjr.com.br/robots.txt` responde e aponta para o sitemap.
- `https://www.colegiojjr.com.br/sitemap-index.xml` e todos os sitemaps referenciados respondem com XML válido e apenas URLs canônicas.
- `https://www.colegiojjr.com.br/llms.txt` responde e lista rotas públicas atuais.
- Páginas, imagens, canonical e links internos funcionam na raiz do domínio, sem `/colegio-jjr/`.

## Observação

O build local valida o código e gera os arquivos, mas não configura as contas do GitHub ou Cloudflare nem altera DNS. Essas etapas exigem acesso administrativo aos respectivos painéis.
