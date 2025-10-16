import { z } from "zod";

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  categoryId: string;
  slug: string;
  readTime: number;
  featured: boolean;
  imageUrl?: string;
}

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  slug: z.string(),
});

export const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  content: z.string(),
  categoryId: z.string(),
  slug: z.string(),
  readTime: z.number(),
  featured: z.boolean(),
  imageUrl: z.string().optional(),
});

export type CategoryType = z.infer<typeof categorySchema>;
export type ArticleType = z.infer<typeof articleSchema>;
