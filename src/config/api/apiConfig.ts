import { ENDPOINTS_CONFIG } from "./endpoints";
import { ENV_CONFIG } from "./env";
import { TAGS_CONFIG } from "./tags";

export const API_CONFIG = {
  endpoints: ENDPOINTS_CONFIG,
  env: ENV_CONFIG,
  tags: TAGS_CONFIG,
} as const;
