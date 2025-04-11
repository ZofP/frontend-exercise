import { useTranslations } from "next-intl";

import { Link, Typography } from "@/components";
import { CONFIG } from "@/config";
import { Article } from "@/types/article";
import { formatDate } from "@/utils";
import { ArticleCardImage } from "./ArticleCardImage";

export const ArticleCard = ({
  articleId,
  title,
  perex,
  createdAt,
  imageId,
}: Article) => {
  const t = useTranslations("article");

  return (
    <article className="flex gap-[24px] h-[244px]">
      <ArticleCardImage imageId={imageId} />
      <div className="flex flex-col gap-[16px]">
        <Typography variant="h4">{title}</Typography>
        <div className="flex gap-[8px] items-center text-secondary">
          <Typography variant="small">{t("unknownAuthor")}</Typography>
          <div className="w-[4px] h-[4px] rounded-full bg-secondary" />
          <Typography variant="small">{formatDate(createdAt)}</Typography>
        </div>
        <Typography>{perex}</Typography>
        <div className="flex gap-[11px]">
          <Link
            href={{
              pathname: CONFIG.app.routes.common.articleDetail.replace(
                ":id",
                articleId
              ),
            }}
            variant="small"
            className="text-primary"
          >
            {t("readWholeArticle")}
          </Link>
        </div>
      </div>
    </article>
  );
};
