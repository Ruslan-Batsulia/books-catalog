"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { useParams } from "next/navigation";
import { Footer, Header, BookPage } from "@/src/components";
import { useHasMounted } from "@/src/common/hook/useHasMounted";

export default function Book() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const hasMounted = useHasMounted();

  if (!hasMounted || !id) return null;
  
  return (
    <Provider store={store}>
      <Header />
      <BookPage bookId={Number(id)} />
      <Footer />
    </Provider>
  );
};
