import { createSlice } from "@reduxjs/toolkit";

import { AuthState } from "../types";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },

    setAnonymous: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  actions: { setAuthenticated, setAnonymous },
  caseReducers,
} = authSlice;
