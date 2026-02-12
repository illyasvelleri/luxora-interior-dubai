// app/api/auth/logout/route.js
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // ✅ Force delete by setting path to root and expiring it immediately
  response.cookies.set("admin_token", "", {
    path: "/",
    expires: new Date(0), 
  });

  return response;
}