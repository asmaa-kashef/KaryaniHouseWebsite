"use client";

import React from "react";
import Image from "next/image";
import AboutButton from "./AboutButton";
import { usePathname } from "next/navigation";

export default function AboutImageSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            heading: "Any Project For Any Scale",
            description: (
                <>
                    Karyani House, one of the leading <strong>contracting companies in Abu Dhabi</strong>, specializes in <strong>villa construction</strong>, interior design, renovation, and maintenance services across the UAE. We provide expert services in structural repair, cladding, aluminum and glass works, interior finishing, and custom construction solutions.
                </>
            ),
        },
        ar: {
            heading: "أي مشروع بأي حجم",
            description: (
                <>
                    كرياني هاوس، إحدى أبرز <strong>شركات المقاولات في أبوظبي</strong>، متخصصة في <strong>بناء الفلل</strong>، التصميم الداخلي، التجديد، وخدمات الصيانة في جميع أنحاء الإمارات. نقدم خدمات احترافية في الإصلاحات الهيكلية، التكسية، أعمال الألمنيوم والزجاج، التشطيبات الداخلية، وحلول البناء المخصصة.
                </>
            ),
        },
    };

    const { heading, description } = content[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "#f3f3f3",
                padding: "80px 20px",
                fontFamily: "'Arial', sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                {/* Left Column - Image */}
                <div style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}>
                    <div
                        style={{
                            display: "inline-block",
                            overflow: "visible",
                            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                        }}
                    >
                        <Image
                            src="/images/resource/alphabet-image.png"
                            alt="Alphabet"
                            width={600}
                            height={700}
                            style={{ display: "block", width: "100%", height: "auto" }}
                        />
                    </div>
                </div>

                {/* Right Column - Content */}
                <div
                    style={{
                        flex: "1 1 500px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "20px",
                        textAlign: currentLang === "ar" ? "right" : "left",
                    }}
                >
                    <h2
                        style={{
                            fontWeight: 700,
                            fontSize: "2rem",
                            color: "rgb(34, 34, 34)",
                            textShadow: "rgba(0, 0, 0, 0.15) 1px 1px 3px",
                            marginBottom: "40px",
                            position: "relative",
                            display: "inline-block",
                            paddingBottom: "10px",
                        }}
                    >
                        {heading}
                        <span
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "70px",
                                height: "3px",
                                backgroundColor: "rgb(255, 152, 0)",
                                borderRadius: "2px",
                            }}
                        ></span>
                    </h2>

                    <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
                        {description}
                    </p>

                    <AboutButton />
                </div>
            </div>
        </section>
    );
}
