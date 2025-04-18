"use server";

import { revalidateTag } from "next/cache";

import { API_CONFIG } from "@/config/api";
import { buildDynamicPath } from "@/utils";
import { authenticatedFetch } from "../helpers";

export const deleteArticleById = async (articleId: string) => {
  await authenticatedFetch(
    buildDynamicPath(API_CONFIG.endpoints.common.articleById, { articleId }),
    {
      method: "DELETE",
    }
  );
  revalidateTag(`article-${articleId}`);
  revalidateTag("articles-list");
};
