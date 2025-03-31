import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const savedReadingProgress = typeof window !== "undefined"
  ? Number(localStorage.getItem("savedReadingProgress")) || 0
  : 0;

type ReadingProgressState = {
  readProg: number;
};

const initialState: ReadingProgressState = {
  readProg: savedReadingProgress,
};

const readingProgressSlice = createSlice({
  name: "readingProgress",
  initialState,
  reducers: {
    incrementReadingProgress: (state) => {
      state.readProg += 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingProgress", String(state.readProg));
      }
    },
    decrementReadingProgress: (state) => {
      if (state.readProg > 0) {
        state.readProg -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("savedReadingProgress", String(state.readProg));
        }
      }
    },
    setReadingProgress: (state, action: PayloadAction<number>) => {
      state.readProg = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingProgress", String(state.readProg));
      }
    },
  },
});

export const {
  incrementReadingProgress,
  decrementReadingProgress,
  setReadingProgress
} = readingProgressSlice.actions;
export default readingProgressSlice.reducer;
