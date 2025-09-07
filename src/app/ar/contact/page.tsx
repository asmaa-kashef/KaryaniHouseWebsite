// app/ar/contact/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import ContactSection from "../../components/ContactSection";
import ClientsSection from "../../components/ClientsSection";

// Metadata for SEO (Arabic version)
export const metadata = {
    title: "اتصل بنا - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
    description: "تواصل مع كرياني هاوس للحصول على استشارات التصميم الداخلي وبناء الفيلات والصيانة العامة في أبوظبي والإمارات.",
    keywords: "كرياني هاوس, اتصل بنا, شركات المقاولات في أبوظبي, استشارات بناء الفلل, تصميم داخلي أبوظبي",
    alternates: {
        canonical: "https://www.karyani-house.com/ar/contact",
    },
    openGraph: {
        title: "اتصل بنا - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
        description: "تواصل مع كرياني هاوس للحصول على استشارات التصميم الداخلي وبناء الفيلات والصيانة العامة في أبوظبي والإمارات.",
        url: "https://www.karyani-house.com/ar/contact",
        images: ["https://www.karyani-house.com/images/background/construction.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "اتصل بنا - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
        description: "تواصل مع كرياني هاوس للحصول على استشارات التصميم الداخلي وبناء الفيلات والصيانة العامة في أبوظبي والإمارات.",
        images: ["https://www.karyani-house.com/images/background/construction.webp"],
    },
};

export default function ContactPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "كرياني هاوس للمقاولات والصيانة العامة ذ.م.م",
        "url": "https://www.karyani-house.com/",
        "logo": "https://www.karyani-house.com/images/logo.png",
        "description": "كرياني هاوس تقدم خدمات متخصصة في التصميم الداخلي، بناء الفيلات، التجديد والصيانة العامة في أبوظبي وجميع أنحاء الإمارات.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "أبوظبي",
            "addressCountry": "الإمارات العربية المتحدة"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "خدمة العملاء",
            "telephone": "+971506607159",
            "areaServed": "AE",
            "availableLanguage": ["العربية", "الإنجليزية"]
        },
        "sameAs": [
            "https://www.facebook.com/KaryaniHouse/",
            "https://www.instagram.com/karyanihouse.ae/"
        ]
    };

    return (
        <div className="rtl">
            <Header />

            {/* Page Title */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/construction.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>اتصل بنا</h1>
                            <span className="title">تواصل معنا للحصول على استشارة مجانية</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">الرئيسية</Link>
                            </li>
                            <li>اتصل بنا</li>
                        </ul>
                    </div>
                </div>
            </section>

            <ContactSection />
            <ClientsSection />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <Footer />
        </div>
    );
}
