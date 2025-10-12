// components/FaqAccordion.tsx

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    htmlContent: string;
}

export default function FaqAccordion({ htmlContent }: FaqAccordionProps) {
    const [faqs, setFaqs] = useState<FaqItem[]>([]);
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    useEffect(() => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = htmlContent;

        const faqItems = wrapper.querySelectorAll(".wp-block-uagb-faq-child");

        const extractedFaqs: FaqItem[] = [];

        faqItems.forEach((item) => {
            const question = item.querySelector(".uagb-question")?.textContent?.trim() || "";
            const answer = item.querySelector(".uagb-faq-content")?.innerHTML?.trim() || "";

            if (question && answer) {
                extractedFaqs.push({ question, answer });
            }
        });

        setFaqs(extractedFaqs);
    }, [htmlContent]);

    if (faqs.length === 0) return null;

    const labels = {
        ar: {
            heading: "❓ الأسئلة الشائعة",
            expand: "+",
        },
        en: {
            heading: "Frequently Asked Questions❓",
            expand: "+",
        },
    };

    const { heading, expand } = labels[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                margin: "40px auto",
                maxWidth: "700px",
                padding: "20px",
                textAlign: currentLang === "ar" ? "right" : "left",
            }}
        >
            <h2 style={{ fontFamily: "math", marginBottom: "20px",color:"black" }}>{heading}</h2>
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "15px 20px",
                        marginBottom: "15px",
                        backgroundColor: "#f9f9f9",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        const content = e.currentTarget.querySelector(".faq-answer");
                        if (content) {
                            content.classList.toggle("open");
                        }
                    }}
                >
                    <div
                        style={{
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ color: "black" }}>{faq.question}</span>
                        <span>{expand}</span>
                    </div>
                    <div
                        className="faq-answer"
                        style={{
                            marginTop: "10px",
                            display: "none",
                            color: "black",
                        }}
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                    <style jsx>{`
            .faq-answer.open {
              display: block !important;
            }
          `}</style>
                </div>
            ))}
        </section>
    );
}
