import { Suspense } from "react";
import { getTranslations } from "next-intl/server";

import { fetchArticleById } from "@/actions/article";
import { LoadingIndicator, MarkdownContent, PageHeader } from "@/components";
import {
  ArticleAuthorDate,
  ArticleCommentsSection,
  ArticleImage,
} from "@/features/article";
import { GenericPageProps } from "@/types";

type ArticleDetailPageProps = GenericPageProps<{ articleId: string }>;

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const t = await getTranslations("article");
  const { articleId } = await params;
  const { createdAt, content, title, imageId, comments } =
    await fetchArticleById(articleId);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <div className="flex flex-col gap-24 max-w-760">
        <PageHeader className="flex-col gap-16 items-start" title={title}>
          <ArticleAuthorDate createdAt={createdAt} />
        </PageHeader>
        <section className="flex flex-col gap-24">
          <ArticleImage imageId={imageId} width={760} height={504} />
          <MarkdownContent content={content ?? ""} />
        </section>
        <section className="flex flex-col gap-24">
          <ArticleCommentsSection {...{ articleId, comments }} />
        </section>
      </div>
    </Suspense>
  );
}
