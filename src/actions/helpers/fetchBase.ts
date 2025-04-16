"use server";

import { API_CONFIG } from "@/config/api";
import { ExtendedRequestInit } from "@/types";

const DEFAULT_HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  "X-API-KEY": API_CONFIG.env.apiKey,
};

export const fetchBase = async (
  path: string | URL | Request,
  init?: ExtendedRequestInit
) => {
  const fullUrl = `${API_CONFIG.env.apiUrl}${path}`;

  if (!init) {
    return await fetch(fullUrl, { headers: DEFAULT_HEADERS });
  }

  const { body, ...restInit } = init;
  const options: RequestInit = {
    ...restInit,
    headers: { ...restInit.headers, ...DEFAULT_HEADERS },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(fullUrl, options);

  return await res.json();
};
