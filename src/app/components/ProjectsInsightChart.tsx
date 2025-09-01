'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// ---------- Types ----------
interface BarPart {
    label: string;
    value: number;
    color: string;
}

interface ProjectBar {
    label: string;
    parts: BarPart[];
    icon?: string;
}

interface GoogleReview {
    author_name: string;
    profile_photo_url: string;
    text: string;
    rating: number; // 1-5
    relative_time_description: string;
}

interface Review {
    author: string;
    text: string;
    rating: number;
    date: string;
}

const translations = {
    en: {
        insightsTitle: "Customer Reviews and Projects Insights",
        discoverText: "Discover the strength and growth of our projects! 🌟 Each project shows the completed work and ongoing progress clearly.",
        callToAction: "📞 Call Us Now",
        noReviews: "No reviews yet.",
        projectLabels: {
            villa: "Villa Construction",
            repair: "Structure Repair",
            cladding: "Cladding",
            completed: "Completed",
            inProgress: "In Progress",
        }
    },
    ar: {
        insightsTitle: "آراء العملاء وإحصائيات المشاريع",
        discoverText: "اكتشف قوة ونمو مشاريعنا! 🌟 كل مشروع يوضح الأعمال المنجزة والتقدم المستمر بوضوح.",
        callToAction: "📞 اتصل بنا الآن",
        noReviews: "لا توجد مراجعات بعد.",
        projectLabels: {
            villa: "بناء الفلل",
            repair: "ترميم الهياكل",
            cladding: "التكسية",
            completed: "مكتمل",
            inProgress: "قيد التنفيذ",
        }
    }
};

// ---------- Reviews Card Component ----------
interface ReviewsCardProps {
    reviews: Review[];
    lang: 'en' | 'ar';
}

