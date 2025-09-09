"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
            { video: "https://www.youtube.com/embed/00_cHMGz5aE", title: "Villa Construction 1", desc: "Luxury villa construction", date: "2025-01-01" },
            { video: "https://www.youtube.com/embed/8HBZdEbywE4", title: "Villa Construction 2", desc: "Modern villa building", date: "2025-01-02" },
            { video: "https://www.youtube.com/embed/ngxg4FNq2Sg", title: "Villa Construction 3", desc: "High-quality villa project", date: "2025-01-03" },
        ],
        repair: [
            { video: "https://www.youtube.com/embed/Y6ciIuGM06c", title: "Structure Repair", desc: "Structural repair and renovation", date: "2025-01-04" },
        ],
        cladding: [],
    };

    const members = videosByCategory[category] || [];

    // Generate JSON-LD schema for SEO
    const schemaJSONLD = {
        "@context": "https://schema.org",
        "@type": "VideoGallery",
        "name": "Karyani House Projects",
        "description": "A showcase of Karyani House's luxury villa construction, structure repair, and cladding projects.",
        "video": members.map((v) => ({
            "@type": "VideoObject",
            "name": v.title,
            "description": v.desc,
            "thumbnailUrl": "https://example.com/images/video-thumb.jpg",
            "uploadDate": v.date,
            "contentUrl": v.video,
            "embedUrl": v.video,
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
        <section className="team-section py-5" style={{ position: "relative", overflow: "hidden" }}>
            {/* JSON-LD schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSONLD) }} />

            <div className="auto-container" style={{ position: "relative", zIndex: 10 }}>
                <div className="sec-title text-center mb-4">
                    <h2 style={{ fontWeight: 700, fontSize: "2rem", color: "#222", textShadow: "1px 1px 3px rgba(0,0,0,0.15)" }}>
                        {content.mainTitle}
                    </h2>
                </div>

                {/* Category Buttons */}
                <div className="text-center mb-5">
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
                <div className="row clearfix">
                    {members.length === 0 ? (
                        <div className="col-12 text-center">
                            <p style={{ color: "#666" }}>{content.noVideos}</p>
                        </div>
                    ) : (
                        members.map((member, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="inner-box" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 25px rgba(100,149,237,0.5)", transition: "all 0.3s ease" }}>
                                    <div className="image-box">
                                        <div className="image" style={{ height: videoHeight, overflow: "hidden", background: "#fff" }}>
                                            <iframe
                                                width="100%"
                                                height={videoHeight}
                                                src={member.video}
                                                title={`YouTube video ${idx}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                style={{ borderRadius: "12px" }}
                                            ></iframe>
                                        </div>
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
