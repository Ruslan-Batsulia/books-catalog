"use client";

import { Book } from "@/src/common/types";
import BookCard from "./BookCard/BookCard";
// import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useGetBooksQuery } from "@/src/common/api";

import "./BooksList.scss";

export default function BooksList() {
  const params = useSearchParams();
  const page = Number(params.get("page") || 1);

  const queryParams = {
    page: page,
  };

  // const router = useRouter();
  
  
  const { data, isLoading, isError } = useGetBooksQuery(queryParams);
  const books: Book[] = data?.results || [];

  const bookIcon = (number: number) => books[number]?.resources?.find(
    (icon) => icon.type === "image/jpeg" && icon.uri.includes("cover.medium.jpg")
  )?.uri;

  const bookAuthor = (number: number) => books[number]?.agents?.filter(
    (author) => author.type === "Author"
  ).map((author) => author.person);

  const bookTitle = (number: number) => books[number]?.title;

  return (
    <>
      <section className={"books-list"}>
        {(isLoading) ? (
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
      </section>
    </>
  );
};
