"use client";
import React from "react";
import { usePathname } from "next/navigation";

const translations = {
    en: {
        title: "Our Villa Construction Services",
        description: [
            "We provide a complete villa construction experience in Abu Dhabi, including:",
            "Luxury villa design and construction following the highest international quality standards, paying attention to every detail in rooms, outdoor spaces, and finishing, to ensure a home that reflects your unique taste and exceeds expectations.",
            "Use of advanced building materials and modern technologies ensuring durability and sustainability of the building over time, with the best insulation and finishing systems to guarantee comfort and safety throughout the year.",
            "Close supervision at every stage with a specialized engineering team, ensuring precise and professional execution with regular client updates on project progress.",
            "Custom designs according to client preferences, with innovative suggestions to beautify interior and exterior spaces according to your lifestyle and practical requirements.",
            "Successful past project examples demonstrating our ability to deliver world-class villas, making us the perfect choice for those seeking excellence and quality.",
        ],
    },
    ar: {
        title: "خدماتنا في بناء الفلل",
        description: [
            "نقدم لك تجربة متكاملة لبناء الفلل في أبوظبي، تشمل:",
            "تصميم وبناء فلل فاخرة وفق أعلى معايير الجودة العالمية، مع الاهتمام بكل التفاصيل الدقيقة في الغرف، المساحات الخارجية، والتشطيبات النهائية، لضمان منزل يعكس ذوقك الفريد ويفوق توقعاتك.",
            "استخدام مواد بناء متطورة وتقنيات حديثة تضمن متانة واستدامة المبنى على المدى الطويل، مع أفضل أنظمة العزل والتشطيب لضمان الراحة والأمان في كل فصل من السنة.",
            "متابعة دقيقة لكل مرحلة من البناء مع فريق هندسي متخصص، لضمان تنفيذ كل خطوة بدقة واحترافية، مع تقديم تقارير دورية للعميل حول سير المشروع.",
            "تصميم مخصص بحسب رغبات العميل، مع تقديم اقتراحات مبتكرة لتجميل المساحات الداخلية والخارجية بما يتوافق مع أسلوب حياتك ومتطلباتك العملية.",
            "أمثلة مشاريع سابقة ناجحة تثبت قدرتنا على تنفيذ فلل بمستوى عالمي، مما يجعلنا الخيار الأمثل لكل من يبحث عن التميز والجودة.",
        ],
    },
};

const VillaServices = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];
    

    return (
        <section
            style={{
                background: "linear-gradient(135deg, #f7f7f7, #eaeaea)",
                padding: "4rem 1rem",
                position: "relative",
                color: "#fff",
            }}
        >
            <div
                style={{

                    padding: "3rem 1rem",
                    borderRadius: "12px",
                }}
            >
                <div className="auto-container">
                    <div className="sec-title text-center mb-4">
                        <h2 style={{ fontWeight: 700, fontSize: "2rem", color: "black", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.15)" }}>
                            {content.title}
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
                        {content.description.map((item, i) => (
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

export default VillaServices;
