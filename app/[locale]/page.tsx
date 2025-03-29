"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const translate = useTranslations("Home");

  const nextLocale = currentLocale === "en" ? "uk" : "en";

  const changeLanguage = () => {
    try {
      router.replace(pathname, { locale: nextLocale });
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <main>
      <h1
        style={{fontFamily: "var(--font-geist-sans)"}}
      >
        {translate("title")}
      </h1>
      <button
        onClick={changeLanguage}
        style={{fontFamily: "var(--font-geist-sans)"}}
        aria-label={`Switch to ${nextLocale === "en" ? "English" : "Українська"}`}
      >
        {nextLocale === "uk" ? "English" : "Українська"}
      </button>
    </main>
  );
};
