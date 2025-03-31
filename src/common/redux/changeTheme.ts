import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeStateType = "dark" | "light" | "system";

type ThemeState = {
  theme: ThemeStateType;
};

const getInitialTheme = (): ThemeStateType => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as ThemeStateType) || "system";
  }
  return "system";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const changeTheme = createSlice({
  name: "changeTheme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeStateType>) => {
      state.theme = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);

        if (action.payload === "system") {
          document.documentElement.removeAttribute("data-theme");
        } else {
          document.documentElement.setAttribute("data-theme", action.payload);
        }
      }
    },
  },
});

export const { setTheme } = changeTheme.actions;
export default changeTheme.reducer;
