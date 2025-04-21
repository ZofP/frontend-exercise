import { z } from "zod";

import { commentSchema } from "./comment";
import { paginationSchema } from "./pagination";
import { TFunction } from "./translation";
import { requiredStringSchema } from "./validation";

export const articleSchema = z.object({
  articleId: z.string(),
  title: z.string(),
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

export const createArticleRequestSchema = <T extends TFunction>(t: T) =>
  z.object({
    title: requiredStringSchema(t),
    perex: requiredStringSchema(t),
    content: requiredStringSchema(t),
  });

export type CreateArticleRequest = z.infer<
  ReturnType<typeof createArticleRequestSchema>
>;

export const articleListSchema = z.object({
  pagination: paginationSchema,
  items: z.array(articleSchema),
});
export type ArticleList = z.infer<typeof articleListSchema>;
