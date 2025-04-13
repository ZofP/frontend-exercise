import { z } from "zod";

const parser = z.string().min(1).parse;

export const ENV_CONFIG = {
  apiUrl: parser(process.env.API_URL),
  apiKey: parser(process.env.API_KEY),
} as const;
