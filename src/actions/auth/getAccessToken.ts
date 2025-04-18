"use server";

import { cookies } from "next/headers";

import { CookieKey } from "@/types";

export const getAccessToken = async () =>
  (await cookies()).get(CookieKey.AccessToken)?.value;
