"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { API_CONFIG } from "@/config/api";
import { APP_CONFIG } from "@/config/app";
import { CreateArticleRequest } from "@/types/article";
import { authenticatedFetch } from "../helpers";

export const createNewArticle = async (body: CreateArticleRequest) => {
  await authenticatedFetch(API_CONFIG.endpoints.common.articles, {
    method: "POST",
    body,
  });
  revalidateTag("articles-list");
  redirect(APP_CONFIG.routes.admin.myArticles);
};
