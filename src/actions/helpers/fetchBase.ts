"use server";

import { CONFIG } from "@/config";
import { ExtendedRequestInit } from "@/types";

const DEFAULT_HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  "X-API-KEY": CONFIG.app.env.apiKey,
};

export const fetchBase = async (
  path: string | URL | Request,
  init?: ExtendedRequestInit
) => {
  const fullUrl = `${CONFIG.app.env.apiUrl}${path}`;

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
