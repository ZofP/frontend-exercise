import { fetchArticles } from "@/actions/article/fetchArticles";
import { sortArticleListDescending } from "../../utils";
import { ArticleCard } from "../ArticleCard";

export const ArticlesList = async () => {
  const articles = await fetchArticles();

  return sortArticleListDescending(articles.items).map((article) => (
    <ArticleCard key={article.articleId} {...article} />
  ));
};
