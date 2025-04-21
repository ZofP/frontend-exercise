"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";

import { login } from "@/actions/auth";
import { HookForm, PageHeader } from "@/components";
import { setAuthenticated, useAppDispatch } from "@/lib/redux";
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
  const dispatch = useAppDispatch();
  const { setError } = methods;

  const handleAuthentication = () => {
    dispatch(setAuthenticated());
  };
  const submitHandler: SubmitHandler<LoginSchema> = async (credentials) => {
    try {
      await login(credentials);
      handleAuthentication();
    } catch (error) {
      // This is needed so that the handleAuthentication runs if the error comes from the next redirect
      if (error instanceof Error && error.message === "NEXT_REDIRECT") {
        handleAuthentication();
        return;
      }
      setError("password", {
        message: t(FormInputErrorMessageTypeEnum.WrongCredentials),
      });
    }
  };

  return (
    <div className="flex flex-col gap-32">
      <PageHeader title={t("pages.anonymous.login.title")} />
      <section>
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
    </div>
  );
};
