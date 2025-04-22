"use server";

import { API_CONFIG } from "@/config/api";
import { ExtendedRequestInit } from "@/types";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "X-API-KEY": API_CONFIG.env.apiKey,
} as const;

const DEFAULT_CACHE_OPTIONS = {
  cache: "force-cache",
} as const;

export const fetchBase = async (
  path: string | URL | Request,
  init?: ExtendedRequestInit
) => {
  const fullUrl = `${API_CONFIG.env.apiUrl}${path}`;

  if (!init) {
    return await fetch(fullUrl, { headers: DEFAULT_HEADERS });
  }

  const { body, headers, ...restInit } = init;
  const options: RequestInit = {
    headers: { ...DEFAULT_HEADERS, ...headers },
    ...DEFAULT_CACHE_OPTIONS,
    ...restInit,
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(fullUrl, options);

  console.log({ res });

  return await res.json();
};
