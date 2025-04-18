import React, { Suspense } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button, LoadingIndicator, PageHeader } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { MyArticlesTable } from "./MyArticlesTable";

export const MyArticlesContent = () => {
  const t = useTranslations("pages.admin");
  return (
    <div className="h-full w-full">
      <PageHeader title={t("myArticles.heading")}>
        <Link href={APP_CONFIG.routes.admin.newArticle}>
          <Button>{t("myArticles.newArticle")}</Button>
        </Link>
      </PageHeader>
      <Suspense fallback={<LoadingIndicator height={300} />}>
        <MyArticlesTable />
      </Suspense>
    </div>
  );
};
