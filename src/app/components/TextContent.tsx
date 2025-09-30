"use client";
import React from "react";
import { usePathname } from "next/navigation";

const translations = {
    en: {
        maintenanceTitle: "Maintenance & Renovation Services",
        maintenanceDesc: [
            "We don’t just build, we also provide comprehensive maintenance and renovation services:",
            "Full building maintenance to ensure long-term durability.",
            "Repair cracks and reinforce structures for safety.",
            "Renovating façades for a modern, elegant look.",
            "Customized services for residential and commercial buildings.",
            "Post-delivery support and consultations for long-term satisfaction.",
            "Choosing Karyani House ensures professional services on time with the highest quality standards.",
        ],
    },
    ar: {
        maintenanceTitle: "خدمات الصيانة والترميم",
        maintenanceDesc: [
            "لا يقتصر عملنا على البناء فقط، بل نقدم أيضًا خدمات شاملة للصيانة والترميم:",
            "صيانة كاملة للمباني لضمان طول عمر المنشآت والحفاظ على جودة المباني على المدى الطويل.",
            "إصلاح التشققات وتقوية الهيكل للحفاظ على سلامة المباني ومنع أي مشاكل مستقبلية.",
            "تجديد الواجهات الداخلية والخارجية لإضفاء مظهر عصري وجذاب، مع مراعاة تصميم متناسق لكل عناصر المبنى.",
            "خدمات مخصصة لكل نوع من المباني سواء كانت سكنية أو تجارية، لضمان أفضل النتائج لكل عميل.",
            "دعم ما بعد التسليم والاستشارات لضمان رضا العميل واستمرارية الأداء الممتاز للمبنى.",
            "اختيارك لكرياني هاوس يضمن لك أن جميع أعمال الصيانة والترميم تتم باحترافية وفق جدول زمني محدد، مع الحفاظ على أعلى معايير الجودة والالتزام بالمواعيد المحددة.",
        ],
    },
};

const TextContent = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    return (
        <section
            style={{
                padding: "4rem 1rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                color: "black",
            }}
        >
            <div
                style={{
                    background: "linear-gradient(135deg, #f7f7f7, #eaeaea)",
                    padding: "3rem 1rem",
                    borderRadius: "12px",
                }}
            >
                <div className="auto-container">
                    <div className="sec-title text-center mb-4">
                        <h2
                            style={{
                                fontWeight: 700,
                                fontSize: "2rem",
                                color: "black",
                                textShadow:
                                    "1px 1px 3px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            {content.maintenanceTitle}
                        </h2>
                    </div>
                    <ul
                        style={{
                            maxWidth: "900px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                            fontSize: "1.1rem",
                            color: "black",
                            textAlign: "justify",
                            fontWeight: 500,
                        }}
                    >
                        {content.maintenanceDesc.map((item, i) => (
                            <li key={i} style={{ marginBottom: "12px" }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TextContent;
