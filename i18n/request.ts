import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    messages: (await import(`./../public/messages/${locale}.json`)).default
  };
});
