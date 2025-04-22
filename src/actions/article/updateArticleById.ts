"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { API_CONFIG } from "@/config/api";
import { APP_CONFIG } from "@/config/app";
import { CreateArticleRequest } from "@/types/article";
import { buildDynamicPath } from "@/utils/url";
import { authenticatedFetch } from "../helpers";

const {
  endpoints: {
    common: { articleById },
  },
  tags: {
    articles: { list, byId },
  },
} = API_CONFIG;

export const updateArticleById = async (
  articleId: string,
  body: CreateArticleRequest
) => {
  await authenticatedFetch(buildDynamicPath(articleById, { articleId }), {
    method: "PATCH",
    body,
  });
  revalidateTag(list);
  revalidateTag(byId(articleId));

  redirect(APP_CONFIG.routes.admin.myArticles);
};
