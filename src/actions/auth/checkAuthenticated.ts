"use server";

import { cookies } from "next/headers";

import { CookieKey } from "@/types";

export const checkAuthenticated = async () => {
  const accessToken = (await cookies()).get(CookieKey.AccessToken)?.value;
  return !!accessToken;
};
