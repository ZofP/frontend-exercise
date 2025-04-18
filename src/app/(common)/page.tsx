import { Suspense } from "react";
import { useTranslations } from "next-intl";

import { LoadingIndicator, PageHeader } from "@/components";
import { ArticlesList } from "@/features/article/components/ArticlesList";

export default function HomePage() {
  const t = useTranslations("pages.common.home");
  return (
    <div className="flex flex-col gap-60">
      <PageHeader title={t("heading")} />
      <section className="flex flex-col gap-32">
        <Suspense fallback={<LoadingIndicator />}>
          <ArticlesList />
        </Suspense>
      </section>
    </div>
  );
}
