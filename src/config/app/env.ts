import { z } from "zod";

const parser = z.string().min(1).parse;

export const ENV_CONFIG_PUBLIC = {
  apiWsUrl: parser(process.env.API_URL),
} as const;
