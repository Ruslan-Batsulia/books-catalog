import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedGoal = typeof window !== "undefined"
  ? Number(localStorage.getItem("savedReadingGoal")) || 10
  : 10;

type GoalState = {
  readingGoal: number;
};

const initialState: GoalState = {
  readingGoal: savedGoal,
};

const readingGoalSlice = createSlice({
  name: "readingGoal",
  initialState,
  reducers: {
    incrementReadingGoal: (state) => {
      state.readingGoal += 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingGoal", String(state.readingGoal));
      }
    },
    decrementReadingGoal: (state) => {
      if (state.readingGoal > 0) {
        state.readingGoal -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("savedReadingGoal", String(state.readingGoal));
        }
      }
    },
    setReadingGoal: (state, action: PayloadAction<number>) => {
      state.readingGoal = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingGoal", String(state.readingGoal));
      }
    },
  },
});

export const {
  incrementReadingGoal,
  decrementReadingGoal,
  setReadingGoal,
} = readingGoalSlice.actions;

export default readingGoalSlice.reducer;
