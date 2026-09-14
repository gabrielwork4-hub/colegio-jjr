# Colégio JJR

Site institucional e editorial do Colégio JJR, construído com Astro.

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
description: "Resumo para cards e mecanismos de busca"
publishedAt: 2026-09-08
category: "Práticas Pedagógicas"
author: "Coordenação Pedagógica & Corpo Docente"
image: "https://..."
imageAlt: "Descrição objetiva da imagem"
featured: false
draft: false
```

Categorias aceitas: `Eventos & Comunidade`, `Práticas Pedagógicas` e `Tecnologia & Inovação`.

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

Na publicação, o CMS será conectado a um repositório GitHub e a uma aplicação
OAuth própria. Nenhuma credencial é armazenada neste projeto.

## Observações de produção

- As imagens atuais usam as referências do protótipo Stitch e devem ser substituídas pelo acervo definitivo do colégio.
- O formulário está preparado para Netlify Forms. Em outra hospedagem, conecte-o ao serviço de formulários escolhido.
- Atualize o domínio em `astro.config.mjs` antes da publicação, se necessário.
