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
            heading: "Our Specialization | Top Construction Companies in Abu Dhabi",
            description:
              
    <>
        Looking for the < strong > top construction companies in Abu Dhabi</strong> to execute your project with the highest quality and professionalism ? <strong>Karyani House</strong> is your ideal partner.We specialize in <strong>modern and luxury villa construction</strong>, providing < strong > comprehensive building maintenance and renovation solutions</strong >, from < strong > structural design</strong > to < strong > finishing touches</strong >.Our extensive experience and skilled team ensure your project is executed < strong > meticulously</strong >, meeting all your expectations and leaving you fully satisfied, while adhering to the highest < strong > safety and quality standards</strong >.
    </>,

            services: [
                {
                    img: "/images/resource/VillaConstruction.webp",
                    title: "Villa Construction",
                    description:
                        "Karyani House provides premium villa construction services in Abu Dhabi, delivering quality and precision.",
                    link: "/en/projects?filter=Villa&page=1",
                },
                {
                    img: "/images/gallery/10.webp",
                    title: "Structure Repair",
                    description:
                        "Expert structural repair services for residential and commercial buildings across Abu Dhabi.",
                    link: "/en/projects?filter=Repair&page=1",
                },
                {
                    img: "/images/resource/cladding.webp",
                    title: "Cladding",
                    description:
                        "High-quality facade cladding services by top construction companies in Abu Dhabi.",
                    link: "/en/projects?filter=Cladding&page=1",
                },
                {
                    img: "/images/resource/Alumnum.webp",
                    title: "Aluminium And Glass",
                    description:
                        "Professional aluminium and glass solutions, designed and installed by experts in Abu Dhabi.",
                    link: "/en/projects?filter=all&page=1",
                },
                {
                    img: "/images/resource/Interiordesign.webp",
                    title: "Interior Design",
                    description:
                        "Creative interior design services for villas and commercial spaces in Abu Dhabi.",
                    link: "/en/projects?filter=all&page=1",
                },
            ],
        },
        ar: {
            heading: "مجالات تخصصنا | افضل شركات المقاولات في ابوظبي",
            description:
              
                <>
                    تبحث عن<strong> أفضل شركات المقاولات في ابوظبي</strong> لتنفيذ مشروعك بأعلى جودة واحترافية؟ <strong>كرياني هاوس</strong> هي شركتك المثالية.نحن متخصصون في < strong > بناء الفلل الحديثة والفاخرة</strong >، وتقديم حلول < strong > الصيانة والترميم الشاملة للمباني</strong >، بدءًا من < strong > تصميم الهيكل</strong > وحتى < strong > التشطيبات النهائية</strong >.خبرتنا الطويلة وفريقنا المتميز يضمنان لك تنفيذ مشروعك بطريقة < strong > متقنة</strong > تلبي كل توقعاتك وتجعلك راضيًا تمامًا عن النتيجة، مع الالتزام بأعلى < strong > معايير السلامة والجودة</strong >.
                </>,

            services: [
                {
                    img: "/images/resource/VillaConstruction.webp",
                    title: "بناء الفلل",
                    description:
                        "كرياني هاوس تقدم خدمات بناء الفلل الفاخرة في أبوظبي بجودة ودقة عالية.",
                    link: "/ar/projects?filter=Villa&page=1",
                },
                {
                    img: "/images/resource/StructureRepair.webp",
                    title: "ترميم الهياكل",
                    description:
                        "خدمات احترافية لترميم الهياكل للمباني السكنية والتجارية في أبوظبي.",
                    link: "/ar/projects?filter=Repair&page=1",
                },
                {
                    img: "/images/resource/cladding.webp",
                    title: "تكسية الواجهات",
                    description:
                        "خدمات تكسية الواجهات عالية الجودة من أفضل شركات المقاولات في أبوظبي.",
                    link: "/ar/projects?filter=Cladding&page=1",
                },
                {
                    img: "/images/resource/Alumnum.webp",
                    title: "الألمنيوم والزجاج",
                    description:
                        "حلول احترافية للألمنيوم والزجاج يتم تصميمها وتركيبها بواسطة خبراء في أبوظبي.",
                    link: "/ar/projects?filter=all&page=1",
                },
                {
                    img: "/images/resource/Interiordesign.webp",
                    title: "التصميم الداخلي",
                    description:
                        "خدمات تصميم داخلي مبتكرة للفلل والمساحات التجارية في أبوظبي.",
                    link: "/ar/projects?filter=all&page=1",
                },
            ],
        },
    };

    const { heading, description, services } = content[currentLang];

    return (
        <section
            {...(currentLang === "ar" ? { dir: "rtl" } : {})}
            style={{ backgroundColor: "#F9FAFB", padding: "60px 0", textAlign: "center" }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0", // لا نضع padding للسلايدر هنا
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
                                    <a
                                        href={service.link}
                                        aria-label={`${service.title} projects in Abu Dhabi`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div style={{ textAlign: "center", padding: "12px 8px" }}>
                                            <figure style={{ margin: 0 }}>
                                                <Image
                                                    src={service.img}
                                                    alt={`${service.title} - construction companies in Abu Dhabi`}
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
                                            <h3
                                                style={{
                                                    fontSize: "15px",
                                                    fontWeight: 600,
                                                    color: "#374151",
                                                    margin: "8px 0 5px",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {service.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: "0.85rem",
                                                    color: "#555",
                                                    lineHeight: 1.4,
                                                    margin: 0,
                                                }}
                                            >
                                                {service.description}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Description below slider with padding responsive */}
                <div
                    style={{
                        fontSize: "1rem",
                        color: "#333",
                        lineHeight: 1.6,
                        marginTop: "20px",
                        textAlign: currentLang === "ar" ? "right" : "left",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                        maxWidth: "1200px",
                        margin: "20px auto 0",
                    }}
                >
                    {description}
                </div>
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

            {/* JSON-LD Schema for services */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: services.map((service, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name: service.title,
                            description: service.description,
                            image: `https://www.karyanihouse.com${service.img}`,
                            url: `https://www.karyanihouse.com${service.link}`,
                        })),
                    }),
                }}
            />
        </section>
    );
}
