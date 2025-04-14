"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { CONFIG } from "@/config";
import { CookieKey } from "@/types";
import { accessTokenSchema, LoginSchema } from "@/types/auth";
import { fetchBase } from "../helpers/fetchBase";

export const login = async (credentials: LoginSchema) => {
  const res = await fetchBase(CONFIG.api.endpoints.anonymous.login, {
    method: "POST",
    body: credentials,
  });

  const { access_token, expires_in } = accessTokenSchema.parse(res);
  const cookie = await cookies();
  cookie.set(CookieKey.AccessToken, access_token, {
    // the cookie will be cleared about one minute before the token expires
    maxAge: expires_in - 60,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });

  redirect(CONFIG.app.routes.admin.myArticles, RedirectType.replace);
};
