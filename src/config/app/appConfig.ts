import { ENV_CONFIG_PUBLIC } from "./env";
import { ROUTES_CONFIG } from "./routes";

export const APP_CONFIG = {
  routes: ROUTES_CONFIG,
  env: ENV_CONFIG_PUBLIC,
} as const;
