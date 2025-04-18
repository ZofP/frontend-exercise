import { useTranslations } from "next-intl";

import { Typography, TypographyLink } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { Article } from "@/types/article";
import { ArticleAuthorDate } from "../ArticleAuthorDate";
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
        <ArticleAuthorDate createdAt={createdAt} />
        <Typography>{perex}</Typography>
        <div className="flex gap-11">
          <TypographyLink
            href={{
              pathname: APP_CONFIG.routes.common.articleDetail.replace(
                ":id",
                articleId
              ),
            }}
            variant="small"
            className="text-primary"
          >
            {t("readWholeArticle")}
          </TypographyLink>
        </div>
      </div>
    </article>
  );
};
