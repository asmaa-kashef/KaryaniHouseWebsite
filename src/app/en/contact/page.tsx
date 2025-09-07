// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import ContactSection from "../../components/ContactSection";
import ClientsSection from "../../components/ClientsSection";

// Metadata for SEO (English version)
export const metadata = {
    title: "Contact Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
    description: "Get in touch with Karyani House for villa construction, interior design, and general maintenance services in Abu Dhabi and UAE.",
    keywords: "Karyani House, Contact, Villa Construction Abu Dhabi, Interior Design Abu Dhabi, General Maintenance UAE",
    alternates: {
        canonical: "https://karyani-house.com/contact",
    },
    openGraph: {
        title: "Contact Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
        description: "Get in touch with Karyani House for villa construction, interior design, and general maintenance services in Abu Dhabi and UAE.",
        url: "https://karyani-house.com/contact",
        images: ["https://karyani-house.com/images/logo.png"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Karyani House | Interior Design & Villa Construction Abu Dhabi",
        description: "Get in touch with Karyani House for villa construction, interior design, and general maintenance services in Abu Dhabi and UAE.",
        images: ["https://karyani-house.com/images/logo.png"],
    },
};

export default function ContactPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Karyani House Contracting & General Maintenance L.L.C",
        "url": "https://www.karyani-house.com/",
        "logo": "https://www.karyani-house.com/images/logo.png",
        "description": "Karyani House provides specialized services in interior design, villa construction, renovation, and general maintenance in Abu Dhabi and across UAE.",
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
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.facebook.com/KaryaniHouse/",
            "https://www.instagram.com/karyanihouse.ae/"
        ]
    };

    return (
        <div>
            <Header />

            {/* Page Title */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/construction.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Contact Us</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Contact</li>
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
