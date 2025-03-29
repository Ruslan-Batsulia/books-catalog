import type { Metadata } from "next";
import { GeistSans, GeistMono } from "@/src/common/fonts";

import "@/sass/globals.scss";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Books Catalog",
  description: "A simple books catalog application.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
};
