"use server";

import { redirect, RedirectType } from "next/navigation";

import { CONFIG } from "@/config";
import { getAccessToken } from "./getAccessToken";

const {
  anonymous: { login },
  admin: { myArticles },
} = CONFIG.app.routes;

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
