import { useTranslations } from "next-intl";

import { Typography } from "@/components";
import { ArticlesList } from "@/features/article/components/ArticlesList";

export default function HomePage() {
  const t = useTranslations("pages.common.home");
  return (
    <div className="flex flex-col gap-60">
      <Typography variant="h1">{t("heading")}</Typography>
      <div className="flex flex-col gap-32">
        <ArticlesList />
      </div>
    </div>
  );
}
