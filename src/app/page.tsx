import React from "react";
import Header from "./components/HomeHeader";
import Footer from "./components/HomeFooter";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsCategories from "./components/ProjectsCategories";
import OfferForm from "./components/OfferForm";
import ClientsSection from "./components/ClientsSection";
import NewsSection from "./components/NewsSection";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectsInsightChart from "./components/ProjectsInsightChart";
import { Metadata } from "next";
import SpecilizationSection from "./components/SpecilizationSection";
import BannerSection from "./components/BannerSection";



export const metadata: Metadata = {
    title: "Karyani House | Top Villa Construction Companies in Abu Dhabi",
    description: "Karyani House, a top construction company in Abu Dhabi, offers villa construction, maintenance, crack repair, structural strengthening, and facade renovation",
    openGraph: {
        title: "Karyani House | Top Villa Construction Companies in Abu Dhabi",
        description: "Karyani House, a top construction company in Abu Dhabi, offers villa construction, maintenance, crack repair, structural strengthening, and facade renovation",
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
        title: "Karyani House | Top Villa Construction Companies in Abu Dhabi",
        description: "Karyani House, a top construction company in Abu Dhabi, offers villa construction, maintenance, crack repair, structural strengthening, and facade renovation",
        images: ["https://www.karyanihouse.com/images/main-slider/construction.webp"],
    },
};

export default function HomePage() {
    return (
        <>
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
                                "name": "Villa Construction",
                                "description": "Expert villa construction services across Abu Dhabi and the UAE.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Karyani House",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "Abu Dhabi, UAE"
                                },
                                "url": "https://www.karyanihouse.com/#villa-construction"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Structural Strengthening",
                                "description": "Professional structural strengthening and building reinforcement services.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Karyani House",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "Abu Dhabi, UAE"
                                },
                                "url": "https://www.karyanihouse.com/#structural-strengthening"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Facade Renovation",
                                "description": "High-quality facade renovation and building exterior improvement.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Karyani House",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "Abu Dhabi, UAE"
                                },
                                "url": "https://www.karyanihouse.com/#facade-renovation"
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Service",
                                "name": "Crack Repair",
                                "description": "Safe and reliable crack repair solutions for residential and commercial buildings.",
                                "provider": {
                                    "@type": "Organization",
                                    "name": "Karyani House",
                                    "url": "https://www.karyanihouse.com"
                                },
                                "areaServed": {
                                    "@type": "Place",
                                    "name": "Abu Dhabi, UAE"
                                },
                                "url": "https://www.karyanihouse.com/#crack-repair"
                            }
                        ])
                    }}
                />
               
                
                <BannerSection />
                <SpecilizationSection />
               
                <ProjectsInsightChart />
                <ProjectsCategories />
             
                <section id="offer-form" className="offer-form-section">

                    <OfferForm />

                </section>
                <ClientsSection />
                <ProjectsSection />

          

                <NewsSection />
            </main>
            <Footer />
        </>
    );
}