import { z } from "zod";

export const commentSchema = z.object({
  commentId: z.string(),
  articleId: z.string(),
  author: z.string(),
  content: z.string(),
  postedAt: z.string(),
  score: z.number(),
});
export type Comment = z.infer<typeof commentSchema>;

export interface CreateCommentRequest {
  articleId: string;
  author: string;
  content: string;
}
