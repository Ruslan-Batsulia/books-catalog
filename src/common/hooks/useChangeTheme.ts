"use client";

import {
  setChangeTheme,
  ThemeStateType,
} from "../redux/slices/changeThemeSlice";
import { useEffect } from "react";
import { StoreType } from "../redux";
import { useDispatch, useSelector } from "react-redux";

export function useChangeTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: StoreType) => state.changeTheme.theme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as ThemeStateType | null;
    if (savedTheme) {
      dispatch(setChangeTheme(savedTheme));
    }
  }, [dispatch]);

  const setTheme = (newTheme: ThemeStateType) => {
    dispatch(setChangeTheme(newTheme));
  };

  return { theme, setTheme };
};
