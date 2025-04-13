"use server";

import { cookies } from "next/headers";

import { CONFIG } from "@/config";
import { accessTokenSchema, LoginSchema } from "@/types/auth";
import { fetchBase } from "../helpers/fetchBase";

export const login = async (credentials: LoginSchema) => {
  const res = await fetchBase(CONFIG.api.endpoints.anonymous.login, {
    method: "POST",
    body: credentials,
  });

  const { access_token, expires_in } = accessTokenSchema.parse(res);
  const cookie = await cookies();
  cookie.set("accessToken", access_token, { maxAge: expires_in });

  return accessTokenSchema.parse(res);
};
