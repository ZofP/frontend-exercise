import { useTranslations } from "next-intl";

import { Typography } from "@/components";
import { Comment } from "@/types/comment";
import { AddArticleCommentForm } from "./AddArticleCommentForm";
import { ArticleCommentsList } from "./ArticleCommentsList";

interface ArticleCommentsSectionProps {
  articleId: string;
  comments: Comment[];
}

export const ArticleCommentsSection = ({
  articleId,
  comments,
}: ArticleCommentsSectionProps) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-24">
      <Typography variant="h4">
        {t("article.comments.comments", {
          count: String(comments.length),
        })}
      </Typography>
      <AddArticleCommentForm articleId={articleId} />
      <ArticleCommentsList comments={comments} articleId={articleId} />
    </div>
  );
};
