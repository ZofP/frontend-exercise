"use client";

import { useTranslations } from "next-intl";

import { logout } from "@/actions/auth";
import { ArrowRightIcon, Button, TypographyLink } from "@/components";
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

  if (!isAuthenticated) {
    return (
      <TypographyLink href={login} className="text-primary">
        <div className="flex items-center">
          {t("login")}
          <ArrowRightIcon />
        </div>
      </TypographyLink>
    );
  }

  const handleLogout = async () => {
    dispatch(setAnonymous());
    await logout();
  };

  return (
    <div className="flex gap-40 items-center">
      <NavbarLink href={myArticles}>{t("myArticles")}</NavbarLink>
      <TypographyLink href={newArticle} className="text-primary">
        {t("newArticle")}
      </TypographyLink>
      <Button onClick={handleLogout}>{t("logout")}</Button>
    </div>
  );
};
