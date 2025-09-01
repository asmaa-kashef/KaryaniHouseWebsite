"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const componentContent = {
    en: {
        heading: "ARCHITECT PLAN",
        text: "At our contracting company, we ensure the precise execution of architectural plans exactly as they are, maintaining high quality and full commitment to all approved details and designs.",
    },
    ar: {
        heading: "الخطة المعمارية",
        text: "في شركتنا للمقاولات، نضمن التنفيذ الدقيق للمخططات المعمارية تمامًا كما هي، مع الحفاظ على الجودة العالية والالتزام الكامل بجميع التفاصيل والتصاميم المعتمدة.",
    },
};

export default function ArchitectPlanSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = componentContent[currentLang];

    return (
        <section
            className="architect-plan-section"
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                padding: "80px 0",
                backgroundImage: "url('/images/background/1.jpg')",
            }}
        >
            <div className="auto-container">
                <div className="row align-items-center">
                    {/* Left Side - Image with animation */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <motion.div
                            initial={{ x: currentLang === "ar" ? 150 : -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <Image
                                src="/images/resource/image-1.webp"
                                alt="Architectural Plan"
                                width={500}
                                height={50}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "12px",
                                    boxShadow: "0 10px 30px rgba(210, 105, 30, 0.6)", // chocolate-orange shadow
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <motion.div
                            initial={{ x: currentLang === "ar" ? -150 : 150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        >
                            <div style={{ paddingLeft: currentLang === "ar" ? "0" : "30px", paddingRight: currentLang === "ar" ? "30px" : "0" }}>
                                <h2
                                    style={{
                                        fontSize: "36px",
                                        fontWeight: "700",
                                        color: "chocolate",
                                        marginBottom: "20px",
                                    }}
                                >
                                    {content.heading}
                                </h2>
                                <p
                                    style={{
                                        fontSize: "18px",
                                        color: "#444",
                                        lineHeight: "1.7",
                                    }}
                                >
                                    {content.text}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
