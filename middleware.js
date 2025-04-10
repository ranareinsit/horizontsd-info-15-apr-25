import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

import { i18n } from "./i18n-config.mjs";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  let locale = null;
  let user_locale = request.cookies.has('language')
  let response = NextResponse.next()
  if (user_locale) {
    locale = request.cookies.get('language').value
  } else {
    locale = getLocale(request);

  }
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );
  if (pathnameIsMissingLocale) {
    response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
  response.cookies.set({
    name: 'language',
    value: locale,
  })
  return response
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/public|static|image|public|favicon.ico).*)"
  ],
}
