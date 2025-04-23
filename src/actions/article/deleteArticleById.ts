"use server";

import { revalidateTag } from "next/cache";

import { API_CONFIG } from "@/config/api";
import { buildDynamicPath } from "@/utils";
import { authenticatedFetch } from "../helpers";

const {
  endpoints: {
    common: { articleById },
  },
  tags: {
    articles: { list, byId },
  },
} = API_CONFIG;

export const deleteArticleById = async (articleId: string) => {
  await authenticatedFetch(buildDynamicPath(articleById, { articleId }), {
    method: "DELETE",
  });
  revalidateTag(byId(articleId));
  revalidateTag(list);
};
