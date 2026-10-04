import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.enum(['Eventos & Comunidade', 'Práticas Pedagógicas', 'Tecnologia & Inovação', 'Matrículas & Escolha', 'Vida Escolar', 'Etapas de Ensino']),
    author: z.string().default('Colégio Jean Jacques Rousseau'),
    image: z.string().default(''),
    imageAlt: z.string().default(''),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }).superRefine((data, ctx) => {
    if (data.image && data.imageAlt.trim().length < 8) {
      ctx.addIssue({ code: 'custom', path: ['imageAlt'], message: 'Descreva a imagem em pelo menos oito caracteres.' });
    }
  }),
});

export const collections = { blog };
