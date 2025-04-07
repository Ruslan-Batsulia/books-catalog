"use client";

import Image from "next/image";
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
  description: string | null | undefined;
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
      description: data?.description,
    });
  }, [data]);

  return (
    <section className="book">
      {(/*isLoading || isFetching*/ false) ? (
        <div>{"Loading"}</div>
      ) : (
        <>
          <div className={"book__info-left"}>
            <div className={"book__icon-wrapper"}>
              <div className={"book__icon-container"}>
                {(book?.icon) ? (
                  <Image
                    src={book.icon}
                    alt={"Book Icon"}
                    className={"book__icon"}
                    fill={true}
                    sizes={"100px"}
                    priority={true}
                  />
                ) : (
                  <div className={"book__icon-skeleton-container skeleton-container"}>
                    <div className={"book__icon-skeleton skeleton"} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={"book__info-right"}>
            <div className={"book__title-container"}>
              <h1 className={"book__title-book"}>
                {book?.title}
              </h1>

              <span className={"book__description-title"}>
                {translate("description")}
              </span>
            </div>
            <div className={"book__description-container"}>
              <span className={"book__description"}>
                {book?.description}
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
