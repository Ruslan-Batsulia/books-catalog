"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux/store";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import TemporaryBtns from "@/src/components/TemporaryBtns/TemporaryBtns";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const translate = useTranslations("Home");

  const nextLocale = currentLocale === "en" ? "uk" : "en";

  const changeLanguage = () => {
    try {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <>
      <Provider store={store}>
        <main>
          <div className={"container"}>
            <h1>{translate("title")}</h1>
            <button
              onClick={changeLanguage}
              aria-label={`Switch to ${nextLocale === "en" ? "English" : "Українська"}`}
            >
              {nextLocale === "uk" ? "English" : "Українська"}
            </button>

            <TemporaryBtns />
          </div>
        </main>
      </Provider>
    </>
  );
};
