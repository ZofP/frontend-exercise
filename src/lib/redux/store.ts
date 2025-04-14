import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./authSlice";

// Register reducers here from individual modules
export const store = configureStore({
  reducer: { [authSlice.name]: authSlice.reducer },
});
