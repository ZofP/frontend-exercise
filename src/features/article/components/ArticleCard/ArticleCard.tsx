import { useTranslations } from "next-intl";

import { Link, Typography } from "@/components";
import { CONFIG } from "@/config";
import { Article } from "@/types/article";
import { formatDate } from "@/utils";
import { ArticleImage } from "../ArticleImage";

export const ArticleCard = ({
  articleId,
  title,
  perex,
  createdAt,
  imageId,
}: Article) => {
  const t = useTranslations("article");

  return (
    <article className="flex gap-24 h-244">
      <ArticleImage imageId={imageId} width={272} height={244} />
      <div className="flex flex-col gap-16">
        <Typography variant="h4">{title}</Typography>
        <div className="flex gap-8 items-center text-secondary">
          <Typography variant="small">{t("unknownAuthor")}</Typography>
          <div className="w-4p h-4 rounded-full bg-secondary" />
          <Typography variant="small">{formatDate(createdAt)}</Typography>
        </div>
        <Typography>{perex}</Typography>
        <div className="flex gap-11">
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
