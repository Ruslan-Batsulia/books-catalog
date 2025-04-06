import { configureStore } from "@reduxjs/toolkit";

import {
  readingGoalReducer,
  changeThemeReducer,
  favoriteBooksReducer,
  readingProgressReducer,
} from "./slices";

import {
  getBooksQuery,
  getBookByIdQuery,
} from "@/src/common/api";

const store = configureStore({
  reducer: {
    readingGoal: readingGoalReducer,
    changeTheme: changeThemeReducer,
    readingProgress: readingProgressReducer,
    favoriteBooks: favoriteBooksReducer,
    
    [getBooksQuery.reducerPath]: getBooksQuery.reducer,
    [getBookByIdQuery.reducerPath]: getBookByIdQuery.reducer,
  },
  middleware: (
    getDefaultMiddleware
  ) => getDefaultMiddleware().concat(
    getBooksQuery.middleware,
    getBookByIdQuery.middleware
  ),
});

export type StoreType = ReturnType<typeof store.getState>;

export { store };
