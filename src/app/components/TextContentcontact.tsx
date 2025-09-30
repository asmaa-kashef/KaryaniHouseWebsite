"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const translations = {
    en: {
        whyChoose: "Why Choose Karyani House?",
        whyPoints: [
            "We are a leading construction company in Abu Dhabi with a proven record of successful projects.",
            "Client first: precise follow-up at each stage with continuous updates.",
            "Specialized engineering team combining expertise and precision.",
            "Integrated solutions from design to execution and finishing.",
            "On-time delivery with reliable and fast service.",
            "Use of the latest technologies for accurate and efficient results.",
        ],
        readMore: `Contact us and start your project now.  
If you are looking for the best construction company in Abu Dhabi to build your villa or renovate your building, don’t hesitate to reach out.  
Click “Request Service Now” or call us directly to get a free consultation and a detailed quotation.  

With Karyani House, your project is in safe hands. We guarantee that every detail of construction and maintenance is handled with the highest quality and professionalism.`,
        contact: "Contact us now to start your project with Karyani House – your trusted partner in construction, maintenance, and renovation.",
    },
    ar: {
        whyChoose: "لماذا تختار كرياني هاوس؟",
        whyPoints: [
            "نحن شركة رائدة في المقاولات في أبوظبي، مع سجل طويل من المشاريع الناجحة، ما يجعلنا الخيار الأول لكل من يبحث عن الجودة والاحترافية.",
            "العميل أولًا: نضمن متابعة دقيقة لكل مرحلة، مع تواصل مستمر لإطلاعك على تقدم العمل.",
            "فريق هندسي متخصص يجمع بين المهندسين والفنيين ذوي الخبرة لضمان أفضل النتائج لكل مشروع.",
            "حلول متكاملة من التصميم إلى التنفيذ والتشطيب: لتستمتع بمنزل أحلامك أو مبنى عملك بأعلى جودة ممكنة.",
            "التزام بالمواعيد وخدمة موثوقة وسريعة: لتتمكن من بدء استخدام منشأتك في الوقت المحدد، دون أي تأخير أو إضاعة للوقت.",
            "استخدام أحدث التقنيات لتحقيق أفضل النتائج.",
        ],
        readMore: `اتصل بنا وابدأ مشروعك الآن.  
إذا كنت تبحث عن أفضل شركة مقاولات في أبوظبي لتبني فيلتك أو تجدد مبناك، لا تتردد في التواصل معنا.  
اضغط على زر “اطلب الخدمة الآن” أو اتصل بنا مباشرة للحصول على استشارة مجانية وعرض سعر مفصل.  

مع كرياني هاوس، مشروعك في أيدٍ أمينة، ونضمن أن كل تفاصيل البناء والصيانة تتم بأعلى جودة واحترافية.  
نحن شركاؤك لتحقيق مشاريعك بأفضل شكل ممكن، مع ضمان الراحة والأمان والجودة في كل خطوة، لتستمتع بمنزل أحلامك أو مبنى عملك بأفضل شكل ممكن.`,
        contact: "اتصل بنا الآن وابدأ مشروعك مع كرياني هاوس – شريكك الموثوق في البناء والصيانة والترميم.",
    },
};

const TextContent = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];
    const [showMore, setShowMore] = useState(false);

    return (
        <section
            style={{
                padding: "4rem 1rem",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                color: "#fff",
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
                                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            {content.whyChoose}
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
                        {content.whyPoints.map((item, i) => (
                            <li key={i} style={{ marginBottom: "12px" }}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Read More Section */}
                    {showMore && (
                        <div
                            style={{
                                maxWidth: "900px",
                                margin: "2rem auto 0",
                                fontSize: "1.05rem",
                                lineHeight: 1.8,
                                color: "black",
                                whiteSpace: "pre-line",
                            }}
                        >
                            {content.readMore}
                        </div>
                    )}

                    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            style={{
                                display: "inline-block",
                                padding: "12px 30px",
                                fontSize: "1rem",
                                fontWeight: 600,
                                border: "none",
                                borderRadius: "25px",
                                cursor: "pointer",
                                marginRight: "15px",
                                background:
                                    "linear-gradient(90deg, #36d1dc, #5b86e5)",
                                color: "#fff",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {showMore
                                ? currentLang === "ar"
                                    ? "إخفاء"
                                    : "Show Less"
                                : currentLang === "ar"
                                    ? "اقرأ المزيد"
                                    : "Read More"}
                        </button>

                        <a
                            href="tel:+971506607159"
                            style={{
                                display: "inline-block",
                                padding: "12px 35px",
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "#fff",
                                textDecoration: "none",
                                borderRadius: "30px",
                                background:
                                    "linear-gradient(90deg, #ff914d, #ff5e62)",
                                boxShadow:
                                    "0 5px 15px rgba(255, 145, 77, 0.5)",
                                transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0 8px 20px rgba(255,94,98,0.6)")
                            }
                            onMouseOut={(e) =>
                            (e.currentTarget.style.boxShadow =
                                "0 5px 15px rgba(255,145,77,0.5)")
                            }
                        >
                            {currentLang === "ar"
                                ? "اتصل بنا الآن"
                                : "Contact Us Now"}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextContent;
