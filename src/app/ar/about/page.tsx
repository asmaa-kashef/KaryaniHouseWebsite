import React from "react";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import VisionMissionCards from "../../components/VisionMissionCards";
import ProcessSection from "../../components/ProcessSection";
import FAQ from "../../components/FAQ";
import Engineer from "../../components/Engineer";
import AboutImageSection from "../../components/AboutImageSection";

// Metadata for SEO (Arabic Version)
export const metadata = {
    title: "من نحن - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
    description: "كرياني هاوس تقدم خدمات متخصصة في التصميم الداخلي، بناء الفيلات، التجديد والصيانة العامة في أبوظبي وجميع أنحاء الإمارات.",
    keywords: "كرياني هاوس, شركات المقاولات في أبوظبي, شركات بناء الفلل في الإمارات, شركة صيانة المباني أبوظبي, شركات مقاولات أبوظبي",
    alternates: {
        canonical: "https://www.karyani-house.com/ar/about",
    },
    openGraph: {
        title: "من نحن - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
        description: "كرياني هاوس تقدم خدمات متخصصة في التصميم الداخلي، بناء الفيلات، التجديد والصيانة العامة في أبوظبي وجميع أنحاء الإمارات.",
        url: "https://www.karyani-house.com/ar/about",
        images: ["https://www.karyani-house.com/images/background/10.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "من نحن - كرياني هاوس | تصميم داخلي وبناء الفيلات في أبوظبي",
        description: "كرياني هاوس تقدم خدمات متخصصة في التصميم الداخلي، بناء الفيلات، التجديد والصيانة العامة في أبوظبي وجميع أنحاء الإمارات.",
        images: ["https://www.karyani-house.com/images/background/10.webp"],
    },
};

export default function AboutPage() {
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
            <main>
                {/* عنوان الصفحة */}
                <section className="page-title" style={{ backgroundImage: "url(/images/background/10.webp)" }}>
                    {/* محتوى عنوان الصفحة */}
                </section>
                <VisionMissionCards />
                {/* قسم من نحن */}
                <AboutImageSection />
               
                <ProcessSection />
                <FAQ />
                <Engineer />

                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </main>
            <Footer />
        </div>
    );
}
