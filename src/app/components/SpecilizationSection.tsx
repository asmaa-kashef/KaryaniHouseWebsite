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
                backgroundColor: "#f9f9f9",
                padding: "40px 0",
                textAlign: "center",
            }}
        >
            <div className="auto-container">
                {/* Title */}
                <div
                    className="sec-title"
                    style={{ marginBottom: "30px", position: "relative" }}
                >
                    <span
                        className="float-text"
                        style={{
                            fontSize: "60px",
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
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#ff914d",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        {heading}
                    </h2>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={15}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 10 },     // موبايل صغير جدًا
                        480: { slidesPerView: 1, spaceBetween: 10 },   // موبايل عادي
                        768: { slidesPerView: 2, spaceBetween: 15 },   // تابلت
                        1024: { slidesPerView: 4, spaceBetween: 15 },  // ديسكتوب
                    }}
                    style={{ paddingBottom: "40px" }}
                >
                    {services.map((service, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="service-block-two"
                                style={{
                                    background: "#fff",
                                    borderRadius: "10px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                    border: "3px solid #ff914d",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer",
                                    height: "100%",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    const h3 = e.currentTarget.querySelector("h3");
                                    if (h3) h3.style.color = "#ff914d";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    const h3 = e.currentTarget.querySelector("h3");
                                    if (h3) h3.style.color = "#545454";
                                }}
                            >
                                <div className="inner-box" style={{ textAlign: "center" }}>
                                    <a
                                        href={`/${currentLang}/projects`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div className="image-box">
                                            <figure className="image" style={{ margin: 0 }}>
                                                <Image
                                                    src={service.img}
                                                    alt={service.title}
                                                    width={180}
                                                    height={120}
                                                    style={{
                                                        objectFit: "cover",
                                                        display: "block",
                                                        borderTopLeftRadius: "10px",
                                                        borderTopRightRadius: "10px",
                                                    }}
                                                />
                                            </figure>
                                        </div>
                                        <div
                                            className="caption-box"
                                            style={{ padding: "8px 5px" }}
                                        >
                                            <h3
                                                style={{
                                                    fontSize: "13px",
                                                    fontWeight: "600",
                                                    color: "#545454",
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
                    background: #ccc !important;
                    opacity: 1 !important;
                }
                .swiper-pagination-bullet-active {
                    background: #ff914d !important;
                }
            `}</style>
        </section>
    );
}
