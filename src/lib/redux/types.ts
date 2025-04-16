import { store } from "./services/store";

export interface AuthState {
  isAuthenticated: boolean;
}

export type AppDispatch = typeof store.dispatch;
