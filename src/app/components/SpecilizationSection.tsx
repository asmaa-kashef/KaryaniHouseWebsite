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
            floatText: "Specialization",
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
            floatText: "تخصصنا",
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

    const { floatText, heading, services } = content[currentLang];

    return (
        <section
            className="specialize-section"
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "#F9FAFB",
                padding: "60px 0",
                textAlign: "center",
            }}
        >
            <div className="auto-container">
                {/* Title */}
                <div className="sec-title" style={{ marginBottom: "40px", position: "relative" }}>
                    <span
                        className="float-text"
                        style={{
                            fontSize: "64px",
                            color: "rgba(0,0,0,0.05)",
                            fontWeight: "bold",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 0,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {floatText}
                    </span>
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
                                backgroundColor: "#FF7A00", // أورنج براندينج
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
                    spaceBetween={20}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },
                        480: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 15 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    style={{ paddingBottom: "50px" }}
                >
                    {services.map((service, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="service-block-two"
                                style={{
                                    background: "#fff",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                                    border: "1px solid #E5E7EB", // رمادي فاتح
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    overflow: "hidden",
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
                                <div className="inner-box" style={{ textAlign: "center" }}>
                                    <a href={`/${currentLang}/projects`} style={{ textDecoration: "none" }}>
                                        <div className="image-box">
                                            <figure className="image" style={{ margin: 0 }}>
                                                <Image
                                                    src={service.img}
                                                    alt={service.title}
                                                    width={200}
                                                    height={320}
                                                    style={{
                                                        objectFit: "cover",
                                                        display: "block",
                                                        width: "100%",
                                                        height: "320px",
                                                    }}
                                                />
                                            </figure>
                                        </div>
                                        <div className="caption-box" style={{ padding: "12px 8px" }}>
                                            <h3
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: "600",
                                                    color: "#374151", // رمادي غامق
                                                    margin: 0,
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {service.title}
                                            </h3>
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
                    background: #d1d5db !important; /* رمادي */
                    opacity: 1 !important;
                }
                .swiper-pagination-bullet-active {
                    background: #ff7a00 !important; /* أورنج */
                }
            `}</style>
        </section>
    );
}
