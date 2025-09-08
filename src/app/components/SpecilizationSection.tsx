"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function SpecializationSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            heading: "Our Specialization",
            services: [
                { img: "/images/resource/VillaConstruction.webp", title: "Villa Construction" },
                { img: "/images/resource/StructureRepair.webp", title: "Structure Repair" },
                { img: "/images/resource/cladding.webp", title: "Cladding" },
                { img: "/images/resource/Alumnum.webp", title: "Aluminium And Glass" },
                { img: "/images/resource/Interiordesign.webp", title: "Interior Design" },
            ],
        },
        ar: {
            heading: "مجالات تخصصنا",
            services: [
                { img: "/images/resource/VillaConstruction.webp", title: "بناء الفلل" },
                { img: "/images/resource/StructureRepair.webp", title: "ترميم الهياكل" },
                { img: "/images/resource/cladding.webp", title: "تكسية الواجهات" },
                { img: "/images/resource/Alumnum.webp", title: "الألمنيوم والزجاج" },
                { img: "/images/resource/Interiordesign.webp", title: "التصميم الداخلي" },
            ],
        },
    };

    const { heading, services } = content[currentLang];

    return (
        <section
            {...(currentLang === "ar" ? { dir: "rtl" } : {})}
            style={{
                backgroundColor: "#F9FAFB",
                padding: "60px 0",
                textAlign: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: currentLang === "ar" ? "0 15px" : "0",
                }}
            >
                {/* Title */}
                <div style={{ marginBottom: "40px", position: "relative" }}>
                    <h2
                        style={{
                            fontWeight: 700,
                            fontSize: "2rem",
                            color: "#222",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
                            position: "relative",
                            display: "inline-block",
                            paddingBottom: "10px",
                            zIndex: 1,
                        }}
                    >
                        {heading}
                        <span
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "60px",
                                height: "3px",
                                backgroundColor: "#FF7A00",
                                borderRadius: "2px",
                            }}
                        ></span>
                    </h2>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        424: { slidesPerView: 1, spaceBetween: 0 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    style={{ paddingBottom: "50px" }}
                >
                    {services.map((service, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: currentLang === "ar" ? "flex-end" : "flex-start",
                                    alignItems: "flex-start",
                                    width: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        background: "#fff",
                                        borderRadius: "12px",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                        border: "1px solid #E5E7EB",
                                        transition: "all 0.3s ease",
                                        cursor: "pointer",
                                        overflow: "hidden",
                                        width: "100%",
                                        maxWidth: "100%",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                                        const h3 = e.currentTarget.querySelector("h3");
                                        if (h3) h3.style.color = "#FF7A00";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
                                        const h3 = e.currentTarget.querySelector("h3");
                                        if (h3) h3.style.color = "#374151";
                                    }}
                                >
                                    <a href={`/${currentLang}/projects`} style={{ textDecoration: "none" }}>
                                        <div style={{ textAlign: "center" }}>
                                            <figure style={{ margin: 0 }}>
                                                <Image
                                                    src={service.img}
                                                    alt={service.title}
                                                    width={200}
                                                    height={320}
                                                    style={{
                                                        objectFit: "cover",
                                                        display: "block",
                                                        width: "100%",
                                                        height: "auto",
                                                        maxHeight: "320px",
                                                    }}
                                                />
                                            </figure>
                                            <div style={{ padding: "12px 8px" }}>
                                                <h3
                                                    style={{
                                                        fontSize: "15px",
                                                        fontWeight: 600,
                                                        color: "#374151",
                                                        margin: 0,
                                                        transition: "color 0.3s ease",
                                                    }}
                                                >
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Swiper dots styling */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #d1d5db !important;
                    opacity: 1 !important;
                }
                .swiper-pagination-bullet-active {
                    background: #ff7a00 !important;
                }
            `}</style>
        </section>
    );
}
