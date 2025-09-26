"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

type Card = {
    title: string;
    description: React.ReactNode | string;
    button?: string;
    link?: string;
};

export default function ProjectsCTASection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            projects: {
                floatText: "Projects",
                heading: "Our Projects",
                cards: [
                    {
                        title: "🏗️ Explore Our Work",
                        description: (
                            <>
                                From <strong>luxury villas</strong> to <strong>renovations</strong> and{" "}
                                <strong>structural repairs</strong>, our projects reflect quality,
                                precision, and innovation.
                            </>
                        ),
                        button: "View Projects",
                        link: "/en/projects?filter=all&page=1",
                    },
                ],
            },
            services: {
                floatText: "Services",
                heading: "Our Services",
                cards: [
                    {
                        title: "🏠 Villa Construction",
                        description: "Building luxury villas with precision, quality, and elegance.",
                    },
                    {
                        title: "🎨 Interior Design",
                        description: "Creative, modern, and functional interior design solutions.",
                    },
                    {
                        title: "🔧 Renovation & Maintenance",
                        description: "Expert renovations and reliable property maintenance services.",
                    },
                ],
            },
        },
        ar: {
            projects: {
                floatText: "مشاريعنا",
                heading: "مشاريعنا",
                cards: [
                    {
                        title: "🏗️ اكتشف أعمالنا",
                        description: (
                            <>
                                من <strong>الفلل الفاخرة</strong> إلى <strong>التجديدات</strong>{" "}
                                و<strong>إصلاح الهياكل</strong>، مشاريعنا تعكس الجودة والدقة
                                والابتكار.
                            </>
                        ),
                        button: "عرض المشاريع",
                        link: "/ar/projects?filter=all&page=1",
                    },
                ],
            },
            services: {
                floatText: "خدماتنا",
                heading: "خدماتنا",
                cards: [
                    {
                        title: "🏠 بناء الفلل",
                        description: "نقوم ببناء الفلل الفاخرة بأعلى مستويات الجودة والدقة.",
                    },
                    {
                        title: "🎨 التصميم الداخلي",
                        description: "حلول تصميم داخلي مبتكرة، عصرية، وعملية.",
                    },
                    {
                        title: "🔧 التجديد والصيانة",
                        description: "خدمات تجديد احترافية وصيانة موثوقة للعقارات.",
                    },
                ],
            },
        },
    };

    const { projects, services } = content[currentLang];

    const renderSection = (
        floatText: string,
        heading: string,
        cards: Card[],
        isProjects = false
    ) => (
        <div style={{ marginBottom: "80px" }}>
            <div
                style={{ marginBottom: "40px", position: "relative", textAlign: "center" }}
            >
                <span
                    style={{
                        fontSize: "64px",
                        color: "rgba(255,152,0,0.08)",
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
                            backgroundColor: "rgb(255, 152, 0)",
                            borderRadius: "2px",
                        }}
                    ></span>
                </h2>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "30px",
                    marginTop: "30px",
                }}
            >
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        style={{
                            background: isProjects ? "rgb(255, 152, 0)" : "#fff",
                            borderRadius: "15px",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                            padding: "25px",
                            maxWidth: "350px",
                            textAlign: currentLang === "ar" ? "right" : "left",
                            transition: "transform 0.3s ease",
                            color: isProjects ? "#fff" : "#333",
                            flex: "1 1 300px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                marginBottom: "15px",
                                color: isProjects ? "#fff" : "#222",
                            }}
                        >
                            {card.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: "1.6",
                                marginBottom: isProjects && card.button ? "20px" : "0",
                                color: isProjects ? "#fff" : "#555",
                            }}
                        >
                            {card.description}
                        </p>
                        {isProjects && card.button && card.link && (
                            <Link
                                href={card.link}
                                style={{
                                    background: "#fff",
                                    color: "rgb(255,152,0)",
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    fontWeight: "600",
                                    textDecoration: "none",
                                    display: "inline-block",
                                    marginTop: "15px",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#222";
                                    e.currentTarget.style.color = "#fff";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "#fff";
                                    e.currentTarget.style.color = "rgb(255,152,0)";
                                }}
                            >
                                {card.button}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "rgb(240, 240, 240)",
                padding: "60px 20px",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
                {renderSection(services.floatText, services.heading, services.cards)}
                {renderSection(projects.floatText, projects.heading, projects.cards, true)}
            </div>
        </section>
    );
}
