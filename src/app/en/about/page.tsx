import React from "react";
import Link from "next/link";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import VisionMissionCards from "../../components/VisionMissionCards";
import ProcessSection from "../../components/ProcessSection";
import FAQ from "../../components/FAQ";
import Engineer from "../../components/Engineer";
import AboutImageSection from "../../components/AboutImageSection";

// Metadata for SEO
export const metadata = {
    title: "About Us - Karyani House | Contracting Companies in Abu Dhabi",
    description: "Karyani House is a leading contracting company in Abu Dhabi, providing expert villa construction, interior design, renovation, and maintenance services across the UAE.",
    keywords: "Karyani House, contracting companies in Abu Dhabi, villa construction Abu Dhabi, interior design UAE, renovation services Abu Dhabi",
    alternates: {
        canonical: "https://www.karyani-house.com/en/about",
    },
    openGraph: {
        title: "About Us - Karyani House | Contracting Companies in Abu Dhabi",
        description: "Karyani House is a leading contracting company in Abu Dhabi, providing expert villa construction, interior design, renovation, and maintenance services across the UAE.",
        url: "https://www.karyani-house.com/en/about",
        images: [
            {
                url: "https://www.karyani-house.com/images/background/10.webp",
                width: 1200,
                height: 630,
                alt: "Karyani House - Contracting Company Abu Dhabi"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Karyani House | Contracting Companies in Abu Dhabi",
        description: "Karyani House is a leading contracting company in Abu Dhabi, providing expert villa construction, interior design, renovation, and maintenance services across the UAE.",
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
        "description": "Karyani House is a leading contracting company in Abu Dhabi, providing expert villa construction, interior design, renovation, and maintenance services across the UAE.",
        "foundingDate": "2015-01-01",
        "founders": [
            {
                "@type": "Person",
                "name": "Saber Ali"
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Street Address Here",
            "addressLocality": "Abu Dhabi",
            "addressRegion": "Abu Dhabi",
            "postalCode": "00000",
            "addressCountry": "AE"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+971506607159",
                "email": "info@karyani-house.com",
                "areaServed": "AE",
                "availableLanguage": ["Arabic", "English"]
            }
        ],
        "sameAs": [
            "https://www.facebook.com/KaryaniHouse/",
            "https://www.instagram.com/karyanihouse.ae/"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "85"
        }
    };

    return (
        <>
            <Header />
            <main>
                {/* Page Title Section */}
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(/images/background/10.webp)" }}
                >
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>contracting companies in abu dhabi</h1>
                                <span className="title">Interior design and engineering services speak for themselves</span>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li>about us</li>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <VisionMissionCards />

                {/* About Section */}
                <AboutImageSection />

                {/* Process Section */}
                <ProcessSection />

                {/* FAQ Section */}
                <FAQ />

                {/* Engineer Section */}
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
