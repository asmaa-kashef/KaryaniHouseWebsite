"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface Project {
    videoId: string;
    name: string;
    title: string;
    text: string;
}

const componentContent = {
    en: {
        heading: "Our Best Work",
        subheading: "Project",
        allProjectsLink: "All Projects",
        viewProjectLink: "View Project",
        quoteLink: "Get a Quote",
    },
    ar: {
        heading: "أفضل أعمالنا",
        subheading: "المشاريع",
        allProjectsLink: "جميع المشاريع",
        viewProjectLink: "عرض المشروع",
        quoteLink: "اطلب عرض سعر",
    },
};

export default function ProjectsComponent() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = componentContent[currentLang];

    const [activeIndex, setActiveIndex] = useState(0);
    const sliderInterval = useRef<NodeJS.Timer | null>(null);

    const projects: Project[] = [
        {
            videoId: "00_cHMGz5aE",
            name: currentLang === "ar" ? "بناء فيلا" : "Villa Construction",
            title: currentLang === "ar" ? "إنشاء" : "Construction",
            text:
                currentLang === "ar"
                    ? "مشروع بناء فيلا بتصميم حديث وعالي الجودة"
                    : "Luxury villa construction project with modern design",
        },
        {
            videoId: "Y6ciIuGM06c",
            name: currentLang === "ar" ? "ترميم الهياكل" : "Structure Repair",
            title: currentLang === "ar" ? "ترميم" : "Repair",
            text:
                currentLang === "ar"
                    ? "مشروع ترميم وإصلاح الهياكل للمباني والفيلات"
                    : "Structural repair and renovation of villas",
        },
    ];

    // ===== Slider Interval Function =====
    useEffect(() => {
        startSlider();
        return () => stopSlider();
    }, [projects.length]);

    const startSlider = () => {
        stopSlider(); // clear existing
        sliderInterval.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 4000);
    };

    const stopSlider = () => {
        if (sliderInterval.current) clearInterval(sliderInterval.current);
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
        startSlider(); // reset interval after user interaction
    };

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{ padding: "80px 0", position: "relative" }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
                {/* Header */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ marginBottom: "10px", textAlign: "left" }}>
                        <span
                            style={{
                                fontSize: "64px",
                                color: "rgba(0,0,0,0.05)",
                                fontWeight: "bold",
                                display: "block",
                            }}
                        >
                            {content.subheading}
                        </span>
                        <h2
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: "800",
                                color: "#222",
                                marginTop: "-40px",
                            }}
                        >
                            {content.heading}
                        </h2>
                    </div>

                    <Link
                        href={`/${currentLang}/projects`}
                        style={{
                            padding: "10px 18px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: 600,
                            background: "#ff914d",
                            color: "#fff",
                            textDecoration: "none",
                            boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                        }}
                    >
                        {content.allProjectsLink} →
                    </Link>
                </div>

                {/* Slider */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "40px",
                                transition: "opacity 0.5s ease-in-out",
                                opacity: idx === activeIndex ? 1 : 0,
                                position: idx === activeIndex ? "relative" : "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                            }}
                        >
                            {/* Lite YouTube Video with lazy-load */}
                            <div
                                style={{
                                    position: "relative",
                                    paddingTop: "56.25%",
                                    width: "100%",
                                    maxWidth: "800px",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    border: "3px solid #ff914d",
                                    boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
                                }}
                            >
                                <LiteYouTubeEmbed
                                    id={project.videoId}
                                    title={project.title}
                                    poster="hqdefault"
                                    webp
                                    noCookie
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </div>

                            {/* Text */}
                            <div style={{ textAlign: "center" }}>
                                <span
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        color: "#ff914d",
                                        display: "block",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {project.title}
                                </span>
                                <h3
                                    style={{
                                        fontSize: "20px",
                                        margin: "5px 0",
                                        color: "#222",
                                    }}
                                >
                                    {project.name}
                                </h3>
                                <div
                                    style={{
                                        marginTop: "10px",
                                        fontSize: "14px",
                                        color: "#555",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {project.text}
                                </div>

                                <div
                                    style={{
                                        marginTop: "20px",
                                        display: "flex",
                                        gap: "10px",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Link
                                        href={`/${currentLang}/projects`}
                                        style={{
                                            padding: "10px 18px",
                                            borderRadius: "6px",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            background: "#ff914d",
                                            color: "#fff",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {content.viewProjectLink}
                                    </Link>

                                    <a
                                        href="#offer-form"
                                        style={{
                                            padding: "10px 18px",
                                            borderRadius: "6px",
                                            fontSize: "14px",
                                            fontWeight: 600,
                                            border: "2px solid #ff914d",
                                            color: "#ff914d",
                                            background: "white",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {content.quoteLink}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Dots */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "30px",
                        }}
                    >
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    background: idx === activeIndex ? "#ff914d" : "#ccc",
                                    margin: "0 5px",
                                    cursor: "pointer",
                                    transition: "background 0.3s",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
