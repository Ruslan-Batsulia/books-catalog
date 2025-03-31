"use client";

import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, ThemeStateType } from "../redux/changeTheme";

export function useChangeTheme() {
  const dispatch = useDispatch();
  const Theme = useSelector((state: RootState) => state.changeTheme.theme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as ThemeStateType | null;
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  const ThemeChange = (newTheme: ThemeStateType) => {
    dispatch(setTheme(newTheme));
  };

  return { Theme, ThemeChange };
};
