"use client";

import {
  incrementReadingGoal,
  decrementReadingGoal,
  incrementReadingProgress,
  decrementReadingProgress,
} from "@/src/common/redux";
import { useDispatch } from "react-redux";
import { useChangeTheme } from "@/src/common/hooks/useChangeTheme";

import "./TemporaryBtns.scss";

export default function TemporaryBtns() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useChangeTheme();

  return (
    <div className={"temporary-btns"}>
      <div className={"temporary-btns__div"}>
        <span>{"Додати/Відняти книгу з прочитаних"}</span>
        <button
          className={"temporary-btns__button"}
          onClick={() => dispatch(incrementReadingProgress())}
        >
          {"+"}
        </button>
        <button
          className={"temporary-btns__button"}
          onClick={() => dispatch(decrementReadingProgress())}
        >
          {"-"}
        </button>
      </div>

      <div className={"temporary-btns__div"}>
        <span>{"Додати/Відняти книгу з мети"}</span>
        <button
          className={"temporary-btns__button"}
          onClick={() => dispatch(incrementReadingGoal())}
        >
          {"+"}
        </button>
        <button
          className={"temporary-btns__button"}
          onClick={() => dispatch(decrementReadingGoal())}
        >
          {"-"}
        </button>
      </div>

      <div className={"temporary-btns__div"}>
        <button
          className={"temporary-btns__button"}
          onClick={() => setTheme("light")} disabled={theme === "light"}
        >
          {"Light"}
        </button>
        <button
          className={"temporary-btns__button"}
          onClick={() => setTheme("dark")} disabled={theme === "dark"}
        >
          {"Dark"}
        </button>
        <button
          className={"temporary-btns__button"}
          onClick={() => setTheme("system")} disabled={theme === "system"}
        >
          {"System"}
        </button>
      </div>
    </div>
  );
};
