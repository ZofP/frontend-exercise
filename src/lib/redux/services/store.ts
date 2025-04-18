import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";

const rootReducer = combineReducers({ [authSlice.name]: authSlice.reducer });

// Register reducers here from individual modules
export const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type AppStore = ReturnType<typeof makeStore>;
