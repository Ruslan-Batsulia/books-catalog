"use client";

import { useLocale } from "next-intl";
import DropdownSelect from "./../Dropdown";
import { options as languageOptions } from "./data";
import { usePathname, useRouter } from "@/i18n/navigation";

import changeLanguageIcon from "@/public/images/dropdown/language/ChangeLanguage.svg";

export default function ChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const nextLocale = currentLocale === "en" ? "uk" : "en";

  const changeLanguage = () => {
    try {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <DropdownSelect
      options={languageOptions}
      currentValue={currentLocale}
      onChange={changeLanguage}
      icon={changeLanguageIcon}
    />
  );
};
