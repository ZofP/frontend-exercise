"use server";

import { redirect, RedirectType } from "next/navigation";

import { CONFIG } from "@/config";
import { checkAuthenticated } from "./checkAuthenticated";

const {
  anonymous: { login },
  admin: { myArticles },
} = CONFIG.app.routes;

export const guardContent = async (shouldBeAuthenticated = true) => {
  const isAuthenticated = await checkAuthenticated();
  if (shouldBeAuthenticated === isAuthenticated) {
    return;
  }
  if (shouldBeAuthenticated) {
    redirect(login, RedirectType.replace);
  }

  redirect(myArticles, RedirectType.replace);
};
