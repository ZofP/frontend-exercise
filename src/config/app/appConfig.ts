import { ENV_CONFIG } from "./env";
import { ROUTES_CONFIG } from "./routes";

export const APP_CONFIG = {
  routes: ROUTES_CONFIG,
  env: ENV_CONFIG,
} as const;
