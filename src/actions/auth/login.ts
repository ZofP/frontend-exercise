"use server";

import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

import { API_CONFIG } from "@/config/api";
import { APP_CONFIG } from "@/config/app";
import { CookieKey } from "@/types";
import { accessTokenSchema, LoginSchema } from "@/types/auth";
import { fetchBase } from "../helpers/fetchBase";

export const login = async (credentials: LoginSchema) => {
  const res = await fetchBase(API_CONFIG.endpoints.anonymous.login, {
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

  redirect(APP_CONFIG.routes.admin.myArticles, RedirectType.replace);
};
