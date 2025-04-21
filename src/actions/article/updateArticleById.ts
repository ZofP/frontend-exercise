"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { API_CONFIG } from "@/config/api";
import { APP_CONFIG } from "@/config/app";
import { CreateArticleRequest } from "@/types/article";
import { buildDynamicPath } from "@/utils/url";
import { authenticatedFetch } from "../helpers";

export const updateArticleById = async (
  articleId: string,
  body: CreateArticleRequest
) => {
  await authenticatedFetch(
    buildDynamicPath(API_CONFIG.endpoints.common.articleById, { articleId }),
    {
      method: "PATCH",
      body,
    }
  );
  revalidateTag(`article-${articleId}`);

  redirect(APP_CONFIG.routes.admin.myArticles);
};
