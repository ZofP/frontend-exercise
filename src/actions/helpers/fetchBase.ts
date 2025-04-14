"use server";

import { cookies } from "next/headers";

import { CONFIG } from "@/config";
import { CookieKey, ExtendedRequestInit } from "@/types";

export const fetchBase = async (
  path: string | URL | Request,
  init?: ExtendedRequestInit
) => {
  const token = (await cookies()).get(CookieKey.AccessToken)?.value;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-KEY": CONFIG.app.env.apiKey,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const fullUrl = `${CONFIG.app.env.apiUrl}${path}`;

  if (!init) {
    return await fetch(fullUrl, { headers });
  }

  const { body, ...restInit } = init;
  const options: RequestInit = {
    ...restInit,
    headers: { ...restInit.headers, ...headers },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(fullUrl, options);

  return await res.json();
};
