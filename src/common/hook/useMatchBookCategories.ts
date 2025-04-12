"use client";

import { useEffect, useState } from "react";
import { CATEGORY_MAP } from "../utils";

type MatchedCategory = {
  title: string;
  description: string;
};

export const useMatchBookCategories = (
  subjects: string[],
  locale: (key: string) => string
): [
  matchedCategories: MatchedCategory[],
  unmatchedSubjects: string[]
] => {
  const [matched, setMatched] = useState<MatchedCategory[]>([]);
  const [unmatched, setUnmatched] = useState<string[]>([]);

  useEffect(() => {
    const matchCategories = async () => {
      const map = CATEGORY_MAP(locale);
      const seen = new Set<string>();
      const found: MatchedCategory[] = [];
      const notFound: string[] = [];

      for (const subject of subjects) {
        let foundMatch = false;

        for (const key in map) {
          if (map[key].bookshelf.includes(subject)) {
            if (!seen.has(key)) {
              seen.add(key);
              found.push({
                title: map[key].title,
                description: map[key].description,
              });
            }
            foundMatch = true;
            break;
          }
        }

        if (!foundMatch) {
          notFound.push(subject);
        }
      }

      setMatched(found);
      setUnmatched(notFound);
    };

    matchCategories();
  }, [JSON.stringify(subjects), locale]);

  return [matched, unmatched];
};
