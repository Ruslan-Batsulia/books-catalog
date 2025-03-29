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
