import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.enum(['Eventos & Comunidade', 'Práticas Pedagógicas', 'Tecnologia & Inovação']),
    author: z.string().default('Coordenação Pedagógica & Corpo Docente'),
    image: z.string(),
    imageAlt: z.string().min(8).default('Imagem do cotidiano escolar do Colégio JJR'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
