"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Project {
    video: string;
    name: string;
    title: string;
    text: string;
}

const componentContent = {
    en: {
        heading: 'Our Best Work',
        subheading: 'Project',
        allProjectsLink: 'All Projects',
        viewProjectLink: 'View Project',
        quoteLink: 'Get a Quote',
        watchYoutube: 'Watch on YouTube',
    },
    ar: {
        heading: 'أفضل أعمالنا',
        subheading: 'المشاريع',
        allProjectsLink: 'جميع المشاريع',
        viewProjectLink: 'عرض المشروع',
        quoteLink: 'اطلب عرض سعر',
        watchYoutube: 'شاهد على يوتيوب',
    },
};

export default function ProjectsComponent() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';
    const content = componentContent[currentLang];
    const [activeIndex, setActiveIndex] = useState(0);

    const projects: Project[] = [
        {
            video: 'https://www.youtube.com/embed/00_cHMGz5aE',
            name: currentLang === 'ar' ? 'بناء فيلا' : 'Villa Construction',
            title: currentLang === 'ar' ? 'إنشاء' : 'Construction',
            text:
                currentLang === 'ar'
                    ? 'مشروع بناء فيلا بتصميم حديث وعالي الجودة'
                    : 'Luxury villa construction project with modern design',
        },
        {
            video: 'https://www.youtube.com/embed/Y6ciIuGM06c',
            name: currentLang === 'ar' ? 'ترميم الهياكل' : 'Structure Repair',
            title: currentLang === 'ar' ? 'ترميم' : 'Repair',
            text:
                currentLang === 'ar'
                    ? 'مشروع ترميم وإصلاح الهياكل للمباني والفيلات'
                    : 'Structural repair and renovation of villas',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 4000); // Autoplay every 4 seconds
        return () => clearInterval(interval);
    }, [projects.length]);

    const titleStyle: React.CSSProperties = {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#ff914d',
        display: 'block',
        marginBottom: '8px',
    };

    const h3Style: React.CSSProperties = {
        fontSize: '20px',
        margin: '5px 0',
        color: '#222',
    };

    const textStyle: React.CSSProperties = {
        marginTop: '10px',
        fontSize: '14px',
        color: '#555',
        lineHeight: 1.5,
    };

    return (
        <section dir={currentLang === 'ar' ? 'rtl' : 'ltr'} style={{ padding: '80px 0', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
                    <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                        <span style={{ fontSize: '64px', color: 'rgba(0,0,0,0.05)', fontWeight: 'bold', position: 'relative', zIndex: 0, whiteSpace: 'nowrap', display: 'block' }}>{content.subheading}</span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#222', position: 'relative', zIndex: 1, marginTop: '-40px' }}>{content.heading}</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <Link
                            href={`/${currentLang}/projects`}
                            style={{
                                padding: '10px 18px',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: 600,
                                background: '#ff914d',
                                color: '#fff',
                                textDecoration: 'none',
                                boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
                                transition: 'transform 0.3s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {content.allProjectsLink}
                            <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>→</span>
                        </Link>
                    </div>
                </div>

                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '40px',
                                transition: 'opacity 0.5s ease-in-out',
                                opacity: idx === activeIndex ? 1 : 0,
                                position: idx === activeIndex ? 'relative' : 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                            }}
                        >
                            <div style={{ flex: '1 1 50%', position: 'relative', paddingTop: '56.25%', maxWidth: '800px', width: '100%', borderRadius: '12px', overflow: 'hidden', border: '3px solid #ff914d', boxShadow: '0 6px 15px rgba(0,0,0,0.2)' }}>
                                <iframe
                                    src={project.video}
                                    title={project.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>

                            <div style={{ flex: '1 1 50%', textAlign: 'center' }}>
                                <span style={titleStyle}>{project.title}</span>
                                <h3 style={h3Style}>{project.name}</h3>
                                <div style={textStyle}>{project.text}</div>
                                <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <Link
                                        href={`/${currentLang}/projects`}
                                        style={{
                                            padding: '10px 18px',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            background: '#ff914d',
                                            color: '#fff',
                                            textDecoration: 'none',
                                            boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        {content.viewProjectLink}
                                    </Link>
                                    <a
                                        href="#offer-form"
                                        style={{
                                            padding: '10px 18px',
                                            borderRadius: '6px',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                            border: '2px solid #ff914d',
                                            color: '#ff914d',
                                            background: 'white',
                                            textDecoration: 'none',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        {content.quoteLink}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: idx === activeIndex ? '#ff914d' : '#ccc',
                                    margin: '0 5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
