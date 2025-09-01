"use client";
import React, { useState } from "react";
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

type Member = { video: string };

const TeamWithVideos = () => {
    const [category, setCategory] = useState("villa");
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    const videosByCategory: Record<string, Member[]> = {
        villa: [
            { video: "https://www.youtube.com/embed/00_cHMGz5aE" },
            { video: "https://www.youtube.com/embed/8HBZdEbywE4" },
            { video: "https://www.youtube.com/embed/ngxg4FNq2Sg" },
        ],
        repair: [{ video: "https://www.youtube.com/embed/Y6ciIuGM06c" }],
        cladding: [{ video: "" }],
    };

    const members = videosByCategory[category] || [];

    return (
        <section
            className="team-section py-5"
            style={{
              
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* 🔹 الخلفية التفاعلية - نصف Pentagon على اليمين واليسار */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                {/* Right half Pentagon */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        right: "-60px", // يظهر جزئيًا فقط
                        width: "200px",
                        height: "200px",
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        backgroundColor: "rgba(255,145,77,0.4)",
                        boxShadow: "0 0 30px rgba(255,145,77,0.3)",
                        animation: "floatPentagon 10s ease-in-out infinite alternate",
                    }}
                ></div>

                {/* Left half Pentagon */}
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "-60px", // يظهر جزئيًا فقط
                        width: "200px",
                        height: "200px",
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        backgroundColor: "rgba(100,149,237,0.3)",
                        boxShadow: "0 0 30px rgba(100,149,237,0.3)",
                        animation: "floatPentagon 12s ease-in-out infinite alternate",
                    }}
                ></div>

                {/* CSS Animation */}
                <style>
                    {`
            @keyframes floatPentagon {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(20px) rotate(10deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
          `}
                </style>
            </div>

            {/* محتوى الفيديوهات */}
            <div className="auto-container" style={{ position: "relative", zIndex: 10 }}>
                <div className="sec-title text-center mb-4">
                    <h2
                        style={{
                            fontWeight: 700,
                            fontSize: "2rem",
                            color: "#222",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
                        }}
                    >
                        {content.mainTitle}
                    </h2>
                </div>

                {/* الأزرار */}
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
                                boxShadow:
                                    category === cat
                                        ? "0 6px 15px rgba(255,145,77,0.5)"
                                        : "0 4px 10px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            {content.categoryButtons[cat as keyof typeof content.categoryButtons]}
                        </button>
                    ))}
                </div>

                {/* الفيديوهات */}
                <div className="row clearfix">
                    {members.map((member, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div
                                className="inner-box"
                                style={{
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 25px rgba(100,149,237,0.5)",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <div className="image-box">
                                    <div
                                        className="image"
                                        style={{
                                            height: "350px",
                                            overflow: "hidden",
                                            background: "#fff",
                                        }}
                                    >
                                        <iframe
                                            width="100%"
                                            height="350"
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
                    ))}

                    {members.length === 0 && (
                        <div className="col-12 text-center">
                            <p style={{ color: "#666" }}>{content.noVideos}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamWithVideos;
