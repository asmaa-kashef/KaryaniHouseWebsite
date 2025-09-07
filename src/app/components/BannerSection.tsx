"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Translation data
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
            <Swiper
                modules={[Autoplay, Navigation, EffectFade]}
                navigation
                loop
                autoplay={{ delay: 5000 }}
                effect="fade"
                className="banner-carousel"
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="slide-item"
                            style={{
                                backgroundImage: `url(${item.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="auto-container">
                                <div
                                    className="content-box text-center"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Link
                                        href="#offer-form"
                                        className="theme-btn btn-style-one"
                                        style={{ fontSize: "20px", padding: "12px 30px" }}
                                    >
                                        {content.buttonText}
                                    </Link>
                                    <h2
                                        style={{
                                            marginTop: "20px",
                                            whiteSpace: "pre-line",
                                            lineHeight: "1.3em",
                                        }}
                                    >
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerSection;
