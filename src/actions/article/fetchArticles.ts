"use server";

import { API_CONFIG } from "@/config/api";
import { ArticleList, articleListSchema } from "@/types/article";
import { buildPathWithParams } from "@/utils/url";
import { fetchBase } from "../helpers/fetchBase";

type FetchArticlesArgs = Record<"limit" | "offset", number | undefined>;

export const fetchArticles = async (
  args?: FetchArticlesArgs
): Promise<ArticleList> => {
  const res = await fetchBase(
    buildPathWithParams(API_CONFIG.endpoints.common.articles, args),
    {
      method: "GET",
      next: { tags: ["articles"] },
    }
  );

  return articleListSchema.parse(res);
};
