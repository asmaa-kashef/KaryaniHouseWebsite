"use client";
import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
    const [faqs, setFaqs] = useState([]);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const res = await fetch("https://blog.karyani-house.com/wp-json/wp/v2/posts?_embed");
                const posts = await res.json();

                let extractedFaqs = [];

                posts.forEach((post) => {
                    const html = post.content?.rendered || "";
                    const container = document.createElement("div");
                    container.innerHTML = html;

                    const faqItems = container.querySelectorAll(".uagb-faq-child");
                    faqItems.forEach((item) => {
                        const question = item.querySelector(".uagb-question")?.innerText || "";
                        const answer = item.querySelector(".uagb-faq-content")?.innerHTML || "";
                        if (question && answer) {
                            extractedFaqs.push({ question, answer });
                        }
                    });
                });

                setFaqs(extractedFaqs);
            } catch (err) {
                console.error("Error fetching FAQs:", err);
            }
        };

        fetchFAQs();
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#fffbea] py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">FAQs</h2>

                {faqs.length === 0 ? (
                    <p className="text-gray-500">Loading FAQs...</p>
                ) : (
                    faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 bg-white mb-3 rounded-sm shadow-sm overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <Minus size={18} className="text-gray-600" />
                                ) : (
                                    <Plus size={18} className="text-gray-600" />
                                )}
                            </button>

                            <div
                                className={`px-4 pb-4 text-gray-700 leading-relaxed transition-max-height duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
