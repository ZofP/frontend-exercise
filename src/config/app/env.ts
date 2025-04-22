import { parseRequiredString } from "@/utils";

export const ENV_CONFIG_PUBLIC = {
  apiWsUrl: parseRequiredString(process.env.NEXT_PUBLIC_API_WS_URL),
} as const;
