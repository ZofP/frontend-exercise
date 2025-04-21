"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { API_CONFIG } from "@/config/api";
import { APP_CONFIG } from "@/config/app";
import { CreateArticleRequest } from "@/types/article";
import { authenticatedFetch } from "../helpers";

const {
  endpoints: {
    common: { articles },
  },
  tags: {
    articles: { list },
  },
} = API_CONFIG;

export const createNewArticle = async (body: CreateArticleRequest) => {
  await authenticatedFetch(articles, {
    method: "POST",
    body,
  });
  revalidateTag(list);
  redirect(APP_CONFIG.routes.admin.myArticles);
};
