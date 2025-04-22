"use server";

import { revalidateTag } from "next/cache";

import { API_CONFIG } from "@/config/api";
import { CommentVotingDirection } from "@/types/comment";
import { buildDynamicPath } from "@/utils";
import { fetchBase } from "../helpers";

const {
  endpoints: {
    common: { upvoteComment, downvoteComment },
  },
  tags: {
    articles: { list, byId },
  },
} = API_CONFIG;

interface UpvoteCommentArgs {
  commentId: string;
  articleId: string;
  direction?: CommentVotingDirection;
}

export const updateCommentVote = async ({
  commentId,
  articleId,
  direction = "up",
}: UpvoteCommentArgs) => {
  const path = direction === "up" ? upvoteComment : downvoteComment;
  await fetchBase(buildDynamicPath(path, { commentId }), {
    method: "POST",
  });
  revalidateTag(byId(articleId));
  revalidateTag(list);
};
