"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

const slides = [
    {
        bg: "/images/main-slider/VillaConstruction.webp",
        video: "https://www.youtube.com/watch?v=mFhw7yfwzsc",
        alt: "Villa Construction",
    },
    {
        bg: "/images/main-slider/structure.webp",
        video: "https://www.youtube.com/watch?v=00_cHMGz5aE",
        alt: "Structure Repair",
    },
    {
        bg: "/images/main-slider/cladding.webp",
        video: "https://www.youtube.com/watch?v=ngxg4FNq2Sg",
        alt: "Cladding",
    },
];

const BannerSection = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    return (
        <section style={{ width: "100%", height: "100vh", position: "relative" }}>
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                style={{ width: "100%", height: "100%" }}
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={idx} style={{ height: "100%" }}>
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                            {/* Background Image */}
                            <Image
                                src={item.bg}
                                alt={item.alt}
                                fill
                                priority={idx === 0}
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                            />

                            {/* Overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "rgba(0,0,0,0.3)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    color: "#fff",
                                    padding: "20px",
                                }}
                            >
                                <Link
                                    href="#offer-form"
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: "#ff914d",
                                        color: "#fff",
                                        padding: "12px 30px",
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        borderRadius: "8px",
                                        textDecoration: "none",
                                    }}
                                >
                                    {content.buttonText}
                                </Link>

                                <h2
                                    style={{
                                        marginTop: "20px",
                                        whiteSpace: "pre-line",
                                        lineHeight: "1.3em",
                                        fontSize: "32px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {content.slideTitles}
                                </h2>

                                <div style={{ marginTop: "20px" }}>
                                    <a
                                        href={item.video}
                                        data-fancybox="gallery"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "50%",
                                            background: "#fff",
                                            color: "#ff914d",
                                            fontSize: "24px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Bottom Wave */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-1px",
                                    left: 0,
                                    width: "100%",
                                    overflow: "hidden",
                                    lineHeight: 0,
                                }}
                            >
                                <svg
                                    viewBox="0 0 500 150"
                                    preserveAspectRatio="none"
                                    style={{ height: "100px", width: "100%" }}
                                >
                                    <path
                                        d="M0.00,49.98 C150.00,150.00 349.28,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                                        style={{ stroke: "none", fill: "#fff" }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerSection;
