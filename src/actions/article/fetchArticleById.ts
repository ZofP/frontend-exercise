"use server";

import { API_CONFIG } from "@/config/api";
import { ArticleDetail, articleDetailSchema } from "@/types/article";
import { buildDynamicPath } from "@/utils/url";
import { fetchBase } from "../helpers/fetchBase";

const {
  endpoints: {
    common: { articleById },
  },
  tags: {
    articles: { byId },
  },
} = API_CONFIG;

export const fetchArticleById = async (
  articleId: string
): Promise<ArticleDetail> => {
  const res = await fetchBase(buildDynamicPath(articleById, { articleId }), {
    method: "GET",
    next: { tags: [byId(articleId)] },
  });

  return articleDetailSchema.parse(res);
};
