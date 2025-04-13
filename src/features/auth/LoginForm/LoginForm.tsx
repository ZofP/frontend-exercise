"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { login } from "@/actions/auth";
import { HookForm, Typography } from "@/components";
import { FormInputErrorMessageTypeEnum } from "@/types";
import { LoginSchema, loginSchema } from "@/types/auth";

const defaultValues: LoginSchema = {
  username: "",
  password: "",
};

export const LoginForm = () => {
  const t = useTranslations();
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema(t)),
    defaultValues,
  });
  const { setError } = methods;
  const submitHandler: SubmitHandler<LoginSchema> = async (credentials) => {
    console.log(credentials);
    try {
      await login(credentials);
    } catch {
      setError("password", {
        message: t(FormInputErrorMessageTypeEnum.WrongCredentials),
      });
    }
  };

  return (
    <section className="flex flex-col gap-32">
      <Typography variant="h1">{t("pages.anonymous.login.title")}</Typography>
      <HookForm submitHandler={submitHandler} {...methods}>
        <HookForm.TextInput
          name="username"
          label={t("pages.anonymous.login.inputs.username")}
        />
        <HookForm.TextInput
          name="password"
          type="password"
          label={t("pages.anonymous.login.inputs.password")}
        />
        <HookForm.SubmitButton>
          {t("pages.anonymous.login.submitButtonText")}
        </HookForm.SubmitButton>
      </HookForm>
    </section>
  );
};
