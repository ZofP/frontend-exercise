"use server";

import { CONFIG } from "@/config";
import { ArticleDetail, articleDetailSchema } from "@/types/article";
import { buildDynamicPath } from "@/utils/url";
import { fetchBase } from "../helpers/fetchBase";

export const fetchArticleById = async (
  articleId: string
): Promise<ArticleDetail> => {
  const res = await fetchBase(
    buildDynamicPath(CONFIG.api.endpoints.common.articleById, { articleId }),
    {
      method: "GET",
      next: { tags: [`article-${articleId}`] },
    }
  );

  console.log({ res });

  return articleDetailSchema.parse(res);
};
