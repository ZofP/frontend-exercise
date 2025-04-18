"use client";

import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, RootState } from "../services/store";

interface ReduxProviderProps extends PropsWithChildren {
  preloadedState?: Partial<RootState>;
}

export const ReduxProvider = ({
  children,
  preloadedState,
}: ReduxProviderProps) => {
  const storeRef = useRef(makeStore(preloadedState));
  return <Provider store={storeRef.current}>{children}</Provider>;
};
