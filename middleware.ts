import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const validLocales = ["pl-PL", "en-US"];
const defaultLocale = "pl-PL";

export function middleware(request: NextRequest) {
  const lang = request.nextUrl.pathname.split("/")[1];
  if (!validLocales.includes(lang)) {
    const newUrl = new URL(request.url);
    newUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(newUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
