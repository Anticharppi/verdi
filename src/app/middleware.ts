import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token !== null,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
