"use server";

import { PaginatedFetchArgs } from "@/types";
import { ArticleList, articleListSchema } from "@/types/article";
import { fetchBase } from "../helpers/fetchBase";
import { getFetchArticlesArgs } from "./getFetchArticlesArgs";

export const fetchArticles = async (
  args?: PaginatedFetchArgs
): Promise<ArticleList> => {
  const res = await fetchBase(...getFetchArticlesArgs(args));

  console.log({ articles: res });

  return articleListSchema.parse(res);
};
