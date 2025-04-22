"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { createComment } from "@/actions/article";
import { AvatarPlaceholderIcon, HookForm } from "@/components";
import { FormInputErrorMessageTypeEnum } from "@/types";
import { ArticleDetail } from "@/types/article";
import {
  createCommentRequestValidationSchema,
  CreateCommentValidationRequest,
} from "@/types/comment";

const defaultValues: CreateCommentValidationRequest = {
  author: "",
  content: "",
};

type AddArticleCommentFormProps = Pick<ArticleDetail, "articleId">;

export const AddArticleCommentForm = ({
  articleId,
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
    setValue,
  } = methods;

  const submitHandler: SubmitHandler<CreateCommentValidationRequest> = async (
    data
  ) => {
    // remove the content optimistically
    resetField("content");
    // prevent multiple calls to the server at the same time
    if (isSubmitting) {
      return;
    }
    try {
      const reqData = { ...data, articleId };
      await createComment(reqData);
    } catch {
      // restore the content if the request fails
      setValue("content", data.content);
      // show the error
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
