import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { GeistSans, GeistMono, WinkySans } from "@/src/common/fonts";

import "@/sass/globals.scss";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export const metadata: Metadata = {
  title: "Books Catalog",
  description: "A simple books catalog application.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
};

export default async function LocaleLayout({children, params}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${WinkySans.variable}`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
