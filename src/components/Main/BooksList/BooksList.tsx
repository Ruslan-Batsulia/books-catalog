"use client";

import { Book } from "@/src/common/types";
import BookCard from "./BookCard/BookCard";
import { getBooks } from "@/src/common/api";
import React, { useEffect, useState } from "react";


import "./BooksList.scss";

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksResponse = await getBooks();
        
        if (booksResponse) {
          setBooks(booksResponse.results);
        }

        setLoading(false);
      } catch (error: unknown) {
        console.log("Error: ", error);
      }
    }

    fetchBooks();
  }, []);

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
        {(loading) ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </section>
    </>
  );
};
