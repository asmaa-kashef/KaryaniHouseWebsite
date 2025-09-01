"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ClientsSection = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            headingMain: "Our Strategic Partners",
            headingSub: "",
        },
        ar: {
            headingMain: "شركاؤنا الاستراتيجيون",
            headingSub: "",
        },
    };

    const { headingMain, headingSub } = content[currentLang];

    return (
        <section
            className="clients-section"
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                position: "relative",
                padding: "80px 0",
                textAlign: "center",
                overflow: "hidden",
                background: "#fff",
            }}
        >
            {/* Title */}
            <div style={{ marginBottom: "40px" }}>
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "800",
                        color: "#222",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        fontFamily: "'Tajawal', sans-serif",
                        textShadow: "2px 2px 6px rgba(0,0,0,0.3)",
                        margin: "0 0 8px 0",
                    }}
                >
                    {headingMain}
                </h2>
                {headingSub && (
                    <h2
                        style={{
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#444",
                            fontFamily: "'Tajawal', sans-serif",
                            textShadow: "2px 2px 6px rgba(0,0,0,0.25)",
                            margin: 0,
                        }}
                    >
                        {headingSub}
                    </h2>
                )}
            </div>

            {/* Clients Box */}
            <div
                className="inner-container"
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 15px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div
                    className="sponsors-outer"
                    style={{
                        width: "120%", // increased width
                        margin: "0 -10%", // center the wider box
                        padding: "30px",
                        borderRadius: "20px",
                        background: "chocolate",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                        position: "relative",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                    }}
                >
                    <ul
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            flexWrap: "wrap",
                            gap: "15px",
                        }}
                    >
                        {[1, 2, 3, 4].map((num, idx) => (
                            <li
                                key={idx}
                                style={{
                                    flex: "1 1 calc(25% - 15px)",
                                    display: "flex",
                                    justifyContent: "center",
                                    minWidth: "120px",
                                }}
                            >
                                <figure
                                    style={{
                                        margin: 0,
                                        width: "120px",
                                        height: "120px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        border: "4px solid orange",
                                        borderRadius: "10px",
                                        background: "#fff",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                    }}
                                >
                                    <a href="#">
                                        <Image
                                            src={`/images/clients/${num}.png`}
                                            alt={`Client ${num}`}
                                            width={120}
                                            height={120}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </a>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Geometric Accents */}
            <div
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "-60px",
                    width: "220px",
                    height: "220px",
                    border: "8px solid rgba(255,165,0,0.3)",
                    transform: "rotate(45deg)",
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "10%",
                    right: "-80px",
                    width: "260px",
                    height: "260px",
                    border: "10px dashed rgba(0,0,0,0.1)",
                    borderRadius: "50%",
                    zIndex: 0,
                }}
            />
        </section>
    );
};

export default ClientsSection;
