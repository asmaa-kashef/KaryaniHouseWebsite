"use client";
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
        h1Keyword: "Construction Companies in Abu Dhabi",
        services: ["Villa Construction", "Structure Repair", "Cladding"],
    },
    ar: {
        buttonText: "احصل على عرض سعر مجاني",
        h1Keyword: "شركات مقاولات في ابوظبي",
        services: ["بناء الفلل", "ترميم الهياكل", "التكسية"],
    },
};

const slides = [
    { bg: "/images/main-slider/VillaConstruction.webp", alt: "Construction Companies in Abu Dhabi", video: "https://www.youtube.com/watch?v=8HBZdEbywE4" },
    { bg: "/images/main-slider/structure.webp", alt: "Structure Repair Services", video: "https://www.youtube.com/watch?v=00_cHMGz5aE" },
    { bg: "/images/main-slider/cladding.webp", alt: "Cladding Services", video: "https://www.youtube.com/watch?v=ngxg4FNq2Sg" },
];

export default function BannerSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    return (
        <section className="w-full h-screen min-h-screen relative">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                loop
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {slides.map((item, idx) => (
                    <SwiperSlide key={idx} className="relative w-full h-full">
                        <Image src={item.bg} alt={item.alt} fill sizes="100vw" className="object-cover" priority={idx === 0} />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center text-white px-5">
                            <Link
                                href="#offer-form"
                                className="bg-[#ff914d] text-white font-bold rounded-lg mb-5 px-6 py-3 lg:px-10 lg:py-4 text-lg lg:text-2xl"
                            >
                                {content.buttonText}
                            </Link>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-5">
                                {content.h1Keyword}
                            </h1>

                            {content.services.map((service, i) => (
                                <div key={i} className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-3">
                                    {service}
                                </div>
                            ))}

                            <div className="mt-8">
                                <a
                                    href={item.video}
                                    data-fancybox="gallery"
                                    className="w-16 h-16 flex items-center justify-center bg-white text-[#ff914d] rounded-full text-2xl"
                                >
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Wave */}
                        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[100px]">
                                <path d="M0.00,49.98 C150.00,150.00 349.28,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className="fill-white"></path>
                            </svg>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
