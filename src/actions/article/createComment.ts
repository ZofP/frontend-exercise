"use server";

import { revalidateTag } from "next/cache";

import { API_CONFIG } from "@/config/api";
import { CreateCommentRequest } from "@/types/comment";
import { fetchBase } from "../helpers";
const {
  endpoints: {
    common: { comments },
  },
  tags: {
    articles: { list, byId },
  },
} = API_CONFIG;

export const createComment = async (body: CreateCommentRequest) => {
  await fetchBase(comments, {
    method: "POST",
    body,
  });
  // this is to update comments count in the list and the admin table
  revalidateTag(list);
  // this is to update comments in the article detail
  revalidateTag(byId(body.articleId));
};
