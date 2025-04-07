import Image from "next/image";
import { useTranslations } from "next-intl";

import { ArrowRightIcon, Link, ThinContentWrapper } from "@/components";
import { CONFIG } from "@/config";
import { NavbarLink } from "./NavbarLink";

const {
  common: { home, about },
  anonymous: { login },
} = CONFIG.routes;

export const Navbar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="flex h-[56px] bg-light justify-center pt-[3px]">
      <ThinContentWrapper>
        <div className="flex gap-[40px] items-center">
          <Image src="/images/logo.png" alt="logo" width={39} height={44} />
          <NavbarLink href={home}>{t("recentArticles")}</NavbarLink>
          <NavbarLink href={about}>{t("about")}</NavbarLink>
        </div>
        <Link href={login} className="text-primary">
          <div className="flex items-center">
            {t("login")}
            <ArrowRightIcon />
          </div>
        </Link>
      </ThinContentWrapper>
    </nav>
  );
};
