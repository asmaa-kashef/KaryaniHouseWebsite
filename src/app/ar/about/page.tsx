"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import VisionMissionCards from "../../components/VisionMissionCards";
import ProcessSection from "../../components/ProcessSection";
import FAQ from "../../components/FAQ";
import Engineer from "../../components/Engineer";
import AboutImageSection from "../../components/AboutImageSection";

export default function AboutPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "كرياني هاوس للمقاولات والصيانة العامة ذ.م.م",
        "url": "https://www.karyani-house.com/",
        "logo": "https://www.karyani-house.com/images/logo.png",
        "description": "كرياني هاوس هي واحدة من أفضل شركات المقاولات في أبوظبي، تقدم خدمات بناء الفلل، التصميم الداخلي، التجديد والصيانة العامة في الإمارات.",
        "foundingDate": "2015-01-01",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "أبوظبي",
            "addressCountry": "الإمارات العربية المتحدة"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "خدمة العملاء",
                "telephone": "+971506607159",
                "email": "info@karyani-house.com",
                "areaServed": "AE",
                "availableLanguage": ["العربية", "الإنجليزية"]
            }
        ],
        "sameAs": [
            "https://www.facebook.com/KaryaniHouse/",
            "https://www.instagram.com/karyanihouse.ae/"
        ]
    };

    return (
        <div className="rtl" dir="rtl">
            {/* SEO Head */}
            <Head>
                <title>من نحن - كرياني هاوس | شركات المقاولات في أبوظبي</title>
                <meta name="description" content="كرياني هاوس هي واحدة من أفضل شركات المقاولات في أبوظبي، تقدم خدمات بناء الفلل، التصميم الداخلي، التجديد والصيانة العامة في الإمارات." />
                <meta name="keywords" content="كرياني هاوس, شركات المقاولات في أبوظبي, شركات بناء الفلل في الإمارات, شركة صيانة المباني أبوظبي, شركات مقاولات أبوظبي" />
                <link rel="canonical" href="https://www.karyani-house.com/ar/about" />

                {/* Open Graph */}
                <meta property="og:title" content="من نحن - كرياني هاوس | شركات المقاولات في أبوظبي" />
                <meta property="og:description" content="كرياني هاوس هي واحدة من أفضل شركات المقاولات في أبوظبي، تقدم خدمات بناء الفلل، التصميم الداخلي، التجديد والصيانة العامة في الإمارات." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.karyani-house.com/ar/about" />
                <meta property="og:image" content="https://www.karyani-house.com/images/background/10.webp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="من نحن - كرياني هاوس | شركات المقاولات في أبوظبي" />
                <meta name="twitter:description" content="كرياني هاوس هي واحدة من أفضل شركات المقاولات في أبوظبي، تقدم خدمات بناء الفلل، التصميم الداخلي، التجديد والصيانة العامة في الإمارات." />
                <meta name="twitter:image" content="https://www.karyani-house.com/images/background/10.webp" />
            </Head>

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
                                <h1>شركات المقاولات في أبوظبي</h1>
                                <span className="title">التصميم الداخلي والخدمات الهندسية تتحدث عن نفسها</span>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li>من نحـن</li>
                                <li>
                                    <Link href="/">الرئيسية</Link>
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
        </div>
    );
}
