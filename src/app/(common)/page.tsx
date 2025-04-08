import { useTranslations } from "next-intl";

import { Typography } from "@/components";
import { PageContent } from "@/features/page";

export default function HomePage() {
  const t = useTranslations("pages.common.home");
  return (
    <PageContent>
      <div className="flex flex-col gap-[60px]">
        <Typography variant="h1">{t("heading")}</Typography>
        <div>cards list</div>
      </div>
    </PageContent>
  );
}
