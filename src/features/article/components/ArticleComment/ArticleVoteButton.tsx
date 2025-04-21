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
  setOptimisticScore: (action: number) => void;
  step?: number;
}

export const ArticleVoteButton = ({
  setOptimisticScore,
  step = 1,
  ...props
}: ArticleVoteButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const isUpvote = props.direction === "up";
  const multiplier = isUpvote ? 1 : -1;
  const handleUpdateVote = async () => {
    if (isPending) {
      return;
    }
    startTransition(() => {
      setOptimisticScore(multiplier * step);
    });

    await updateCommentVote(props);
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
