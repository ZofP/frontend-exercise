"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { APP_CONFIG } from "@/config/app";
import { CookieKey } from "@/types";

export const logout = async () => {
  const cookie = await cookies();
  cookie.delete(CookieKey.AccessToken);
  redirect(APP_CONFIG.routes.anonymous.login, RedirectType.replace);
};
