"use client";

import Image from "next/image";

import "./BookCard.scss";

type BookCardProps = {
  icon?: string | undefined;
  title?: string | undefined;
  author?: string[] | undefined;
};

export default function BookCard({
  icon,
  title,
  author,
}: BookCardProps) {
  return (
    <>
      <div className={"book-card"}>
        <div className={"book-card__icon-container"}>
          {(icon) ? (
            <Image
              src={icon}
              alt={"Icon Book"}
              className={"book-card__icon"}
              fill={true}
              sizes={"100px"}
              priority={true}
            />
          ) : (
            <div className={"book-card__icon-skeleton-container skeleton-container"}>
              <div className={"book-card__icon-skeleton skeleton"} />
            </div>
          )}
        </div>

        <div className={"book-card__info-container"}>
          {(title) ? (
            <span className={"book-card__info-title"}>
              {title}
            </span>
          ) : (
            <div className={"book-card__info-title-skeleton-container skeleton-container"}>
              <div className={"book-card__info-title-skeleton skeleton"} />
            </div>
          )}
          
          {(author) ? (
            <ul className={"book-card__info-author-list"}>
              {author.map((name, i) => {
                return (
                  <li key={i} className={"book-card__info-author"}>
                    {name}
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className={"book-card__info-author-skeleton-container skeleton-container"}>
              <div className={"book-card__info-author-skeleton skeleton"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
