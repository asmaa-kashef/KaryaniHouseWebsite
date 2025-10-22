// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('✅ Middleware running for:', request.nextUrl.pathname);

    const { pathname } = request.nextUrl;

    // الشرط: إذا كان المسار هو الجذر (/) بالضبط
    if (pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = '/en';
        // تنفيذ إعادة التوجيه إلى /en
        return NextResponse.redirect(url);
    }

    // السماح لبقية المسارات بالمرور (مثل /en و /about)
    return NextResponse.next();
}

export const config = {
    // تطبيق الـ Middleware على جميع المسارات (باستثناء مسارات Next.js الداخلية والملفات)
    matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};