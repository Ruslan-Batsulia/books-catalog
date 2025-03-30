"use client";

import Image from "next/image";
import { useEffect } from "react";
import Search from "./Search/Search";
import { useTranslations } from "next-intl";
import { getBooks } from "@/src/common/api";
import { BooksResponse } from "@/src/common/types";

import logo from "@/public/images/logo.svg";
import catalog from "@/public/images/catalog.svg";
import favoriteList from "@/public/images/favoriteList.svg";
import readBooks from "@/public/images/readBooks.svg";

import "./Header.scss";

export default function Header() {
  const translate = useTranslations("Header");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response: BooksResponse | null = await getBooks();

        if (response) {
          console.log("Books fetched successfully:", response.results);
        } else {
          console.log("Failed to fetch books.");
        }
      } catch (error) {
        console.log("Error fetching books:", error);
      };
    };

    // fetchBooks();
  }, []);

  return (
    <header className={"header"}>
      <div className={"container"}>
        <div className={"header__logo"}>
          <Image src={logo} alt={"Logo"} className={"header__logo-img"} />
          <span className={"header__logo-title"}>{"Books Catalog"}</span>
        </div>

        <div className={"header__catalog"}>
          <button
            className={"header__catalog-btn"}
          >
            <Image src={catalog} alt={"Catalog"} className={"header__catalog-icon"} />
            {translate("button")}
          </button>
        </div>

        <Search />

        <div className={"header__favorite"}>
          <button className={"header__favorite-btn"}>
            <Image src={favoriteList} alt={"Favorite List"} className={"header__favorite-icon"} />
          </button>
        </div>

        <div className={"header__reading"}>
          <button className={"header__reading-btn"}>
            <Image src={readBooks} alt={"Reading List"} className={"header__reading-icon"} />
          </button>
        </div>
      </div>
    </header>
  );
};
