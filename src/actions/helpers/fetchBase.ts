"use server";

import { cookies } from "next/headers";

import { CONFIG } from "@/config";

type FetchBaseArgs = Parameters<typeof fetch>;
interface ModifiedRequestInit extends Omit<RequestInit, "body"> {
  body?: Record<string, unknown>;
}

export const fetchBase = async (
  path: string | URL | Request,
  init?: ModifiedRequestInit
) => {
  console.log({ apiKey: CONFIG.app.env.apiKey });

  const token = (await cookies()).get("accessToken")?.value;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-API-KEY": CONFIG.app.env.apiKey,
  };
  console.log({ token });

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
