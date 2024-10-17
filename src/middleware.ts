import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (request: NextRequest) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("auth-token")?.value;

  if (!token) return NextResponse.redirect(request.nextUrl.origin);

  const URL = `${process.env.API}/api/auth/user`;

  const response = await fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) return NextResponse.redirect(request.nextUrl.origin);

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/booking/:path*",
    "/customers/:path*",
    "/dashboard/:path*",
    "/payments/:path*",
    "/services/:path*",
    "/staffs/:path*",
  ],
};
