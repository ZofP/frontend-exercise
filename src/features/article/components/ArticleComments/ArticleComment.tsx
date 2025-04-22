import React from "react";

import { AvatarPlaceholderIcon, Typography } from "@/components";
import { Comment } from "@/types/comment";
import { formatDate } from "@/utils";
import { ArticleComentVoting } from "./ArticleComentVoting";

export const ArticleComment = ({
  postedAt,
  author,
  content,
  ...props
}: Comment) => {
  return (
    <div className="flex gap-28">
      <AvatarPlaceholderIcon />
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <Typography variant="body-bold">{author}</Typography>
          <Typography variant="small" className="text-secondary">
            {formatDate(postedAt)}
          </Typography>
        </div>
        <Typography>{content}</Typography>
        <ArticleComentVoting {...props} />
      </div>
    </div>
  );
};
