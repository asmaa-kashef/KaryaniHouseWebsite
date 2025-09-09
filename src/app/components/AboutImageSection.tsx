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
            ctas: [
                "Looking for trusted contracting companies in Abu Dhabi? Start your project with us today.",
                "Want to renovate or build your villa? Talk to our experts now.",
                "Need tailored construction solutions? Request a free consultation.",
            ],
        },
        ar: {
            heading: "أي مشروع بأي حجم",
            description: (
                <>
                    كرياني هاوس، إحدى أبرز <strong>شركات المقاولات في أبوظبي</strong>، متخصصة في <strong>بناء الفلل</strong>، التصميم الداخلي، التجديد، وخدمات الصيانة في جميع أنحاء الإمارات. نقدم خدمات احترافية في الإصلاحات الهيكلية، التكسية، أعمال الألمنيوم والزجاج، التشطيبات الداخلية، وحلول البناء المخصصة.
                </>
            ),
            ctas: [
                "تبحث عن أفضل شركات المقاولات في أبوظبي؟ ابدأ مشروعك معنا اليوم.",
                "ترغب في تجديد أو بناء فيلتك؟ تواصل مع خبرائنا الآن.",
                "تحتاج إلى حلول بناء مخصصة؟ احجز استشارة مجانية.",
            ],
        },
    };

    const { heading, description, ctas } = content[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "#f3f3f3",
                padding: "100px 20px",
                fontFamily: "'Poppins', Arial, sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "50px",
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
                        gap: "25px",
                        textAlign: currentLang === "ar" ? "right" : "left",
                    }}
                >
                    <h2
                        style={{
                            fontWeight: 800,
                            fontSize: "2.5rem",
                            color: "#222",
                            textShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px",
                            marginBottom: "20px",
                            position: "relative",
                            display: "inline-block",
                            paddingBottom: "12px",
                            lineHeight: "1.3",
                        }}
                    >
                        {heading}
                        <span
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: currentLang === "ar" ? "auto" : "50%",
                                right: currentLang === "ar" ? "50%" : "auto",
                                transform: "translateX(-50%)",
                                width: "80px",
                                height: "4px",
                                backgroundColor: "rgb(255, 152, 0)",
                                borderRadius: "3px",
                            }}
                        ></span>
                    </h2>

                    <p style={{ fontSize: "17px", color: "#555", lineHeight: "1.8" }}>
                        {description}
                    </p>

                    {/* CTA List with inline styled bullets */}
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            margin: "15px 0 25px",
                            fontSize: "16px",
                            color: "#333",
                            lineHeight: "1.8",
                        }}
                    >
                        {ctas.map((cta, index) => (
                            <li
                                key={index}
                                style={{
                                    position: "relative",
                                    paddingLeft: currentLang === "ar" ? "0" : "28px",
                                    paddingRight: currentLang === "ar" ? "28px" : "0",
                                    marginBottom: "14px",
                                    fontWeight: 500,
                                }}
                            >
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: currentLang === "ar" ? "auto" : "0",
                                        right: currentLang === "ar" ? "0" : "auto",
                                        transform: "translateY(-50%)",
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: "rgb(255, 152, 0)",
                                    }}
                                ></span>
                                {cta}
                            </li>
                        ))}
                    </ul>

                    <AboutButton />
                </div>
            </div>
        </section>
    );
}
