import Image from "next/image";
import { useTranslations } from "next-intl";

import { ThinContentWrapper } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { NavbarLink } from "./NavbarLink";
import { ProtectedLinks } from "./ProtectedLinks";

const {
  common: { home, about },
} = APP_CONFIG.routes;

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="flex h-56 bg-light justify-center pt-3">
      <ThinContentWrapper>
        <div className="flex gap-40 items-center">
          <Image src="/images/logo.png" alt="logo" width={39} height={44} />
          <NavbarLink href={home}>{t("recentArticles")}</NavbarLink>
          <NavbarLink href={about}>{t("about")}</NavbarLink>
        </div>
        <ProtectedLinks />
      </ThinContentWrapper>
    </nav>
  );
};
