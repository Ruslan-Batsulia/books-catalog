"use client";

import Image from "next/image";

import logo from "@/public/images/logo.svg";

import "./Header.scss";

export default function Header() {
  return (
    <header className={"header"}>
      <div className={"container"}>
        <div className={"header__logo"}>
          <Image src={logo} alt={"Logo"} className={"header__logo-img"} />
          <span className={"header__logo-title"}>{"Books Catalog"}</span>
        </div>
      </div>
    </header>
  );
};
