import React from "react";
import { useTranslations } from "next-intl";

import { Typography } from "@/components";
import { formatDate } from "@/utils";

interface ArticleAuthorDateProps {
  createdAt: string;
}

export const ArticleAuthorDate = ({ createdAt }: ArticleAuthorDateProps) => {
  const t = useTranslations("article");

  return (
    <div className="flex gap-8 items-center text-secondary">
      <Typography variant="small">{t("unknownAuthor")}</Typography>
      <div className="w-4 h-4 rounded-full bg-secondary" />
      <Typography variant="small">{formatDate(createdAt)}</Typography>
    </div>
  );
};
