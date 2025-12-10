"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const translations = {
    en: {
        mainTitle: "Exclusive Tour of Our Selected Projects",
        categoryButtons: {
            villa: "VILLA Construction",
            repair: "Structure Repair",
            cladding: "Cladding Project",
        },
        noVideos: "No videos available for this category.",
    },
    ar: {
        mainTitle: "جولة حصرية في مشاريعنا المختارة",
        categoryButtons: {
            villa: "بناء الفلل",
            repair: "ترميم الهياكل",
            cladding: "مشاريع التكسية",
        },
        noVideos: "لا توجد فيديوهات متاحة لهذه الفئة.",
    },
};

type Member = { video: string; title: string; desc: string; date: string };

const TeamWithVideos = () => {
    const [category, setCategory] = useState("villa");
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    const videosByCategory: Record<string, Member[]> = {
        villa: [
            { video: "00_cHMGz5aE", title: "Villa Construction 1", desc: "Luxury villa construction", date: "2025-01-01" },
            { video: "8HBZdEbywE4", title: "Villa Construction 2", desc: "Modern villa building", date: "2025-01-02" },
            { video: "ngxg4FNq2Sg", title: "Villa Construction 3", desc: "High-quality villa project", date: "2025-01-03" },
        ],
        repair: [
            { video: "Y6ciIuGM06c", title: "Structure Repair", desc: "Structural repair and renovation", date: "2025-01-04" },
        ],
        cladding: [],
    };

    const members = videosByCategory[category] || [];

    // Generate JSON-LD schema for SEO
    const schemaJSONLD = {
        "@context": "https://schema.org",
        "@type": "VideoGallery",
        name: "Karyani House Projects",
        description: "A showcase of Karyani House's luxury villa construction, structure repair, and cladding projects.",
        video: members.map((v) => ({
            "@type": "VideoObject",
            name: v.title,
            description: v.desc,
            thumbnailUrl: "https://example.com/images/video-thumb.jpg",
            uploadDate: v.date,
            contentUrl: `https://www.youtube.com/watch?v=${v.video}`,
            embedUrl: `https://www.youtube.com/embed/${v.video}`,
        })),
    };

    // Responsive height for videos
    const [videoHeight, setVideoHeight] = useState(350);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVideoHeight(450);
            else setVideoHeight(350);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section style={{ position: "relative", overflow: "hidden", padding: "60px 15px" }}>
            {/* JSON-LD schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSONLD) }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                {/* Title */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "2rem", color: "#222", textShadow: "1px 1px 3px rgba(0,0,0,0.15)" }}>
                        {content.mainTitle}
                    </h2>
                </div>

                {/* Category Buttons */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    {Object.keys(content.categoryButtons).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            style={{
                                fontFamily: "'Arial', sans-serif",
                                backgroundColor: category === cat ? "#ff914d" : "#fff",
                                color: category === cat ? "#fff" : "#444",
                                borderRadius: "30px",
                                padding: "10px 25px",
                                fontWeight: 500,
                                margin: "0 8px",
                                boxShadow: category === cat ? "0 6px 15px rgba(255,145,77,0.5)" : "0 4px 10px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            {content.categoryButtons[cat as keyof typeof content.categoryButtons]}
                        </button>
                    ))}
                </div>

                {/* Videos */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
                    {members.length === 0 ? (
                        <p style={{ color: "#666" }}>{content.noVideos}</p>
                    ) : (
                        members.map((member, idx) => (
                            <div key={idx} style={{ width: "100%", maxWidth: "360px" }}>
                                <div
                                    style={{
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        boxShadow: "0 8px 25px rgba(100,149,237,0.5)",
                                        transition: "all 0.3s ease",
                                        background: "#fff",
                                    }}
                                >
                                    <LiteYouTubeEmbed
                                        id={member.video}
                                        title={member.title}
                                        poster="hqdefault"
                                        webp
                                        noCookie
                                        style={{ width: "100%", height: videoHeight, borderRadius: "12px" }}
                                    />
                                    <div style={{ padding: "15px" }}>
                                        <h4 style={{ margin: "5px 0", fontSize: "1.1rem", color: "#222" }}>{member.title}</h4>
                                        <p style={{ fontSize: "0.9rem", color: "#555" }}>{member.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamWithVideos;
