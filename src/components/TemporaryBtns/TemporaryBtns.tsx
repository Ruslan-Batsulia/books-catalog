"use client";

import {
  decrementReadingProgress,
  incrementReadingProgress
} from "@/src/common/redux/readingProgress";
import {
  decrementReadingGoal,
  incrementReadingGoal
} from "@/src/common/redux/readingGoal";
import { useDispatch } from "react-redux";
import { useChangeTheme } from "@/src/common/hooks/useChangeTheme";

import "./TemporaryBtns.scss";

export default function TemporaryBtns() {
  const dispatch = useDispatch();
  const { Theme, ThemeChange } = useChangeTheme();

  return (
    <div className={"temporary-btns"}>
      <div>
        <span>{"Додати/Відняти книгу з прочитаних"}</span>
        <button onClick={() => dispatch(incrementReadingProgress())}>
          {"+"}
        </button>
        <button onClick={() => dispatch(decrementReadingProgress())}>
          {"-"}
        </button>
      </div>

      <div>
        <span>{"Додати/Відняти книгу з мети"}</span>
        <button onClick={() => dispatch(incrementReadingGoal())}>
          {"+"}
        </button>
        <button onClick={() => dispatch(decrementReadingGoal())}>
          {"-"}
        </button>
      </div>

      <div>
        <button onClick={() => ThemeChange("light")} disabled={Theme === "light"}>
          {"Light"}
        </button>
        <button onClick={() => ThemeChange("dark")} disabled={Theme === "dark"}>
          {"Dark"}
        </button>
        <button onClick={() => ThemeChange("system")} disabled={Theme === "system"}>
          {"System"}
        </button>
      </div>
    </div>
  );
};
