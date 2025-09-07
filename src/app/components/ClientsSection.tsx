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
                        width: "120%",
                        margin: "0 -10%",
                        padding: "30px",
                        borderRadius: "20px",
                        background: "chocolate",
                        boxShadow: "0 8px 25px rgba(150, 150, 255, 0.7)", // 🔵 blue shadow
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
                                        border: "4px solid orange", // 🔥 orange border
                                        borderRadius: "10px",
                                        background: "#fff",
                                        boxShadow: "0 8px 20px rgba(255,165,0,0.4)", // 🔥 orange shadow
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
        </section>
    );
};

export default ClientsSection;
