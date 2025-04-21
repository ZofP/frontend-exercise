import { z } from "zod";

import { TFunction } from "./translation";
import { requiredStringSchema } from "./validation";

export const commentSchema = z.object({
  commentId: z.string(),
  articleId: z.string(),
  author: z.string(),
  content: z.string(),
  postedAt: z.string(),
  score: z.number(),
});
export type Comment = z.infer<typeof commentSchema>;

export const createCommentRequestValidationSchema = <T extends TFunction>(
  t: T
) =>
  z.object({
    author: requiredStringSchema(t),
    content: requiredStringSchema(t),
  });

export type CreateCommentValidationRequest = z.infer<
  ReturnType<typeof createCommentRequestValidationSchema>
>;

export type CreateCommentRequest = CreateCommentValidationRequest & {
  articleId: string;
};

export type CommentVotingDirection = "up" | "down";
