"use client";

import { Header } from "@/src/components";
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
    <>
      <Header />
      <main>
        <div className={"container"}>
          <h1>{translate("title")}</h1>
          <button
            onClick={changeLanguage}
            aria-label={`Switch to ${nextLocale === "en" ? "English" : "Українська"}`}
          >
            {nextLocale === "uk" ? "English" : "Українська"}
          </button>
        </div>
      </main>
    </>
  );
};
