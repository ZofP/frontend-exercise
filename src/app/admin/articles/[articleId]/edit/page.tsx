import { fetchArticleById } from "@/actions/article";
import { ArticleForm } from "@/features/administration";
import { GenericPageProps } from "@/types";

export default async function EditArticlePage({
  params,
}: GenericPageProps<{ articleId: string }>) {
  const { articleId } = await params;
  const { title, perex, content } = await fetchArticleById(articleId);

  return (
    <ArticleForm
      defaultValues={{ title, perex: perex ?? "", content: content ?? "" }}
      articleId={articleId}
    />
  );
}
