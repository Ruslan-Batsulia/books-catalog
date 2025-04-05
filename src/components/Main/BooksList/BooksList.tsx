"use client";

import { useLocale } from "next-intl";
import { Book } from "@/src/common/types";
import BookCard from "./BookCard/BookCard";
import Pagination from "./Pagination/Pagination";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetBooksQuery } from "@/src/common/api";
import { usePathname, useRouter } from "@/i18n/navigation";

import "./BooksList.scss";

export default function BooksList() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const searchParams = useSearchParams();
  
  const query = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  const page = Number(query.page || 1);
  const [currentPage, setCurrentPage] = useState(page);
  
  const queryParams = {
    page: page,
  };
  
  const { data, isLoading, isFetching, /*isError*/ } = useGetBooksQuery(queryParams);
  const books: Book[] = data?.results || [];
  const booksCount: number = data?.count || 10;
  
  const totalPages = Math.ceil(booksCount / 10);
  
  const bookIcon = (number: number) => books[number]?.resources?.find(
    (icon) => icon.type === "image/jpeg" && icon.uri.includes("cover.medium.jpg")
  )?.uri;
  
  const bookAuthor = (number: number) => books[number]?.agents?.filter(
    (author) => author.type === "Author"
  ).map((author) => author.person);
  
  const bookTitle = (number: number) => books[number]?.title;

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (page > 1) {
      router.replace({
        pathname: pathname,
        query: { ...query, page: page },
      }, {
        locale: currentLocale,
        scroll: false,
      });
    } else {
      const { page, ...restQuery } = query;

      router.replace({
        pathname: pathname,
        query: restQuery,
      }, {
        locale: currentLocale,
        scroll: false,
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <section className={"books-list"}>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        {(isLoading || isFetching) ? (
          <div className={"books-list__card-container"}>
            {[...Array(10)].map((_, i) => {
              return (
                <div key={i} className={"books-list__skeleton-card-container"}>
                  <div className={"books-list__skeleton-card-icon-container skeleton-container"}>
                    <div className={"books-list__skeleton-card-icon-skeleton skeleton"} />
                  </div>

                  <div className={"books-list__skeleton-card-info-container"}>
                    <div className={"books-list__skeleton-card-info-title-container skeleton-container"}>
                      <div className={"books-list__skeleton-card-info-title-skeleton skeleton"} />
                    </div>

                    <div className={"books-list__skeleton-card-info-author-container skeleton-container"}>
                      <div className={"books-list__skeleton-card-info-author-skeleton skeleton"} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={"books-list__card-container"}>
            {books.map((book, i) => {
              return (
                <BookCard
                  key={book.id}
                  icon={bookIcon(i)}
                  title={bookTitle(i)}
                  author={bookAuthor(i)}
                />
              )
            })}
          </div>
        )}
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </>
  );
};
