import React, { Suspense } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button, LoadingIndicator, Typography } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { MyArticlesTable } from "./MyArticlesTable";

export const MyArticlesContent = () => {
  const t = useTranslations("pages.admin");
  return (
    <div className="h-full w-full">
      <header className="flex gap-24 items-center">
        <Typography variant="h1" className="[&&]:leading-40">
          {t("myArticles.heading")}
        </Typography>
        <Link href={APP_CONFIG.routes.admin.newArticle}>
          <Button>{t("myArticles.newArticle")}</Button>
        </Link>
      </header>
      <Suspense fallback={<LoadingIndicator height={300} />}>
        <MyArticlesTable />
      </Suspense>
    </div>
  );
};
