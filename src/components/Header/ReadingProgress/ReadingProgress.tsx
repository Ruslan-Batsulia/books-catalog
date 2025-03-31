"use client";

import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { RootState } from "@/src/common/redux/store";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

import "./ReadingProgress.scss";

export default function ReadingProgress() {
  const translate = useTranslations("Header");
  const hasMounted = useHasMounted();
  const readingProgress = useSelector(
    (state: RootState) => state.readingProgress.readProg
  );
  const readingGoal = useSelector(
    (state: RootState) => state.readingGoal.readingGoal
  );

  return (
    <div className={"reading-progress"}>
      <div className={"reading-progress__title"}>
        <span className={"reading-progress__number"}>
          {hasMounted ? readingProgress : 0}
        </span>
        <span className={"reading-progress__text"}>
          {translate("readingGoal")}
        </span>
        <span className={"reading-progress__number"}>
          {hasMounted ? readingGoal : 0}
        </span>
      </div>
      <div className={"reading-progress__bar"}>
        <div
          className={"reading-progress__filled"}
          style={{
            width: hasMounted ? `${(readingProgress / readingGoal) * 100}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};
