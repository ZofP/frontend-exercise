"use client";

import { useOptimistic } from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@/components";
import { Comment } from "@/types/comment";
import { AddArticleCommentForm } from "./AddArticleCommentForm";
import { ArticleComment } from "./ArticleComment";

interface ArticleCommentsSectionProps {
  articleId: string;
  comments: Comment[];
}

export const ArticleCommentsSection = ({
  articleId,
  comments,
}: ArticleCommentsSectionProps) => {
  const t = useTranslations();
  const [optimisticComments, addComment] = useOptimistic<Comment[], Comment>(
    comments,
    (state, newComment) => {
      return [newComment, ...state];
    }
  );

  return (
    <div className="flex flex-col gap-24">
      <Typography variant="h4">
        {t("article.comments.comments", {
          count: String(optimisticComments.length),
        })}
      </Typography>
      <AddArticleCommentForm addComment={addComment} articleId={articleId} />
      {optimisticComments.map((comment) => (
        <ArticleComment key={comment.commentId} {...comment} />
      ))}
      {/* TODO: remove mock comment once the API endpoint for comments is fixed */}
      <ArticleComment
        content={
          "Cats are very interesting animals indeed. This comment is mocked"
        }
        author={"Sir Mock Master"}
        postedAt="2025-04-21T19:20:04.223455"
        score={7}
        articleId={articleId}
        commentId={"unknown"}
      />
    </div>
  );
};
