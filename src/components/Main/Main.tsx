"use client";

import BooksList from "./BooksList/BooksList";

import "./Main.scss";

export default function Main() {
  return (
    <main className={"main"}>
      <div className="container">
        <BooksList />
      </div>
    </main>
  );
};
