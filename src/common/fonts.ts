import localFont from "next/font/local";

export const GeistSans = localFont({
  src: [{
    path: "./../../public/fonts/GeistSansVF.woff",
    weight: "100 900",
  }],
  variable: "--font-geist-sans",
  display: "swap",
});

export const GeistMono = localFont({
  src: [{
    path: "./../../public/fonts/GeistMonoVF.woff",
    weight: "100 900",
  }],
  variable: "--font-geist-mono",
  display: "swap",
});

export const WinkySans = localFont({
  src: [{
    path: "./../../public/fonts/WinkySans.woff2",
    weight: "100 900",
  }],
  variable: "--font-winky-sans",
  display: "swap",
});
