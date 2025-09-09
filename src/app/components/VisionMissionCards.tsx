"use client";

import { usePathname } from "next/navigation";

export default function VisionMissionSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            floatText: "Identity",
            heading: "Vision & Mission",
            cards: [
                {
                    title: "🌟 Our Vision",
                    description: (
                        <>
                            To be one of the leading <strong>contracting companies in Abu Dhabi</strong> by delivering innovative interior and architectural solutions that inspire and endure.
                        </>
                    ),
                },
                {
                    title: "🎯 Our Mission",
                    description: (
                        <>
                            Providing high-quality <strong>villa construction</strong>, interior design, and execution services focused on client needs, balancing beauty and functionality.
                        </>
                    ),
                },
            ],
        },
        ar: {
            floatText: "هويتنا",
            heading: "الرؤية والرسالة",
            cards: [
                {
                    title: "🌟 رؤيتنا",
                    description: (
                        <>
                            أن نكون إحدى أبرز <strong>شركات المقاولات في أبوظبي</strong> من خلال تقديم حلول مبتكرة في التصميم الداخلي والهندسة المعمارية تلهم وتدوم.
                        </>
                    ),
                },
                {
                    title: "🎯 رسالتنا",
                    description: (
                        <>
                            تقديم خدمات عالية الجودة في <strong>بناء الفلل</strong>، التصميم الداخلي والتنفيذ مع التركيز على احتياجات العميل وتحقيق التوازن بين الجمال والوظيفة.
                        </>
                    ),
                },
            ],
        },
    };

    const { floatText, heading, cards } = content[currentLang];

    return (
        <section
            className="vision-mission-section"
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "rgb(240, 240, 240)",
                padding: "60px 20px",
                textAlign: "center",
            }}
        >
            <div className="auto-container">
                {/* Title */}
                <div className="sec-title" style={{ marginBottom: "40px", position: "relative" }}>
                    <span
                        className="float-text"
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

                {/* Cards */}
                <div
                    className="cards-wrapper"
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
                            className="card"
                            style={{
                                background: "rgb(255, 152, 0)",
                                borderRadius: "15px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                padding: "25px",
                                maxWidth: "400px",
                                textAlign: currentLang === "ar" ? "right" : "left",
                                transition: "transform 0.3s ease",
                                color: "#fff",
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
                                    color: "#fff",
                                }}
                            >
                                {card.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "16px",
                                    lineHeight: "1.6",
                                    color: "#fff",
                                }}
                            >
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
