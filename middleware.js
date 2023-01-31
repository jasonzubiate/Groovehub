import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	// Token will exists if the user is logged in
	const token = await getToken({ req, secret: process.env.JWT_SECRET });
	const { pathname } = req.nextUrl;

	// Allow the requrests  if the following is true
	// 1. It is a request for next-auth session and provider fetching
	// 2. The token exists
	if (pathname.includes("/api/auth") || token) {
		return NextResponse.next();
	}   

	// Redirect the user to the login if they do not have a token and are requesting a protected route
	if (!token && pathname !== "/login") {
		return NextResponse.rewrite(new URL("/login", req.url));
	}
}

export const config = { matcher: ['/'] };

