import { parseRequiredString } from "@/utils";

export const ENV_CONFIG = {
  apiUrl: parseRequiredString(process.env.API_URL),
  apiKey: parseRequiredString(process.env.API_KEY),
} as const;
