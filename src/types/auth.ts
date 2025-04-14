import { z } from "zod";

import { TFunction } from "./translation";
import { requiredStringSchema } from "./validation";

export const accessTokenSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
});
export type AccessToken = z.infer<typeof accessTokenSchema>;

export const loginSchema = <T extends TFunction>(t: T) =>
  z.object({
    username: requiredStringSchema(t),
    password: requiredStringSchema(t),
  });

export type LoginSchema = z.infer<ReturnType<typeof loginSchema>>;
