'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="main-header header-style-two">
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
                                <li>
                                    <a href="https://wa.me/971506607159" aria-label="Whatsapp" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com/yourpage" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/yourpage" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/yourpage" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/yourpage" aria-label="Google Plus" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
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
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        title="Logo"
                                        width={160}
                                        height={160}
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    {/* Toggle Button */}
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

                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><Link href="/">Home</Link></li>
                                        <li>
                                            <Link href="/about">About</Link>
                                            <ul>
                                                <li><Link href="/about">About Us</Link></li>
                                                <li><Link href="/faq">FAQ&apos;s</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                            </ul>
                                        </li>
                                       
                                        <li><Link href="/Services">Services</Link></li>
                                        <li><Link href="/projects">Projects</Link></li>
                                        <li>
                                            <Link href="/VillaConstruction">Blog</Link>
                                            <ul>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog-classic">Blog Classic</Link></li>
                                                <li><Link href="/blog-detail">Blog Detail 01</Link></li>
                                                <li><Link href="/blog-detail-2">Blog Detail 02</Link></li>
                                                <li><Link href="/error-page">Error Page</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                            {/* Main Menu End */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header */}
            <div className="sticky-header">
                <div className="auto-container clearfix">
                    <div className="logo pull-left">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Logo"
                                title="Logo"
                                width={160}
                                height={160}
                            />
                        </Link>
                    </div>

                    <div className="pull-right">
                        <nav className="main-menu">
                            <div className="navbar-collapse show collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li><Link href="/">Home</Link></li>
                                    <li>
                                        <Link href="/about">About</Link>
                                        <ul>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/faq">FAQ&apos;s</Link></li>
                                            <li><Link href="/team">Our Team</Link></li>
                                            <li><Link href="/coming-soon">Coming Soon</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <span role="button" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle" style={{ cursor: "pointer" }}>
                                            Services
                                        </span>
                                        <ul>
                                            <li><Link href="/services">All Services</Link></li>
                                            <li><Link href="/service-detail">Commercial Design</Link></li>
                                            <li><Link href="/service-detail">Landescape Design</Link></li>
                                            <li><Link href="/service-detail">Interior Design</Link></li>
                                            <li><Link href="/service-detail">Complete Interior</Link></li>
                                            <li><Link href="/service-detail">House Interior</Link></li>
                                            <li><Link href="/service-detail">Service Detail</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/projects">Projects</Link></li>
                                    <li><Link href="/VillaConstruction">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
