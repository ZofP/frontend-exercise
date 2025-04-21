import React from "react";
import { useTranslations } from "next-intl";

import { PageHeader } from "@/components";

export default function AboutPage() {
  const t = useTranslations("pages.common.about");
  return <PageHeader title={t("heading")} />;
}
