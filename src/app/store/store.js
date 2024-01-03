import { develpzApi } from "@/features/develpz/api";
import { develpzSlice } from "@/features/develpz/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    example: develpzSlice.reducer,
    [develpzApi.reducerPath]: develpzApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(develpzApi.middleware),
});
