"use client";

import { useTranslations } from "next-intl";

import { logout } from "@/actions/auth";
import { ArrowRightIcon, Button, Link } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { setAnonymous, useAppDispatch, useAuth } from "@/lib/redux";
import { NavbarLink } from "./NavbarLink";

const {
  anonymous: { login },
  admin: { myArticles, newArticle },
} = APP_CONFIG.routes;

export const ProtectedLinks = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useAppDispatch();
  const t = useTranslations("navbar");

  console.log({ isAuthenticated });
  if (!isAuthenticated) {
    return (
      <Link href={login} className="text-primary">
        <div className="flex items-center">
          {t("login")}
          <ArrowRightIcon />
        </div>
      </Link>
    );
  }

  const handleLogout = async () => {
    dispatch(setAnonymous());
    await logout();
  };

  return (
    <div className="flex gap-40 items-center">
      <NavbarLink href={myArticles}>{t("myArticles")}</NavbarLink>
      <Link href={newArticle} className="text-primary">
        {t("newArticle")}
      </Link>
      <Button onClick={handleLogout}>{t("logout")}</Button>
    </div>
  );
};
