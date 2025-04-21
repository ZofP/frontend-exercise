"use client";

import { useOptimistic } from "react";

import { Typography } from "@/components";
import { Comment } from "@/types/comment";
import { ArticleVoteButton } from "./ArticleVoteButton";

type ArticleComentVotingActionsProps = Pick<
  Comment,
  "score" | "articleId" | "commentId"
>;

export const ArticleComentVoting = ({
  score,
  ...props
}: ArticleComentVotingActionsProps) => {
  const [optimisticScore, setOptimisticScore] = useOptimistic(
    score,
    (state, addition: number) => {
      return state + addition;
    }
  );
  const displayedScore = String(
    optimisticScore < 0 ? optimisticScore : `+${optimisticScore}`
  );
  const commonProps = { setOptimisticScore, ...props };

  return (
    <div className="flex gap-8 items-center">
      <Typography>{displayedScore}</Typography>
      <VerticalDivider />
      <ArticleVoteButton direction="up" {...commonProps} />
      <VerticalDivider />
      <ArticleVoteButton direction="down" {...commonProps} />
    </div>
  );
};

const VerticalDivider = () => <div className="w-1 h-16 bg-border-light" />;
