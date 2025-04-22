"use client";

import { Comment } from "@/types/comment";
import { useCommentsListener } from "../../hooks";
import { ArticleComment } from "./ArticleComment";

interface ArticleCommentsListProps {
  comments: Comment[];
  articleId: string;
}

export const ArticleCommentsList = ({
  comments: defaultComments,
  articleId,
}: ArticleCommentsListProps) => {
  const { comments } = useCommentsListener({ defaultComments, articleId });

  return (
    <div className="flex flex-col gap-24">
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
      {comments.map((comment) => (
        <ArticleComment key={comment.commentId} {...comment} />
      ))}
    </div>
  );
};
