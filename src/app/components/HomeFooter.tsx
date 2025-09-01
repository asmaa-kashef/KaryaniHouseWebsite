'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterRecentPosts from "./FooterRecentPosts";
import { usePathname } from 'next/navigation';

// All static content for both languages in a single object
const translations = {
    en: {
        aboutText: "Karyani House and partners, in design and execution of modern spaces, bring clarity. Styles of modern design ensure uniqueness across every crafted project",
        usefulLinksTitle: "Useful links",
        links: {
            about: "About",
            services: "Services",
            projects: "Projects",
            news: "News",
            contact: "Contact Us"
        },
        recentWorksTitle: "Recent Works",
        copyright: "Karyani House"
    },
    ar: {
        aboutText: "تتميز كارياني هاوس وشركاؤها بالوضوح في تصميم وتنفيذ المساحات الحديثة. تضمن أنماط التصميم الحديثة التفرد في كل مشروع يتم تصميمه وتنفيذه.",
        usefulLinksTitle: "روابط مفيدة",
        links: {
            about: "عنا",
            services: "الخدمات",
            projects: "المشاريع",
            news: "الأخبار",
            contact: "اتصل بنا"
        },
        recentWorksTitle: "أحدث الأعمال",
        copyright: "كارياني هاوس"
    }
};

const Footer = () => {
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';
    const content = translations[currentLang];

    return (
        <footer
            className="main-footer alternate"
            style={{ backgroundImage: 'url(/images/background/5.jpg)' }}
        >
            <div className="auto-container">
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="row">
                        {/* Big Column */}
                        <div className="big-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                {/* Footer Column */}
                                <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="footer-logo">
                                            <figure>
                                                <Link href={`/${currentLang}`}>
                                                    <Image
                                                        src="/images/logo.png"
                                                        alt="Logo"
                                                        title="Logo"
                                                        width={160}
                                                        height={160}
                                                    />
                                                </Link>
                                            </figure>
                                        </div>
                                        <div className="widget-content">
                                            <div className="text">
                                                {content.aboutText}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Recent Posts */}
                                <FooterRecentPosts />
                            </div>
                        </div>

                        {/* Big Column */}
                        <div className="big-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2 className="widget-title">{content.usefulLinksTitle}</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link href={`/${currentLang}/about`}>{content.links.about}</Link></li>
                                                <li><Link href={`/${currentLang}/services`}>{content.links.services}</Link></li>
                                                <li><Link href={`/${currentLang}/projects`}>{content.links.projects}</Link></li>
                                                <li><Link href={`/${currentLang}/news`}>{content.links.news}</Link></li>
                                                <li><Link href={`/${currentLang}/contact`}>{content.links.contact}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h2 className="widget-title">{content.recentWorksTitle}</h2>
                                        <div className="widget-content">
                                            <div className="outer clearfix">
                                                {[1, 2, 3, 11, 12, 13].map((num) => (
                                                    <figure className="image" key={num}>
                                                        <a
                                                            href={`/images/gallery/${num}.webp`}
                                                            className="lightbox-image"
                                                            title="Image Title Here"
                                                        >
                                                            <Image
                                                                src={`/images/gallery/${num}.webp`}
                                                                alt={`Gallery Image ${num}`}
                                                                width={100}
                                                                height={100}
                                                            />
                                                        </a>
                                                    </figure>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="social-links">
                            <ul className="social-icon-two">
                                <li><a href="#" aria-label="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" aria-label="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" aria-label="Instagram"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" aria-label="Whatsapp"><i className="fa fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                        <div className="copyright-text">
                            <a
                                href="https://karyanihouse.github.io/Catalogue"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content.copyright}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;