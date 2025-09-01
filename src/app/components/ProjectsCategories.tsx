'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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

    const titleStyle: React.CSSProperties = {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#ff914d',
        display: 'block',
        marginBottom: '5px',
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
    };

    const innerBoxStyle: React.CSSProperties = {
        borderRadius: '12px',
        padding: '20px',
        background: 'white',
        boxShadow: '0 6px 15px rgba(0,0,0,0.25), 0 12px 25px rgba(0,0,0,0.15)',
        width: '300px',
        textAlign: 'left',
    };

    return (
        <section className="projects-section-two" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="auto-container">
                <div className="upper-box clearfix">
                    <div className="sec-title">
                        <span className="float-text">{content.subheading}</span>
                        <h2>{content.heading}</h2>
                    </div>
                    <div className="link-box">
                        <Link href={`/${currentLang}/projects`}>
                            {content.allProjectsLink} <i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    style={{ paddingBottom: '40px' }}
                >
                    {projects.map((project, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="project-block-two">
                                <div
                                    className="image-box"
                                    style={{ position: 'relative', borderRadius: '12px' }}
                                >
                                    <figure className="image">
                                        <div
                                            style={{
                                                position: 'relative',
                                                width: '100%',
                                                paddingTop: '56.25%',
                                                overflow: 'hidden',
                                                borderRadius: '12px',
                                                border: '3px solid #ff914d',
                                                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
                                            }}
                                        >
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
                                    </figure>

                                    {/* الكارت نصه على الفيديو ونصه خارج الفيديو */}
                                    <div
                                        className="inner-box"
                                        style={{
                                            ...innerBoxStyle,
                                            position: 'absolute',
                                            top: '50%',
                                            left: '0',
                                            transform: 'translate(-40%, -50%)',
                                        }}
                                    >
                                        <span style={titleStyle}>{project.title}</span>
                                        <h3 style={h3Style}>{project.name}</h3>
                                        <div style={textStyle}>{project.text}</div>
                                        <div style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                            <Link
                                                href={`/${currentLang}/projects`}
                                                style={{
                                                    padding: '10px 18px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    background: 'linear-gradient(145deg, #ff914d, #ff6f1f)',
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 5px 10px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                                                }}
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
                                                }}
                                            >
                                                {content.quoteLink}
                                            </a>
                                            <a
                                                href={project.video.replace('embed/', 'watch?v=')}
                                                target="_blank"
                                                style={{
                                                    padding: '10px 18px',
                                                    borderRadius: '6px',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    background: 'linear-gradient(145deg, #555, #222)',
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    boxShadow: '0 5px 10px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.15)',
                                                }}
                                            >
                                                {content.watchYoutube}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Responsive: الكارت تحت الفيديو على الموبايل */}
                                    <style jsx>{`
                                        @media (max-width: 768px) {
                                            .inner-box {
                                                position: static !important;
                                                transform: none !important;
                                                margin-top: 15px;
                                                width: 100% !important;
                                            }
                                        }
                                    `}</style>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
