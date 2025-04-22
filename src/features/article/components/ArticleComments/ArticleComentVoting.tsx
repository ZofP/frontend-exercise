"use client";

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
  const displayedScore = String(score < 0 ? score : `+${score}`);

  return (
    <div className="flex gap-8 items-center">
      <Typography>{displayedScore}</Typography>
      <VerticalDivider />
      <ArticleVoteButton direction="up" {...props} />
      <VerticalDivider />
      <ArticleVoteButton direction="down" {...props} />
    </div>
  );
};

const VerticalDivider = () => <div className="w-1 h-16 bg-border-light" />;
