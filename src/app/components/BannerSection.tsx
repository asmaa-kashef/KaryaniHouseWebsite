// src/components/BannerSection.js

"use client";

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Translation data for different languages
const translations = {
    en: {
        buttonText: "Get a Free Quote",
        slideTitles: "Villa Construction\nStructure Repair\nCladding",
    },
    ar: {
        buttonText: "احصل على عرض سعر مجاني",
        slideTitles: "بناء الفلل\nترميم الهياكل\nالتكسية",
    },
};

const BannerSection = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    useEffect(() => {
        if (typeof window !== "undefined" && typeof window.$ !== "undefined") {
            import("owl.carousel").then(() => {
                window.$('.banner-carousel').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    items: 1,
                    dots: false,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    animateOut: 'fadeOut',
                    animateIn: 'fadeIn',
                    navText: [
                        '<span class="fa fa-angle-left"></span>',
                        '<span class="fa fa-angle-right"></span>'
                    ],
                });
            });
        }
    }, []);

    const slides = [
        {
            bg: "/images/main-slider/VillaConstruction.webp",
            video: "https://www.youtube.com/watch?v=mFhw7yfwzsc",
        },
        {
            bg: "/images/main-slider/structure.webp",
            video: "https://www.youtube.com/watch?v=00_cHMGz5aE",
        },
        {
            bg: "/images/main-slider/cladding.webp",
            video: "https://www.youtube.com/watch?v=ngxg4FNq2Sg",
        },
    ];

    return (
        <section className="banner-section-two">
            <div className="banner-carousel owl-carousel owl-theme">
                {slides.map((item, idx) => (
                    <div
                        key={idx}
                        className="slide-item"
                        style={{ backgroundImage: `url(${item.bg})` }}
                    >
                        <div className="auto-container">
                            <div className="content-box text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Link
                                    href="#offer-form"
                                    className="theme-btn btn-style-one"
                                    style={{ fontSize: "20px", padding: "12px 30px" }}
                                >
                                    {content.buttonText}
                                </Link>
                                {/* Updated h2 with CSS pre-line for proper line breaks */}
                                <h2 style={{ marginTop: "20px", whiteSpace: "pre-line", lineHeight: "1.3em" }}>
                                    {content.slideTitles}
                                </h2>
                                <div className="video-link">
                                    <a href={item.video} data-fancybox="gallery">
                                        <i className="icon fa fa-play" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BannerSection;
