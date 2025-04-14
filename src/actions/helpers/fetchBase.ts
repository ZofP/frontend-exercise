"use server";

import { cookies } from "next/headers";

import { CONFIG } from "@/config";
import { CookieKey } from "@/types";

interface ModifiedRequestInit extends Omit<RequestInit, "body"> {
  body?: Record<string, unknown>;
}

export const fetchBase = async (
  path: string | URL | Request,
  init?: ModifiedRequestInit
) => {
  const token = (await cookies()).get(CookieKey.AccessToken)?.value;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-KEY": CONFIG.app.env.apiKey,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (!init) {
    return await fetch(`${CONFIG.app.env.apiUrl}${path}`, { headers });
  }

  const { body, ...restInit } = init;
  const options: RequestInit = {
    ...restInit,
    headers,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(`${CONFIG.app.env.apiUrl}${path}`, options);

  console.log({ res });

  return await res.json();
};
