"use client";

import { deleteArticleById } from "@/actions/article";
import { TrashIcon } from "@/components";

interface DeleteArticleButtonProps {
  articleId: string;
}

export const DeleteArticleButton = ({
  articleId,
}: DeleteArticleButtonProps) => {
  const handleDelete = () => {
    console.log("delete", articleId);
    deleteArticleById(articleId);
  };
  return (
    <button onClick={handleDelete}>
      <TrashIcon />
    </button>
  );
};
