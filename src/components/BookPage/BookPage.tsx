import Book from "./Book/Book";

import "./BookPage.scss";

type BookPageProps = {
  bookId: number;
};

export default function BookPage({ bookId }: BookPageProps) {
  return (
    <main className="book-page">
      <div className="container">
        <Book bookId={bookId} />
      </div>
    </main>
  );
};
