"use client";

import { useTransition } from "react";

import { deleteArticleById } from "@/actions/article";
import { TrashIcon } from "@/components";

interface DeleteArticleButtonProps {
  articleId: string;
}

export const DeleteArticleButton = ({
  articleId,
}: DeleteArticleButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (isPending) {
      return;
    }
    startTransition(async () => {
      await deleteArticleById(articleId);
    });
  };
  return (
    <button onClick={handleDelete}>
      <TrashIcon />
    </button>
  );
};
