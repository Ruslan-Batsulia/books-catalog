"use client";

import Image from "next/image";
import Search from "./Search/Search";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ReadingProgress from "./ReadingProgress/ReadingProgress";

import logo from "@/public/images/logo.svg";
import catalog from "@/public/images/catalog.svg";
import favoriteList from "@/public/images/favoriteList.svg";
import readBooks from "@/public/images/readBooks.svg";

import "./Header.scss";

export default function Header() {
  const translate = useTranslations("Header");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1439.9px)");

    const handleResize = () => {
      if (mediaQuery.matches) { setIsOpen(false); }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => { mediaQuery.removeEventListener("change", handleResize); };
  }, []);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }

    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

        <ReadingProgress />

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
