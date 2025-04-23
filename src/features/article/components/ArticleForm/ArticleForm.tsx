"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { createNewArticle, updateArticleById } from "@/actions/article";
import { HookForm, PageHeader } from "@/components";
import {
  CreateArticleRequest,
  createArticleRequestSchema,
} from "@/types/article";

const createArticleDefaultValues: CreateArticleRequest = {
  title: "",
  content: "",
  perex: "",
};

interface ArticleFormProps {
  defaultValues?: CreateArticleRequest;
  // If articleId is provided, the form will be in edit mode. Otherwise, it will be in create mode.
  articleId?: string;
}

export const ArticleForm = ({
  defaultValues = createArticleDefaultValues,
  articleId,
}: ArticleFormProps) => {
  const t = useTranslations();
  const methods = useForm<CreateArticleRequest>({
    resolver: zodResolver(createArticleRequestSchema(t)),
    defaultValues,
  });
  const submitHandler: SubmitHandler<CreateArticleRequest> = async (data) => {
    if (articleId) {
      await updateArticleById(articleId, data);
      return;
    }

    await createNewArticle(data);
  };

  return (
    <div className="w-760 max-w-760">
      <HookForm {...methods} submitHandler={submitHandler}>
        <div className="flex flex-col gap-40">
          <PageHeader
            title={
              articleId
                ? t("pages.admin.editArticle.heading")
                : t("pages.admin.newArticle.heading")
            }
          >
            <HookForm.SubmitButton>
              {t("pages.admin.newArticle.publish")}
            </HookForm.SubmitButton>
          </PageHeader>
          <div className="flex flex-col gap-32">
            <HookForm.TextInput
              name="title"
              label={t("pages.admin.newArticle.inputs.title")}
            />
            <HookForm.TextInput
              name="perex"
              label={t("pages.admin.newArticle.inputs.perex")}
            />
            <HookForm.MarkdownEditor
              name="content"
              label={t("pages.admin.newArticle.inputs.content")}
            />
          </div>
        </div>
      </HookForm>
    </div>
  );
};
