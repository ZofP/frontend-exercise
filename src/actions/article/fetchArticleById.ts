"use server";

import { API_CONFIG } from "@/config/api";
import { ArticleDetail, articleDetailSchema } from "@/types/article";
import { buildDynamicPath } from "@/utils/url";
import { fetchBase } from "../helpers/fetchBase";

export const fetchArticleById = async (
  articleId: string
): Promise<ArticleDetail> => {
  const res = await fetchBase(
    buildDynamicPath(API_CONFIG.endpoints.common.articleById, { articleId }),
    {
      method: "GET",
      next: { tags: [`article-${articleId}`] },
    }
  );

  return articleDetailSchema.parse(res);
};
