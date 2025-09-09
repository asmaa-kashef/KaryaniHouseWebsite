'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function HomeHeader() {
    const [langOpen, setLangOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.startsWith("/ar") ? "ar" : "en";
    const isArabic = lang === "ar";

    const toggleLangDropdown = () => setLangOpen(!langOpen);

    // تغيير اللغة مع الحفاظ على query params
    const changeLanguage = (newLang: string) => {
        const segments = pathname.split("/").filter(Boolean);

        if (segments[0] === "ar" || segments[0] === "en") {
            segments[0] = newLang;
        } else {
            if (newLang !== "en") segments.unshift(newLang);
        }

        const newPath = "/" + segments.join("/");
        const searchParams = new URLSearchParams(window.location.search).toString();
        const finalPath = searchParams ? `${newPath}?${searchParams}` : newPath;

        // إذا الهوم → full reload
        if (finalPath === "/" || finalPath === "/ar") {
            window.location.href = finalPath;
        } else {
            router.push(finalPath);
        }

        setLangOpen(false);
    };

    // التنقل بين الروابط
    const navigateTo = (url: string) => {
        if (url === "/" || url === "/ar") {
            window.location.href = url;
        } else {
            router.push(url);
        }
    };

    return (
        <header className={`main-header header-style-two ${isArabic ? 'rtl' : ''}`}>
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="top-left">
                            <ul className="contact-list clearfix">
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:info@karyani-house.com">info@karyani-house.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <a href="tel:+9710506607159">+971-050-6607159</a>
                                </li>
                            </ul>
                        </div>

                        <div className="top-right">
                            <ul className="social-icon-four clearfix">
                                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>

                                {/* Language Dropdown */}
                                <li style={{ position: "relative", display: "inline-block", marginLeft: "15px" }}>
                                    <button
                                        onClick={toggleLangDropdown}
                                        style={{
                                            backgroundColor: "#545454",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            padding: "6px 12px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {isArabic ? "عربي ▼" : "English ▼"}
                                    </button>
                                    <ul
                                        style={{
                                            position: "absolute",
                                            top: "110%",
                                            right: 0,
                                            backgroundColor: "#fff",
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                            minWidth: "100px",
                                            borderRadius: "4px",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                                            zIndex: 1000,
                                            transition: "all 0.3s ease",
                                            opacity: langOpen ? 1 : 0,
                                            visibility: langOpen ? "visible" : "hidden",
                                            transform: langOpen ? "translateY(0)" : "translateY(-10px)",
                                        }}
                                    >
                                        {isArabic ? (
                                            <li
                                                style={{ padding: "8px 12px", cursor: "pointer", color: "#333" }}
                                                onClick={() => changeLanguage("en")}
                                            >
                                                English
                                            </li>
                                        ) : (
                                            <li
                                                style={{ padding: "8px 12px", cursor: "pointer", color: "#333" }}
                                                onClick={() => changeLanguage("ar")}
                                            >
                                                عربي
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header Lower */}
            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box clearfix">
                        <div className="logo-box pull-left">
                            <div className="logo">
                                <Link href="/" onClick={(e) => { e.preventDefault(); navigateTo(isArabic ? "/ar" : "/"); }}>
                                    <Image src="/images/logo.png" alt="Logo" width={160} height={160} />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li>
                                            <a onClick={() => navigateTo(isArabic ? "/ar" : "/")}>{isArabic ? "الرئيسية" : "Home"}</a>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/about`}>{isArabic ? "من نحن" : "About"}</Link>
                                            <ul>
                                                <li><Link href={`/${lang}/about`}>{isArabic ? "من نحن" : "About Us"}</Link></li>
                                                <li><Link href={`/${lang}/team`}>{isArabic ? "فريقنا" : "Our Team"}</Link></li>
                                                <li><Link href={`/${lang}/coming-soon`}>{isArabic ? "قريباً" : "Coming Soon"}</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href={`/${lang}/Services`}>{isArabic ? "خدماتنا" : "Services"}</Link></li>
                                        <li><Link href={`/${lang}/projects`}>{isArabic ? "مشاريعنا" : "Projects"}</Link></li>
                                        <li><Link href={`/${lang}/VillaConstruction`}>{isArabic ? "المدونة" : "Blog"}</Link></li>
                                        <li><Link href={`/${lang}/contact`}>{isArabic ? "اتصل بنا" : "Contact"}</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
