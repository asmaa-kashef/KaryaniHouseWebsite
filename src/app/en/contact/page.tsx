// src/app/en/contact/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import ContactSection from "../../components/ContactSection";
import ClientsSection from "../../components/ClientsSection";

// ✅ SEO Metadata
export const metadata = {
    title: "Karyani House home renovation abu dhabi in Abu Dhabi",
    description:
        "Get in touch with Karyani House for villa construction, interior design, home renovation, and general maintenance services in Abu Dhabi and across the UAE.",
    keywords:
        "Karyani House, contact us, villa construction Abu Dhabi, home renovation Abu Dhabi, interior design Abu Dhabi, construction companies Abu Dhabi",
    alternates: { canonical: "https://www.karyani-house.com/en/contact" },
    openGraph: {
        title:
            "Contact Us - Karyani House | home renovation abu dhabi in Abu Dhabi",
        description:
            "Get in touch with Karyani House for villa construction, interior design, home renovation, and general maintenance services in Abu Dhabi and across the UAE.",
        url: "https://www.karyani-house.com/en/contact",
        images: [
            {
                url: "https://www.karyani-house.com/images/background/construction.webp",
                alt: "Modern villa construction site in Abu Dhabi",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Contact Us - Karyani House | Interior Design & Villa Construction in Abu Dhabi",
        description:
            "Get in touch with Karyani House for villa construction, interior design, home renovation, and general maintenance services in Abu Dhabi and across the UAE.",
        images: [
            {
                url: "https://www.karyani-house.com/images/background/construction.webp",
                alt: "Modern villa construction site in Abu Dhabi",
            },
        ],
    },
};

export default function ContactPage() {
    // ✅ Schema: Organization + LocalBusiness
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "Karyani House Contracting & General Maintenance L.L.C",
                url: "https://www.karyani-house.com/",
                logo: "https://www.karyani-house.com/images/logo.png",
                description:
                    "Karyani House provides villa construction, home renovation, interior design, cladding, structure repair, and aluminum & glass services in Abu Dhabi and UAE.",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Abu Dhabi",
                    addressCountry: "UAE",
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Customer Service",
                    telephone: "+971506607159",
                    email: "info@karyani-house.com",
                    areaServed: "AE",
                    availableLanguage: ["English", "Arabic"],
                },
                sameAs: [
                    "https://www.facebook.com/KaryaniHouse/",
                    "https://www.instagram.com/karyanihouse.ae/",
                ],
            },
            {
                "@type": "LocalBusiness",
                name: "Karyani House Contracting & General Maintenance L.L.C",
                image: "https://www.karyani-house.com/images/logo.png",
                url: "https://www.karyani-house.com/en/contact",
                telephone: "+971506607159",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Abu Dhabi",
                    addressLocality: "Abu Dhabi",
                    addressCountry: "UAE",
                },
                priceRange: "$$",
                areaServed: {
                    "@type": "Place",
                    name: "Abu Dhabi, UAE",
                },
            },
        ],
    };

    return (
        <div>
            <Header />

            {/* ✅ Page Title with alt text for background */}
            <section
                className="page-title"
                style={{
                    backgroundImage: "url(/images/background/construction.webp)",
                }}
                role="img"
                aria-label="Construction background showing villa building site"
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Contact Us</h1>
                            <span className="title">
                                Get in touch with us for a free consultation
                            </span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/en">Home</Link>
                            </li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </section>

            <ContactSection />
            <ClientsSection />

            {/* ✅ JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <Footer />
        </div>
    );
}
