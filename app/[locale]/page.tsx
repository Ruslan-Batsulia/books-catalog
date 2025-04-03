"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { Footer, Header } from "@/src/components";
// import { useTranslations } from "next-intl";
import { useHasMounted } from "@/src/common/hook/useHasMounted";

export default function Home() {
  // const translate = useTranslations("Home");
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Provider store={store}>
        <Header />
        <main>
          
        </main>
        <Footer />
      </Provider>
    </>
  );
};
