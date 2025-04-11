import { GenericPageProps } from "@/types";

type ArticleDetailPageProps = GenericPageProps<{ articleId: string }>;

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { articleId } = await params;

  return <div>ArticleDetailPage {articleId} </div>;
}
