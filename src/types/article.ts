import { z } from "zod";

import { commentSchema } from "./comment";
import { paginationSchema } from "./pagination";

export const articleSchema = z.object({
  articleId: z.string(),
  title: z.string().nullable(),
  perex: z.string().nullable(),
  imageId: z.string().nullable(),
  createdAt: z.string(),
  lastUpdatedAt: z.string(),
});
export type Article = z.infer<typeof articleSchema>;

export const articleDetailSchema = articleSchema.extend({
  content: z.string().nullable(),
  comments: z.array(commentSchema),
});
export type ArticleDetail = z.infer<typeof articleDetailSchema>;

export interface CreateArticleRequest {
  title: string;
  perex: string;
  imageId: string;
  content: string;
}

export const articleListSchema = z.object({
  pagination: paginationSchema,
  items: z.array(articleSchema),
});
export type ArticleList = z.infer<typeof articleListSchema>;
