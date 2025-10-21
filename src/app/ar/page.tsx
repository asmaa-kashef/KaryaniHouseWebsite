// src/app/ar/page.tsx
import React from "react";
import Header from "../components/HomeHeader";
import Footer from "../components/HomeFooter";
import ProjectsCategories from '../components/ProjectsCategories';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectsSection from "../components/ProjectsSection";
import OfferForm from "../components/OfferForm";
import SpecilizationSection from "../components/SpecilizationSection";
import ClientsSection from "../components/ClientsSection";
import NewsSection from "../components/NewsSection";
import ProjectsInsightChart from "../components/ProjectsInsightChart";
import { Metadata } from "next";
import BannerSection from "../components/BannerSection";
import TextContent from "../components/TextContent";
import TextContentcontact from "../components/TextContentcontact";
import TextContentvilla from "../components/TextContentvilla";

export const metadata: Metadata = {
    title: "شركات مقاولات في ابوظبي | كرياني هاوس – بناء فلل وصيانة",
    description: "!كرياني هاوس – شركات مقاولات في ابوظبي. نقدم خدمات بناء الفلل، صيانة المباني، إصلاح التشققات، وتجديد الواجهات. تواصل معنا الآن لاختيار شركتك الأمثل",
    openGraph: {
        title: "افضل شركة مقاولات في ابوظبي | كرياني هاوس – بناء فلل وصيانة",
        description: "!كرياني هاوس – شركات مقاولات في ابوظبي. نقدم خدمات بناء الفلل، صيانة المباني، إصلاح التشققات، وتجديد الواجهات. تواصل معنا الآن لاختيار شركتك الأمثل",
        url: "https://www.karyanihouse.com",
        images: [
            {
                url: "https://www.karyanihouse.com/images/main-slider/construction.webp",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "شركات مقاولات في ابوظبي | كرياني هاوس – بناء فلل وصيانة",
        description: "!كرياني هاوس – شركات مقاولات في ابوظبي. نقدم خدمات بناء الفلل، صيانة المباني، إصلاح التشققات، وتجديد الواجهات. تواصل معنا الآن لاختيار شركتك الأمثل",
        images: ["https://www.karyanihouse.com/images/main-slider/construction.webp"],
    },
    alternates: {
        canonical: "https://www.karyanihouse.com/ar"
    }
};

export default function HomePage() {
    return (
        <div className="rtl">
            <Header />
            <main>
                {/* LocalBusiness Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Karyani House",
                            "image": "https://www.karyanihouse.com/images/main-slider/construction.webp",
                            "@id": "https://www.karyanihouse.com",
                            "url": "https://www.karyanihouse.com",
                            "telephone": "+9710506607159",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Abu Dhabi",
                                "addressLocality": "Abu Dhabi",
                                "addressCountry": "AE"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "24.4539",
                                "longitude": "54.3773"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "08:00",
                                "closes": "18:00"
                            },
                            "sameAs": [
                                "https://www.facebook.com/karyanihouse",
                                "https://www.instagram.com/karyanihouse",
                                "https://www.linkedin.com/company/karyanihouse"
                            ],
                            "priceRange": "$$$",
                            "description": "Karyani House, a top construction company in Abu Dhabi, offers villa construction, maintenance, crack repair, structural strengthening, and facade renovation"
                        })
                    }}
                />

                {/* Services Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "بناء الفلل",
                                "description": "خدمات بناء الفلل الاحترافية في أبوظبي والإمارات.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "كرياني هاوس",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "أبوظبي، الإمارات"
                                },
                                "url": "https://www.karyanihouse.com/#villa-construction"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "تقوية الهياكل",
                                "description": "خدمات تعزيز وتقوية المباني بشكل احترافي.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "كرياني هاوس",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "أبوظبي، الإمارات"
                                },
                                "url": "https://www.karyanihouse.com/#structural-strengthening"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "تجديد الواجهات",
                                "description": "خدمات عالية الجودة لتجديد وتحسين واجهات المباني.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "كرياني هاوس",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "أبوظبي، الإمارات"
                                },
                                "url": "https://www.karyanihouse.com/#facade-renovation"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "إصلاح التشققات",
                                "description": "حلول آمنة وموثوقة لإصلاح التشققات في المباني السكنية والتجارية.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "كرياني هاوس",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "أبوظبي، الإمارات"
                                },
                                "url": "https://www.karyanihouse.com/#crack-repair"
                            }
                        ])
                    }}
                />

                {/* قسم البانر */}
                <BannerSection />

                {/* قسم التخصص */}
                <SpecilizationSection />

                {/* المشاريع والإحصاءات */}
                <ProjectsInsightChart />
                <ProjectsCategories />
                <TextContentvilla />

                <section id="offer-form" className="offer-form-section">
                    <OfferForm />
                </section>

                <TextContentcontact />
                <ClientsSection />
                <ProjectsSection />
                <TextContent />
                <NewsSection />
            </main>
            <Footer />
        </div>
    );
}
