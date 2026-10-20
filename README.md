# Colégio Jean Jacques Rousseau

Site institucional e editorial do Colégio Jean Jacques Rousseau (JJR), construído com Astro.

## Comandos

```sh
npm install
npm run dev
npm run cms
npm run build
npm run preview
```

## Conteúdo do blog

Os artigos ficam em `src/content/blog`. Cada arquivo Markdown aceita:

```yaml
title: "Título do artigo"
seoTitle: "Título curto para busca | Colégio JJR"
description: "Resumo para cards e mecanismos de busca"
publishedAt: 2026-09-08
category: "Práticas Pedagógicas"
author: "Coordenação Pedagógica & Corpo Docente"
image: "https://..."
imageAlt: "Descrição objetiva da imagem"
featured: false
draft: false
```

`seoTitle` é opcional e permite um título curto para resultados de busca sem alterar o título visível do artigo. Categorias aceitas: `Eventos & Comunidade`, `Práticas Pedagógicas`, `Tecnologia & Inovação`, `Matrículas & Escolha`, `Vida Escolar` e `Etapas de Ensino`.

## Estrutura

- `src/components`: cabeçalho, rodapé e componentes globais.
- `src/layouts`: layout, metadados e SEO básico.
- `src/pages`: rotas do site.
- `src/content/blog`: coleção editorial em Markdown.
- `src/styles/global.css`: tokens e estilos do design system.

## Painel editorial

O painel do Decap CMS fica em `/admin/`. Para testar localmente, mantenha
`npm run dev` aberto em um terminal e execute `npm run cms` em outro. Depois,
acesse `http://127.0.0.1:4321/admin/`.

O site público será publicado no GitHub Pages, com DNS do domínio no Cloudflare. A publicação do site e o painel editorial são fluxos distintos: o painel atual usa Netlify Identity e Git Gateway, que não estão configurados no GitHub Pages. O painel não deve ser usado em produção até definirmos e configurarmos um backend editorial compatível.

O arquivo [DEPLOY-GITHUB-CLOUDFLARE.md](DEPLOY-GITHUB-CLOUDFLARE.md) contém a configuração de domínio e os critérios para validar a publicação.

Nenhuma credencial é armazenada neste projeto.

## Observações de produção

- O domínio canônico configurado no build é `https://www.colegiojjr.com.br/`.
- O sitemap XML é gerado em `sitemap-index.xml`; `robots.txt` aponta para ele e `llms.txt` lista as rotas públicas principais.
- A imagem do Ensino Fundamental II ainda está hospedada externamente e precisa ser substituída por uma imagem aprovada do acervo escolar.
