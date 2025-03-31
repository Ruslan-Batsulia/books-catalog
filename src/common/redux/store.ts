import { configureStore } from "@reduxjs/toolkit";
import readingProgressReducer from "./readingProgress";

export const store = configureStore({
  reducer: {
    readingProgress: readingProgressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
