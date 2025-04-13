import { fetchArticleById } from "@/actions/article";
import { Typography } from "@/components";
import { ArticleAuthorDate, ArticleImage } from "@/features/article";
import { GenericPageProps } from "@/types";

type ArticleDetailPageProps = GenericPageProps<{ articleId: string }>;

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { articleId } = await params;
  const article = await fetchArticleById(articleId);
  const { createdAt } = article;

  console.log({ article });

  return (
    <main className="flex flex-col gap-24 max-w-760">
      <section className="flex flex-col gap-16">
        <Typography variant="h1">{article.title}</Typography>
        <ArticleAuthorDate createdAt={createdAt} />
      </section>
      <section className="flex flex-col gap-24">
        <ArticleImage imageId={article.imageId} width={760} height={504} />
        <Typography>{article.content}</Typography>
      </section>
    </main>
  );
}
