"use server";

import { cookies } from "next/headers";

import { CONFIG } from "@/config";

type FetchBaseArgs = Parameters<typeof fetch>;

export const fetchBase = async (...[path, init]: FetchBaseArgs) => {
  console.log({ apiKey: CONFIG.app.env.apiKey });

  const token = (await cookies()).get("access_token")?.value;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-KEY": CONFIG.app.env.apiKey,
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const options: typeof init = {
    ...init,
    headers,
  };
  if (init?.body) {
    options.body = JSON.stringify(init.body);
  }
  const res = await fetch(`${CONFIG.app.env.apiUrl}${path}`, options);

  console.log({ res });

  return await res.json();
};
