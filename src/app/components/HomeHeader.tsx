'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

// React-icons
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function HomeHeader() {
    const [langOpen, setLangOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const lang = pathname.startsWith("/ar") ? "ar" : "en";
    const isArabic = lang === "ar";

    const toggleLangDropdown = () => setLangOpen(!langOpen);

    const changeLanguage = (newLang: string) => {
        let newPath = pathname;

        if (newPath.startsWith("/ar")) newPath = newPath.slice(3);
        else if (newPath.startsWith("/en")) newPath = newPath.slice(3);

        if (newLang === "ar") newPath = "/ar" + (newPath || "");
        else if (newLang === "en") {
            newPath = newPath || "/";
            if (newPath !== "/") newPath = "/en" + newPath;
        }

        router.push(newPath);
        setLangOpen(false);
    };

    return (
        <header className="main-header header-style-two">
            {/* Header Top */}
            <div className="header-top">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="top-left">
                            <ul className="contact-list clearfix">
                                <li>
                                    <MdEmail className="inline-block mr-1" />
                                    <a href="mailto:info@karyani-house.com">info@karyani-house.com</a>
                                </li>
                                <li>
                                    <MdPhone className="inline-block mr-1" />
                                    <a href="tel:+9710506607159">+971-050-6607159</a>
                                </li>
                            </ul>
                        </div>

                        <div className="top-right">
                            <ul className="social-icon-four clearfix flex items-center gap-3">
                                <li>
                                    <a href="#"><FaWhatsapp /></a>
                                </li>
                                <li>
                                    <a href="#"><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href="#"><FaInstagram /></a>
                                </li>

                                {/* Language Dropdown */}
                                <li style={{ position: "relative" }}>
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
                                <Link href="/">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        width={160}
                                        height={160}
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>

                                <div
                                    className="collapse navbar-collapse clearfix"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navigation clearfix">
                                        <li>
                                            <Link href={isArabic ? "/ar" : "/"}>{isArabic ? "الرئيسية" : "Home"}</Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/about`}>{isArabic ? "من نحن" : "About"}</Link>
                                            <ul>
                                                <li>
                                                    <Link href={`/${lang}/about`}>{isArabic ? "من نحن" : "About Us"}</Link>
                                                </li>
                                                <li>
                                                    <Link href={`/${lang}/team`}>{isArabic ? "فريقنا" : "Our Team"}</Link>
                                                </li>
                                                <li>
                                                    <Link href={`/${lang}/coming-soon`}>{isArabic ? "قريباً" : "Coming Soon"}</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/Services`}>{isArabic ? "خدماتنا" : "Services"}</Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/projects`}>{isArabic ? "مشاريعنا" : "Projects"}</Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/VillaConstruction`}>{isArabic ? "المدونة" : "Blog"}</Link>
                                        </li>
                                        <li>
                                            <Link href={`/${lang}/contact`}>{isArabic ? "اتصل بنا" : "Contact"}</Link>
                                        </li>
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
