"use client";

import { useTransition } from "react";
import clsx from "clsx";

import { updateCommentVote } from "@/actions/article";
import { ChevronIcon } from "@/components";
import { CommentVotingDirection } from "@/types/comment";

interface ArticleVoteButtonProps {
  direction: CommentVotingDirection;
  commentId: string;
  articleId: string;
}

export const ArticleVoteButton = (props: ArticleVoteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const isUpvote = props.direction === "up";
  const handleUpdateVote = () => {
    if (isPending) {
      return;
    }
    startTransition(async () => {
      await updateCommentVote(props);
    });
  };

  return (
    <button
      onClick={handleUpdateVote}
      className={clsx(!isUpvote && "rotate-180")}
    >
      <ChevronIcon />
    </button>
  );
};
