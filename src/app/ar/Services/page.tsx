// src/app/Services/page.tsx

import React, { Suspense } from "react";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import Link from "next/link";
import ServicesClientComponent from "./ServicesClientComponent";

export const dynamic = "force-dynamic";

export default function ServicesPage() {
    return (
        <div className="rtl">
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/cons.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>تفاصيل الخدمة</h1>
                            <span className="title">الأعمال الداخلية تتحدث عن نفسها</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">الرئيسية</Link>
                            </li>
                            <li>تفاصيل الخدمة</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* The Suspense boundary is essential here */}
            <Suspense fallback={<div>جارٍ التحميل...</div>}>
                <ServicesClientComponent />
            </Suspense>

            <Footer />
        </div>
    );
}
