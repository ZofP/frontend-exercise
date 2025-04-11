import { ArticleList } from "@/types/article";
import { convertIsoToMs } from "@/utils/date";

export const sortArticleListDescending = (list: ArticleList["items"]) =>
  [...list].sort(
    (a, b) => convertIsoToMs(b.createdAt) - convertIsoToMs(a.createdAt)
  );
