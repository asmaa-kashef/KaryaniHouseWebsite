// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const pathname = url.pathname;
    const fullPath = pathname + url.search;

    // -----------------------------
    // 1) تحويل / → /en
    // -----------------------------
    if (pathname === '/') {
        const newUrl = url.clone();
        newUrl.pathname = '/en';
        console.log(`[Redirect] ${fullPath} → /en (302)`);
        return NextResponse.redirect(newUrl);
    }

    // -----------------------------
    // 2) أي URL يحتوي "karyaniconstruction.karyani-house.com" يرجع 410
    // -----------------------------
    const fullUrl = request.nextUrl.href;

    if (fullUrl.includes('karyaniconstruction.karyani-house.com')) {
        console.log(`[410] Blocked: ${fullUrl}`);
        return new NextResponse('<h1>410 Gone</h1><p>This page no longer exists.</p>', {
            status: 410,
            headers: { 'Content-Type': 'text/html' },
        });
    }

    if (pathname.startsWith('/comment.php')) {
        console.log(`[410] Blocked: ${fullPath}`);
        return new NextResponse('<h1>410 Gone</h1><p>This page no longer exists.</p>', {
            status: 410,
            headers: { 'Content-Type': 'text/html' },
        });
    }

    // -----------------------------
    // 3) روابط 410 المسبقة
    // -----------------------------
    const paths410 = [
        "/Cladding/cladding-services/2",
        "/ConstructionService/MaterialSupply",
        "/Structure-Repair/structural-repair-abu-dhabi/2",
        "/about-us",
        "/Cladding/cladding-services-building-renovation/1",
        "/VillaConstruction/budgeting-for-your-villa-cost-saving-tips-from-our-experts",
        "/VillaConstruction/modern-villa-construction-in-abu-dhabi-2",
        "/villa-construction/madinat-al-riyad/13",
        "/VillaConstruction/general-construction-contractor",
        "/villa-construction/residential-building-permit-abudhabi/4",
        "/en/projects/structural-repair-abu-dhabi",
        "/en/projects/villa-construction-al-shamkhah-abu-dhabi",
        "/ConstructionService/BuildingStaff",
        "/en/projects/structural-repair-services",
        "/VillaConstruction",
        "/Home/",
        "/home/Index",
        "/Interior-Design/service-block-majlis/8",
        "/villa-construction/al-shamkha/12",
        "/projects",
        "/Home/index",
        "/index.html",
        "/ar/services",
        "/Home/NotFoundPage",
        "/Interior-Design/Madinat_Al_Riyad/7",
        "/VillaConstruction/-contracting-companies-in-abu-dhabi-top-firms-and-industry-insights",
        "/ar/news",
        "/Contact-us",
        "/building-maintenance-companies-in-abu-dhabi",
        "/VillaConstruction?page=1",
        "/Home",
        "/ConstructionService/LandMining",
        "/villa-construction/residential-villa-abu-dhabi/6",
        "/VillaConstruction/custom-villa-design-in-abu-dhabi",
        "/VillaConstruction?page=0",
        "/projects?filter=all&page=1",
        "/projects?filter=Cladding&page=1",
        "/projects?filter=Villa&page=1",
    ];

    if (paths410.includes(fullPath)) {
        console.log(`[410] ${fullPath} → 410 Gone`);
        return new NextResponse('<h1>410 Gone</h1><p>This page no longer exists.</p>', {
            status: 410,
            headers: { 'Content-Type': 'text/html' },
        });
    }

    // -----------------------------
    // 4) باقي الموقع
    // -----------------------------
    console.log(`[200] ${fullPath} → OK`);
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
