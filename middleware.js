


// middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const token = request.cookies.get('admin_token')?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };


import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // Using 'jose' because 'jsonwebtoken' doesn't work in Middleware (Edge runtime)

export async function middleware(request) {
  const token = request.cookies.get('admin_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // We use jose here because standard 'jsonwebtoken' (jwt.verify) 
    // often fails in the Next.js Edge Runtime
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    
    return NextResponse.next();
  } catch (error) {
    // If token is invalid or expired
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete("admin_token");
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};