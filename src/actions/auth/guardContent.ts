"use server";

import { redirect, RedirectType } from "next/navigation";

import { APP_CONFIG } from "@/config/app";
import { getAccessToken } from "./getAccessToken";

const {
  anonymous: { login },
  admin: { myArticles },
} = APP_CONFIG.routes;

export const guardContent = async (shouldBeAuthenticated = true) => {
  const accessToken = await getAccessToken();
  if (shouldBeAuthenticated === !!accessToken) {
    return;
  }
  if (shouldBeAuthenticated) {
    redirect(login, RedirectType.replace);
  }

  redirect(myArticles, RedirectType.replace);
};
