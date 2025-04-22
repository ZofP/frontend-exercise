"use client";

import { startTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { createComment } from "@/actions/article";
import { AvatarPlaceholderIcon, HookForm } from "@/components";
import { FormInputErrorMessageTypeEnum } from "@/types";
import { ArticleDetail } from "@/types/article";
import {
  Comment,
  createCommentRequestValidationSchema,
  CreateCommentValidationRequest,
} from "@/types/comment";
import { generateUniqueId } from "@/utils";

const defaultValues: CreateCommentValidationRequest = {
  author: "",
  content: "",
};

interface AddArticleCommentFormProps extends Pick<ArticleDetail, "articleId"> {
  addComment: (action: Comment) => void;
}

export const AddArticleCommentForm = ({
  articleId,
  addComment,
}: AddArticleCommentFormProps) => {
  const t = useTranslations();
  const methods = useForm<CreateCommentValidationRequest>({
    resolver: zodResolver(createCommentRequestValidationSchema(t)),
    defaultValues,
  });
  const {
    setError,
    formState: { isSubmitting },
    resetField,
  } = methods;

  const submitHandler: SubmitHandler<CreateCommentValidationRequest> = async (
    data
  ) => {
    if (isSubmitting) {
      return;
    }
    startTransition(() => {
      const newComment: Comment = {
        ...data,
        commentId: generateUniqueId(),
        articleId,
        postedAt: new Date().toISOString(),
        score: 0,
      };
      addComment(newComment);
    });

    console.log("publish", data);
    try {
      const reqData = { ...data, articleId };
      await createComment(reqData);
      resetField("content");
    } catch (error) {
      console.log({ error });

      setError("content", {
        message: t(FormInputErrorMessageTypeEnum.SomethingWentWrong),
      });
    }
  };

  return (
    <div className="flex gap-28">
      <AvatarPlaceholderIcon />
      <HookForm submitHandler={submitHandler} className="w-full" {...methods}>
        <div className="flex flex-col gap-8 w-full">
          <HookForm.TextInput
            name="author"
            placeholder={t("article.comments.author")}
            className="w-full"
          />
          <HookForm.TextInput
            name="content"
            placeholder={t("article.comments.content")}
          />
          <HookForm.SubmitButton>
            {t("article.comments.submitButtonText")}
          </HookForm.SubmitButton>
        </div>
      </HookForm>
    </div>
  );
};
