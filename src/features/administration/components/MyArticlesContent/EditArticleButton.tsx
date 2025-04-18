"use client";

import { PencilIcon } from "@/components";

interface EditArticleButtonProps {
  articleId: string;
}

export const EditArticleButton = ({ articleId }: EditArticleButtonProps) => {
  const handleEdit = () => {
    console.log("edit", articleId);
  };
  return (
    <button onClick={handleEdit}>
      <PencilIcon />
    </button>
  );
};
