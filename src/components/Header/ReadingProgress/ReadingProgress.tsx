"use client";

import {
  incrementReadingProgress,
  decrementReadingProgress,
} from "@/src/common/redux/readingProgress";
import { RootState } from "@/src/common/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";
import ReadingProgressSkeleton from "./ReadingProgressSkeleton/ReadingProgressSkeleton";

import "./ReadingProgress.scss";

export default function ReadingProgress() {
  const hasMounted = useHasMounted();
  const dispatch = useDispatch();
  const readingProgress = useSelector(
    (state: RootState) => state.readingProgress.readProg
  );

  if (!hasMounted) return <ReadingProgressSkeleton />;

  return (
    <div className={"reading-progress"}>
      <span>{readingProgress} {"прочитано з 50"}</span>
      <button onClick={() => dispatch(decrementReadingProgress())}>➖</button>
      <button onClick={() => dispatch(incrementReadingProgress())}>➕</button>
    </div>
  );
};
