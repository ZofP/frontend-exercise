"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { CONFIG } from "@/config";
import { CookieKey } from "@/types";

export const checkAuthentication = async () => {
  const token = (await cookies()).get(CookieKey.AccessToken)?.value;
  if (!token) {
    redirect(CONFIG.app.routes.anonymous.login);
  }

  return true;
};
