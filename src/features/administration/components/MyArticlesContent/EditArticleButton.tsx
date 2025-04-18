"use client";

import Link from "next/link";

import { PencilIcon } from "@/components";
import { APP_CONFIG } from "@/config/app";
import { buildDynamicPath } from "@/utils";

interface EditArticleButtonProps {
  articleId: string;
}

export const EditArticleButton = ({ articleId }: EditArticleButtonProps) => {
  return (
    <Link
      href={{
        pathname: buildDynamicPath(APP_CONFIG.routes.admin.editArticle, {
          articleId,
        }),
      }}
    >
      <PencilIcon />
    </Link>
  );
};
