"use server";

import { CONFIG } from "@/config";
import { ArticleList, articleListSchema } from "@/types/article";
import { buildPathWithParams } from "@/utils/url";
import { fetchBase } from "../helpers/fetchBase";

export const fetchArticles = async (): Promise<ArticleList> => {
  const res = await fetchBase(
    buildPathWithParams(CONFIG.api.endpoints.anonymous.articles),
    {
      method: "GET",
      next: { tags: ["articles"] },
    }
  );

  console.log({ res });

  return articleListSchema.parse(res);
};
