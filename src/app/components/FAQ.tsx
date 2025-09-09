"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function FAQSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const content = {
        en: {
            heading: "Frequently Asked Questions",
            floatText: "FAQ",
            faqs: [
                {
                    question: "Do you do the design and the execution yourselves?",
                    answer:
                        "Yes, our in-house team handles both design and execution to ensure quality and consistency across all projects.",
                },
                {
                    question: "Do you provide a warranty and after-sales service?",
                    answer:
                        "We provide a 5-year warranty on workmanship and offer comprehensive after-sales support for any issues that arise.",
                },
                {
                    question: "Can you provide a quote based on a floor plan?",
                    answer:
                        "Absolutely! We can analyze your floor plan and provide a detailed quote tailored to your project requirements.",
                },
                {
                    question: "At what stage should interior design work begin?",
                    answer:
                        "Interior design work can start once the main structure is completed, allowing our designers to plan layouts, lighting, and finishes effectively.",
                },
                {
                    question: "Do you charge for providing a proposal?",
                    answer:
                        "No, our initial proposal and consultation are free of charge to help clients make informed decisions.",
                },
            ],
        },
        ar: {
            heading: "الأسئلة الشائعة",
            floatText: "الأسئلة",
            faqs: [
                {
                    question: "هل تقومون بالتصميم والتنفيذ بأنفسكم؟",
                    answer:
                        "نعم، يقوم فريقنا الداخلي بالتصميم والتنفيذ لضمان الجودة والتناسق في جميع المشاريع.",
                },
                {
                    question: "هل تقدمون ضمان وخدمة ما بعد البيع؟",
                    answer:
                        "نمنح ضماناً لمدة 5 سنوات على جودة التنفيذ ونقدم دعم شامل بعد البيع لأي مشكلات تظهر.",
                },
                {
                    question: "هل يمكنكم تقديم عرض سعر استنادًا إلى مخطط الأرضية؟",
                    answer:
                        "بالطبع! يمكننا تحليل مخطط الأرضية الخاص بك وتقديم عرض سعر مفصل يتناسب مع متطلبات مشروعك.",
                },
                {
                    question: "في أي مرحلة يمكن بدء أعمال التصميم الداخلي؟",
                    answer:
                        "يمكن بدء أعمال التصميم الداخلي بعد اكتمال الهيكل الرئيسي، مما يتيح لمصممينا التخطيط للديكور والإضاءة والتشطيبات بشكل فعال.",
                },
                {
                    question: "هل تفرضون رسوماً مقابل تقديم المقترح؟",
                    answer:
                        "لا، اقتراحنا الأولي والاستشارة مجانية لمساعدة العملاء على اتخاذ قرارات مستنيرة.",
                },
            ],
        },
    };

    const { heading, floatText, faqs } = content[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: "#f0f0f0",
                padding: "60px 20px",
                textAlign: "center",
            }}
        >
            <div className="auto-container">
                {/* Title */}
                <div style={{ marginBottom: "40px", position: "relative" }}>
                    <span
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

                {/* FAQ Items */}
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            style={{
                                backgroundColor: "#545454",
                                borderRadius: "12px",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                                marginBottom: "20px",
                                padding: "20px",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                color: "#fff",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    marginBottom: "10px",
                                }}
                            >
                                {item.question}
                            </h3>
                            <div
                                style={{
                                    maxHeight: activeIndex === index ? "500px" : "0px",
                                    overflow: "hidden",
                                    opacity: activeIndex === index ? 1 : 0,
                                    transition: "all 0.4s ease",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "15px",
                                        lineHeight: "1.6",
                                        marginTop: "10px",
                                        color: "#000",
                                    }}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />
        </section>
    );
}
