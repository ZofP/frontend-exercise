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

export const wsCommentSchema = z.object({
  commentId: z.string(),
  author: z.string(),
  content: z.string(),
  createdAt: z.string(), // ISO8601, optional: .datetime()
  score: z.number(),
});
export type WSComment = z.infer<typeof wsCommentSchema>;

export const webSocketEventSchema = z.object({
  changeType: z.enum(["commentCreated", "commentUpVoted", "commentDownVoted"]),
  comment: wsCommentSchema,
});
export type WebSocketEvent = z.infer<typeof webSocketEventSchema>;
