"use server";

import { redirect, RedirectType } from "next/navigation";

import { APP_CONFIG } from "@/config/app";
import { ExtendedRequestInit } from "@/types";
import { fetchBase } from "../helpers/fetchBase";
import { getAccessToken } from "./getAccessToken";

const {
  anonymous: { login },
} = APP_CONFIG.routes;

export const authenticatedFetch = async (
  path: string | URL | Request,
  init?: ExtendedRequestInit
) => {
  const token = await getAccessToken();
  if (!token) {
    redirect(login, RedirectType.replace);
  }

  return await fetchBase(path, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${token}` },
  });
};
