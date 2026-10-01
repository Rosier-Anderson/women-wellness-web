import {NextRequest, NextResponse} from "next/server";

const protectedRoutes = ["/membership", "/classes", ];
const authRoutes = ["/login", "/register"];

export function proxy(req: NextRequest) {
  const hasSession = req.cookies.has("refreshToken");
  const {pathname} = req.nextUrl;

  const isProtected: boolean = protectedRoutes.some((r) =>
    pathname.startsWith(r),
  );
  const isAuth = authRoutes.some((r) => pathname.startsWith(r));

  if (!hasSession && isProtected) {
    const url = new URL("/login", req.url);
    url.searchParams.set("from", pathname);
    return NextResponse.redirect(url);
  }

  if (hasSession && isAuth) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

// https://youtu.be/nI8PYZNFtac?si=LCP3XPWZdqh01R6L
// https://www.youtube.com/watch?v=3GJYIzoKwEw