function ReviewsCard({ reviews, lang }: ReviewsCardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const content = translations[lang];
    const isArabic = lang === 'ar';

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    // Auto-advance the slider every 5 seconds
    useEffect(() => {
        if (reviews.length > 1) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [reviews]);

    return (
        <div style={{
            border: "3px solid #ff6b00",
            borderRadius: "15px",
            backgroundColor: "#fff",
            padding: "20px",
            width: "550px",
            height: "350px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            direction: isArabic ? 'rtl' : 'ltr',
            textAlign: isArabic ? 'right' : 'left',
        }}>
            <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ff6b00",
                marginBottom: "15px",
                textAlign: "center"
            }}>
                ⭐ {content.insightsTitle.split(' and ')[0]}
            </h3>

            {reviews.length === 0 ? (
                <p style={{ textAlign: "center", color: "#555" }}>{content.noReviews}</p>
            ) : (
                <div style={{ position: "relative", height: "100%", overflow: "hidden" }}>
                    {reviews.map((rev, idx) => (
                        <div
                            key={idx}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                paddingBottom: "10px",
                                opacity: currentIndex === idx ? 1 : 0,
                                transform: `translateX(${100 * (idx - currentIndex)}%)`,
                                transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <p style={{ fontWeight: 600, marginBottom: "5px", color: "#333" }}>{rev.author}</p>
                            <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "5px", flexGrow: 1, overflowY: "auto" }}>{rev.text}</p>
                            <p style={{ fontSize: "0.8rem", color: "#999", marginTop: "10px" }}>
                                {Array.from({ length: rev.rating }).map((_, i) => "⭐").join("")} • {rev.date}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {reviews.length > 1 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", zIndex: 10 }}>
                    <button onClick={handlePrev} style={{
                        background: "#ff6b00",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}>
                        &#8592;
                    </button>
                    <button onClick={handleNext} style={{
                        background: "#ff6b00",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}>
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
}

// ---------- Main Component ----------
export default function InsightsAndReviews() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];
    const isArabic = currentLang === 'ar';

    const data: ProjectBar[] = [
        { label: content.projectLabels.villa, icon: "🏠", parts: [{ label: content.projectLabels.completed, value: 180, color: "#ff4500" }, { label: content.projectLabels.inProgress, value: 120, color: "#ffa500" }] },
        { label: content.projectLabels.repair, icon: "🛠️", parts: [{ label: content.projectLabels.completed, value: 150, color: "#f08000" }, { label: content.projectLabels.inProgress, value: 100, color: "#f7c38d" }] },
        { label: content.projectLabels.cladding, icon: "🧱", parts: [{ label: content.projectLabels.completed, value: 130, color: "#00796b" }, { label: content.projectLabels.inProgress, value: 70, color: "#4db6ac" }] },
    ];

    const [animatedParts, setAnimatedParts] = React.useState<number[][]>(data.map(proj => proj.parts.map(() => 0)));
    const [reviews, setReviews] = useState<Review[]>([]);

    // Animate bars
    useEffect(() => {
        let frame = 0;
        const maxFrames = 60;
        const interval = setInterval(() => {
            frame++;
            setAnimatedParts(data.map((proj, i) =>
                proj.parts.map((part, j) => {
                    const progress = frame / maxFrames;
                    const bounce = Math.sin(progress * Math.PI * 0.5) * part.value;
                    return bounce > part.value ? part.value : Math.floor(bounce);
                })
            ));
            if (frame >= maxFrames) clearInterval(interval);
        }, 15);
        return () => clearInterval(interval);
    }, []);

    const getTotal = (parts: BarPart[], idx: number) => animatedParts[idx].reduce((a, b) => a + b, 0);

    const getBarWidth = () => {
        if (typeof window !== "undefined") {
            const w = window.innerWidth;
            if (w < 480) return "50px";
            if (w < 768) return "60px";
            return "70px";
        }
        return "70px";
    };

    const getGap = () => {
        if (typeof window !== "undefined") {
            const w = window.innerWidth;
            if (w < 480) return "10px";
            if (w < 768) return "15px";
            return "68px";
        }
        return "68px";
    };

    // Fetch Google Reviews dynamically
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api'); // Corrected API path
                if (!response.ok) throw new Error('Failed to fetch reviews');

                const data = await response.json();
                const formatted: Review[] = data.reviews.map((rev: GoogleReview) => ({
                    author: rev.author_name,
                    text: rev.text,
                    rating: rev.rating,
                    date: rev.relative_time_description,
                }));
                setReviews(formatted);
            } catch (err) {
                console.error(err);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section style={{
            padding: "80px 20px",
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #545454, #777777)",
            direction: isArabic ? 'rtl' : 'ltr',
        }}>
            {/* Overlay */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255,255,255,0.2)",
                zIndex: 0
            }} />

            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "50px", color: "#000", position: "relative", zIndex: 1 }}>
                {content.insightsTitle}
            </h2>

            {/* Flex Container Responsive */}
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "40px",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1
            }}>
                {/* Chart */}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    gap: getGap(),
                    padding: "0 10px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    height: "400px",
                }}>
                    {data.map((proj, idx) => (
                        <div key={idx} style={{
                            display: "inline-flex",
                            flexDirection: "column-reverse",
                            width: getBarWidth(),
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginBottom: "60px",
                            position: "relative",
                            flexShrink: 0,
                        }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scaleY(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scaleY(1)")}
                        >
                            {proj.parts.map((part, j) => (
                                <div key={j} style={{
                                    height: `${animatedParts[idx][j]}px`,
                                    background: part.color,
                                    borderRadius: j === 0 ? "8px 8px 0 0" : "0",
                                    boxShadow: `0 6px 20px ${part.color}80`,
                                    border: "1px solid rgba(0,0,0,0.15)",
                                    transition: "all 0.3s ease",
                                }} />
                            ))}

                            <div style={{
                                position: "absolute",
                                top: `-35px`,
                                left: "50%",
                                transform: "translateX(-50%)",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "700",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                                fontSize: "0.9rem",
                                transition: "all 0.3s ease",
                            }}>
                                {getTotal(proj.parts, idx)}
                            </div>

                            <div style={{
                                position: "absolute",
                                bottom: "-55px",
                                fontSize: "0.95rem",
                                color: "#222",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "5px",
                                fontWeight: 700,
                                textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
                            }}>
                                {proj.icon && <span style={{ fontSize: "1.3rem" }}>{proj.icon}</span>}
                                <span>{proj.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reviews Card */}
                <ReviewsCard reviews={reviews} lang={currentLang} />
            </div>

            {/* Text + Button Section */}
            <div style={{
                background: "linear-gradient(135deg, #ff9c66, #d2691e)",
                margin: "50px auto 0",
                maxWidth: "90%",
                padding: "35px 25px",
                borderRadius: "15px",
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
                transition: "all 0.5s ease",
                position: "relative",
                zIndex: 1,
                color: "#fff",
                textAlign: "center",
                direction: isArabic ? 'rtl' : 'ltr',
            }}>
                <p style={{ fontSize: "1.2rem", marginBottom: "25px", fontWeight: 600, lineHeight: 1.5, color: "#fff" }}>
                    {content.discoverText}
                </p>
                <a href="tel:0097150660715" style={{
                    display: "inline-block",
                    padding: "16px 36px",
                    background: "#fff",
                    color: "#d2691e",
                    textDecoration: "none",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "1rem",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                }}
                    onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "#ffe6d1";
                        el.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.background = "#fff";
                        el.style.transform = "scale(1)";
                    }}>
                    {content.callToAction}
                </a>
            </div>
        </section>
    );
}