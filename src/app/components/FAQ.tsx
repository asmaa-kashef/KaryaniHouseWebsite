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
                        "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
                },
                {
                    question: "Do you give Contra and After sales service?",
                    answer:
                        "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
                },
                {
                    question: "Will you be able to give a quote, if given the floor plan?",
                    answer:
                        "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
                },
                {
                    question: "At what stage an interior designing work could be started?",
                    answer:
                        "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
                },
                {
                    question: "Do you charge for giving a Proposal?",
                    answer:
                        "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
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
                        "نمنح ضمان لمدة 5 سنوات ونتعهد بإصلاح أي خطأ ناتج عن عيوب في التنفيذ على نفقتنا. ومع ذلك، لا يشمل الضمان سوء الاستخدام أو الأشياء القابلة للكسر.",
                },
                {
                    question: "هل تقدمون ضمان وخدمة ما بعد البيع؟",
                    answer:
                        "نمنح ضمان لمدة 5 سنوات ونتعهد بإصلاح أي خطأ ناتج عن عيوب في التنفيذ على نفقتنا. ومع ذلك، لا يشمل الضمان سوء الاستخدام أو الأشياء القابلة للكسر.",
                },
                {
                    question: "هل يمكنكم إعطاء عرض سعر إذا تم تزويدكم بمخطط الأرضية؟",
                    answer:
                        "نمنح ضمان لمدة 5 سنوات ونتعهد بإصلاح أي خطأ ناتج عن عيوب في التنفيذ على نفقتنا. ومع ذلك، لا يشمل الضمان سوء الاستخدام أو الأشياء القابلة للكسر.",
                },
                {
                    question: "في أي مرحلة يمكن بدء أعمال التصميم الداخلي؟",
                    answer:
                        "نمنح ضمان لمدة 5 سنوات ونتعهد بإصلاح أي خطأ ناتج عن عيوب في التنفيذ على نفقتنا. ومع ذلك، لا يشمل الضمان سوء الاستخدام أو الأشياء القابلة للكسر.",
                },
                {
                    question: "هل تفرضون رسوماً مقابل تقديم المقترح؟",
                    answer:
                        "نمنح ضمان لمدة 5 سنوات ونتعهد بإصلاح أي خطأ ناتج عن عيوب في التنفيذ على نفقتنا. ومع ذلك، لا يشمل الضمان سوء الاستخدام أو الأشياء القابلة للكسر.",
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
        </section>
    );
}
