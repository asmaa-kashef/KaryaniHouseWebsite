import React from "react";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import VisionMissionCards from "../../components/VisionMissionCards";
import ProcessSection from "../../components/ProcessSection";
import FAQ from "../../components/FAQ";
import Engineer from "../../components/Engineer";
import AboutImageSection from "../../components/AboutImageSection";

// Metadata for SEO
export const metadata = {
    title: "About Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
    description: "Karyani House provides expert interior design, villa construction, renovation, and general maintenance services across Abu Dhabi and the UAE.",
    keywords: "Karyani House, construction companies in Abu Dhabi, villa construction companies in UAE, building maintenance company in Abu Dhabi, contracting companies in Abu Dhabi",
    alternates: {
        canonical: "https://www.karyani-house.com/en/about",
    },
    openGraph: {
        title: "About Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
        description: "Karyani House provides expert interior design, villa construction, renovation, and general maintenance services across Abu Dhabi and the UAE.",
        url: "https://www.karyani-house.com/en/about",
        images: ["https://www.karyani-house.com/images/background/10.webp"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
        description: "Karyani House provides expert interior design, villa construction, renovation, and general maintenance services across Abu Dhabi and the UAE.",
        images: ["https://www.karyani-house.com/images/background/10.webp"],
    },
};

export default function AboutPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Karyani House Contracting & General Maintenance L.L.C",
        "url": "https://www.karyani-house.com/",
        "logo": "https://www.karyani-house.com/images/logo.png",
        "description": "Karyani House provides expert interior design, villa construction, renovation, and general maintenance services across Abu Dhabi and the UAE.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abu Dhabi",
            "addressCountry": "UAE"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+971506607159",
            "areaServed": "AE",
            "availableLanguage": "Arabic"
        },
        "sameAs": [
            "https://www.facebook.com/KaryaniHouse/",
            "https://www.instagram.com/karyanihouse.ae/"
        ]
    };

    return (
        <>
            <Header />
            <main>
                {/* Page Title */}
                <section className="page-title" style={{ backgroundImage: "url(/images/background/10.webp)" }}>
                    {/* Your page title content */}
                </section>
                <VisionMissionCards />
                {/* About Section */}
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
        </>
    );
}
