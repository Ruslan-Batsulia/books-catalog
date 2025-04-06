import BooksList from "./BooksList/BooksList";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className={"main"}>
      <div className="container">
        <BooksList />
      </div>
    </main>
  );
};
