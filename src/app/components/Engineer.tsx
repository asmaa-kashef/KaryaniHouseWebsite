'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const EngineerCardsSection = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const content = {
        en: {
            heading: "Meet Our Engineers",
            floatText: "Engineers",
            engineers: [
                {
                    img: '/images/resource/Eng1.webp',
                    name: 'Engineer 1',
                    title: 'Expertise & Vision',
                    description:
                        'Innovative thinking and precise planning for modern construction challenges.',
                },
                {
                    img: '/images/resource/Eng2.webp',
                    name: 'Engineer 2',
                    title: 'Smart Execution',
                    description:
                        'Efficient delivery with a focus on safety, quality, and long-term performance.',
                },
            ],
        },
        ar: {
            heading: "تعرف على مهندسينا",
            floatText: "المهندسون",
            engineers: [
                {
                    img: '/images/resource/Eng2.webp',
                    name: 'المهندس 1',
                    title: 'الخبرة والرؤية',
                    description:
                        'تفكير مبتكر وتخطيط دقيق لتحديات البناء الحديثة.',
                },
                {
                    img: '/images/resource/Eng1.webp',
                    name: 'المهندس 2',
                    title: 'تنفيذ ذكي',
                    description:
                        'تنفيذ فعال مع التركيز على السلامة والجودة والأداء طويل الأمد.',
                },
            ],
        },
    };

    const { heading, floatText, engineers } = content[currentLang];

    return (
        <section
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                backgroundColor: '#f3f3f3',
                padding: '60px 20px',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
                {/* Float Text */}
                <span
                    style={{
                        fontSize: '64px',
                        color: 'rgba(255,152,0,0.08)',
                        fontWeight: 'bold',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 0,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {floatText}
                </span>

                {/* Heading */}
                <h2
                    style={{
                        fontSize: '1.9rem',
                        marginBottom: '40px',
                        color: '#222',
                        fontWeight: '700',
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '10px',
                        zIndex: 1,
                        textShadow: '1px 1px 3px rgba(0,0,0,0.15)',
                    }}
                >
                    {heading}
                    <span
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '3px',
                            backgroundColor: 'rgb(255, 152, 0)',
                            borderRadius: '2px',
                        }}
                    ></span>
                </h2>

                {/* Cards */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '24px',
                        justifyContent: 'center',
                        marginTop: '40px',
                        zIndex: 2,
                        position: 'relative',
                    }}
                >
                    {engineers.map((eng, idx) => (
                        <div
                            key={idx}
                            style={{
                                flex: '1 1 280px',
                                maxWidth: '320px',
                                backgroundColor: '#fff',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                                textAlign: currentLang === "ar" ? "right" : "left",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
                            }}
                        >
                            <Image
                                src={eng.img}
                                alt={eng.name}
                                width={320}
                                height={180}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            <div style={{ padding: '18px' }}>
                                <h3
                                    style={{
                                        margin: '0 0 6px 0',
                                        fontSize: '1.15rem',
                                        color: '#111',
                                        fontWeight: '600',
                                    }}
                                >
                                    {eng.name}
                                </h3>
                                <h4
                                    style={{
                                        margin: '0 0 10px 0',
                                        fontSize: '0.95rem',
                                        color: '#e67e22',
                                        fontWeight: '500',
                                    }}
                                >
                                    {eng.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: '0.85rem',
                                        lineHeight: '1.5',
                                        color: '#555',
                                        margin: 0,
                                    }}
                                >
                                    {eng.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineerCardsSection;
