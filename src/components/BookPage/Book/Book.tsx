"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { useGetBookByIdQuery } from "@/src/common/api";

import "./Book.scss";

type BookProps = {
  bookId: number;
};

type BookState = {
  icon: string | undefined;
  title: string | undefined;
};

export default function Book({ bookId }: BookProps) {
  const translate = useTranslations("BookPage");
  const [book, setBook] = useState<BookState | undefined>(undefined);
  const { data, isLoading, isFetching, /*isError*/ } = useGetBookByIdQuery(bookId);

  useEffect(() => {
    setBook({
      icon: data?.resources?.find(
        (icon) => icon.type === "image/jpeg" && icon.uri.includes("cover.medium.jpg")
      )?.uri,
      title: data?.title,
    });
  }, [data]);

  return (
    <section className="book">
      {(isLoading || isFetching) ? (
        <div>{"Loading"}</div>
      ) : (
        <div>
          {translate("book")}
          {book?.title}
        </div>
      )}
    </section>
  );
};
