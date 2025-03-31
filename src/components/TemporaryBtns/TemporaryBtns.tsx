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

import "./TemporaryBtns.scss";

export default function TemporaryBtns() {
  const dispatch = useDispatch();

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
    </div>
  );
};
