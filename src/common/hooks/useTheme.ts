"use client";

import { useState, useEffect } from "react";

type Theme = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

export function useTheme() {
  const getStoredTheme = (): Theme => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  };

  const [theme, setTheme] = useState<Theme>(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (selectedTheme: Theme) => {
      let newTheme: ResolvedTheme = selectedTheme === "dark" ? "dark" : "light";

      if (selectedTheme === "system") {
        newTheme = mediaQuery.matches ? "dark" : "light";
      }

      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      setResolvedTheme(newTheme);
    };

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (theme === "system") applyTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  return { theme, resolvedTheme, setTheme };
};
