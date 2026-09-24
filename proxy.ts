import { cookies } from "next/headers";
import {NextRequest} from "next/server";

const protectedRoutes = ["/membership", "/classses", "/schedule"];
const publicRoutes = ["/", "/events", "/consultation"];

export default async function proxy(req: NextRequest) {
  const {pathname} = req.nextUrl;
  const isProtected: boolean = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isPublic: boolean = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const accessToken = ((await cookies()).get("accessToken")?.value)

}

// https://youtu.be/nI8PYZNFtac?si=LCP3XPWZdqh01R6L
