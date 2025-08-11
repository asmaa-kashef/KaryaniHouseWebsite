import React from "react";
import Link from "next/link";

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
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <img
                                            src="/images/logo.png"
                                            alt="Logo"
                                            title="Logo"
                                            style={{ height: "160px" }}
                                        />
                                    </a>
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

                                <div
                                    className="collapse navbar-collapse clearfix"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navigation clearfix">
                                        <li>
                                            <Link href="/" legacyBehavior>
                                                <a>Home</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/about" legacyBehavior>
                                                <a>About</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/about" legacyBehavior>
                                                        <a>About Us</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq" legacyBehavior>
                                                        <a>FAQ's</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team" legacyBehavior>
                                                        <a>Our Team</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/coming-soon" legacyBehavior>
                                                        <a>Coming Soon</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/about" legacyBehavior>
                                                <a>Services</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/services" legacyBehavior>
                                                        <a>All Services</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>Commercial Design</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>Landescape Design</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>Interior Design</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>Complete Interior</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>House Interior</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/service-detail" legacyBehavior>
                                                        <a>Service Detail</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/projects" legacyBehavior>
                                                <a>Projects</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/projects" legacyBehavior>
                                                        <a>Projects</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/project-detail" legacyBehavior>
                                                        <a>Project Detail</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/VillaConstruction" legacyBehavior>
                                                <a>Blog</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/blog" legacyBehavior>
                                                        <a>Blog</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-classic" legacyBehavior>
                                                        <a>Blog Classic</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-detail" legacyBehavior>
                                                        <a>Blog Detail 01</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-detail-2" legacyBehavior>
                                                        <a>Blog Detail 02</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/error-page" legacyBehavior>
                                                        <a>Error Page</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/contact" legacyBehavior>
                                                <a>Contact</a>
                                            </Link>
                                        </li>
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
                    {/* Logo */}
                    <div className="logo pull-left">
                        <Link href="/" legacyBehavior>
                            <a>
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    title="Logo"
                                    style={{ height: "160px" }}
                                />
                            </a>
                        </Link>
                    </div>

                    {/* Right Col */}
                    <div className="pull-right">
                        {/* Main Menu */}
                        <nav className="main-menu">
                            <div className="navbar-collapse show collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a>Home</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/about" legacyBehavior>
                                            <a>About</a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link href="/about" legacyBehavior>
                                                    <a>About Us</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq" legacyBehavior>
                                                    <a>FAQ's</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/team" legacyBehavior>
                                                    <a>Our Team</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/coming-soon" legacyBehavior>
                                                    <a>Coming Soon</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        <span
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            className="dropdown-toggle"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Services
                                        </span>
                                        <ul>
                                            <li>
                                                <Link href="/services" legacyBehavior>
                                                    <a>All Services</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>Commercial Design</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>Landescape Design</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>Interior Design</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>Complete Interior</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>House Interior</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/service-detail" legacyBehavior>
                                                    <a>Service Detail</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="/projects" legacyBehavior>
                                            <a>Projects</a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/VillaConstruction" legacyBehavior>
                                            <a>Blog</a>
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link href="/blog" legacyBehavior>
                                                    <a>Blog</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-classic" legacyBehavior>
                                                    <a>Blog Classic</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-detail" legacyBehavior>
                                                    <a>Blog Detail 01</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-detail-2" legacyBehavior>
                                                    <a>Blog Detail 02</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/error-page" legacyBehavior>
                                                    <a>Error Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="/contact" legacyBehavior>
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {/* Main Menu End */}
                    </div>
                </div>
            </div>
        </header>
    );
}
