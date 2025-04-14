import { Suspense } from "react";

import { fetchArticleById } from "@/actions/article";
import { LoadingIndicator, MarkdownContent, Typography } from "@/components";
import { ArticleAuthorDate, ArticleImage } from "@/features/article";
import { GenericPageProps } from "@/types";

type ArticleDetailPageProps = GenericPageProps<{ articleId: string }>;

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { articleId } = await params;
  const article = await fetchArticleById(articleId);
  const { createdAt, content } = article;

  console.log({ article });

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <div className="flex flex-col gap-24 max-w-760">
        <header className="flex flex-col gap-16">
          <Typography variant="h1">{article.title}</Typography>
          <ArticleAuthorDate createdAt={createdAt} />
        </header>
        <section className="flex flex-col gap-24">
          <ArticleImage imageId={article.imageId} width={760} height={504} />
          <MarkdownContent content={content ?? ""} />
        </section>
      </div>
    </Suspense>
  );
}
