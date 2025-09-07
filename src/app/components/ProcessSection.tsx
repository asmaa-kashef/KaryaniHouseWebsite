"use client";

import { usePathname } from "next/navigation";
import { FaLightbulb, FaRegCalendarAlt, FaDraftingCompass, FaRocket } from "react-icons/fa";

export default function ProcessSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            floatText: "Process",
            heading: "Proven Process",
            steps: [
                {
                    icon: <FaLightbulb size={40} />,
                    title: "Concept",
                    desc: "We start with brainstorming and innovative ideas to set the foundation.",
                },
                {
                    icon: <FaRegCalendarAlt size={40} />,
                    title: "Planning",
                    desc: "Strategic planning ensures smooth project flow with proper milestones.",
                },
                {
                    icon: <FaDraftingCompass size={40} />,
                    title: "Design",
                    desc: "Creative design tailored to your vision and project requirements.",
                },
                {
                    icon: <FaRocket size={40} />,
                    title: "Execution",
                    desc: "We bring everything to life with quality work and timely delivery.",
                },
            ],
        },
        ar: {
            floatText: "العملية",
            heading: "العملية المثبتة",
            steps: [
                {
                    icon: <FaLightbulb size={40} />,
                    title: "الفكرة",
                    desc: "نبدأ بعصف ذهني وأفكار مبتكرة لتأسيس المشروع.",
                },
                {
                    icon: <FaRegCalendarAlt size={40} />,
                    title: "التخطيط",
                    desc: "التخطيط الاستراتيجي يضمن سير المشروع بسلاسة مع تحديد مراحل واضحة.",
                },
                {
                    icon: <FaDraftingCompass size={40} />,
                    title: "التصميم",
                    desc: "تصميم إبداعي مخصص لرؤيتك ومتطلبات مشروعك.",
                },
                {
                    icon: <FaRocket size={40} />,
                    title: "التنفيذ",
                    desc: "نحول كل شيء إلى واقع بجودة عالية وتسليم في الوقت المحدد.",
                },
            ],
        },
    };

    const { floatText, heading, steps } = content[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                padding: "80px 0",
                backgroundColor: "#f0f0f0",
                position: "relative",
            }}
        >
            <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto" }}>
                {/* Title */}
                <div
                    className="sec-title"
                    style={{ marginBottom: "60px", textAlign: "center", position: "relative" }}
                >
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

                {/* Steps */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px",
                        justifyContent: "center",
                    }}
                >
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            style={{
                                flex: "1 1 250px",
                                maxWidth: "260px",
                                background: "#ff9800",
                                borderRadius: "18px",
                                padding: "40px 25px",
                                textAlign: "center",
                                transition: "all 0.35s ease",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                                position: "relative",
                                color: "#fff",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-10px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(0,0,0,0.25)";
                            }}
                        >
                            {/* Number */}
                            <span
                                style={{
                                    fontSize: "36px",
                                    fontWeight: "700",
                                    display: "inline-block",
                                    background: "rgba(255, 255, 255, 0.2)",
                                    padding: "12px 20px",
                                    borderRadius: "50%",
                                    marginBottom: "20px",
                                    color: "#fff",
                                }}
                            >
                                {`0${idx + 1}`}
                            </span>

                            {/* Icon */}
                            <div style={{ marginBottom: "15px" }}>{step.icon}</div>

                            {/* Title */}
                            <h4
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    marginBottom: "15px",
                                }}
                            >
                                {step.title}
                            </h4>

                            {/* Description */}
                            <div style={{ fontSize: "15px", lineHeight: "1.7em" }}>
                                {step.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
