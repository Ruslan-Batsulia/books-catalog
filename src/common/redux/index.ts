import { configureStore } from "@reduxjs/toolkit";

import changeThemeReducer, {
  setChangeTheme,
} from "./slices/changeThemeSlice";

import readingProgressReducer, {
  setReadingProgress,
  incrementReadingProgress,
  decrementReadingProgress,
} from "./slices/readingProgress";

import readingGoalReducer, {
  setReadingGoal,
  incrementReadingGoal,
  decrementReadingGoal,
} from "./slices/readingGoal";

export type StoreType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    readingGoal: readingGoalReducer,
    changeTheme: changeThemeReducer,
    readingProgress: readingProgressReducer,
  },
});

export {
  store,
  setChangeTheme,
  setReadingGoal,
  setReadingProgress,
  incrementReadingGoal,
  decrementReadingGoal,
  incrementReadingProgress,
  decrementReadingProgress,
};
