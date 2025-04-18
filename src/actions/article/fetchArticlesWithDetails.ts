"use server";

import { z } from "zod";

import { PaginatedFetchArgs } from "@/types";
import { articleDetailSchema } from "@/types/article";
import { fetchArticleById } from "./fetchArticleById";
import { fetchArticles } from "./fetchArticles";

export const fetchArticlesWithDetails = async (args?: PaginatedFetchArgs) => {
  // this call is cached by Next so we do not call api unnecessarily
  const { items } = await fetchArticles(args);
  const detailsPromises = items.map(
    async ({ articleId }) => await fetchArticleById(articleId)
  );
  const details = await Promise.all(detailsPromises);

  return z.array(articleDetailSchema).parse(details);
};
