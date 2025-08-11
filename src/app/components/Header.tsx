'use client';

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="main-header header-style-four">
            <div className="header-top">
                <div className="auto-container clearfix">
                    <div className="top-right">
                        <ul className="contact-info">
                            <li><span>PHONE :</span> (+971) 050-660-71593</li>
                            <li>
                                <span>EMAIL :</span>
                                <a href="mailto:info@karyani-house.com">info@karyani-house.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box clearfix">

                        {/* Logo Box */}
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <Image src="/images/logo.png" alt="Logo" width={150} height={80} />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer">
                            {/* Navigation */}
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
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
                                            {/* Dropdown title without real page, <a> normal here */}
                                            <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
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
                                        </li>

                                        <li>
                                            <Link href="/contact" legacyBehavior>
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            {/* Search Button */}
                            <div className="outer-box">
                                <div className="search-box-outer">
                                    <div className="dropdown">
                                        <ul className="dropdown-menu pull-right search-panel">
                                            <li className="panel-outer">
                                                <div className="form-container">
                                                    <form method="post" action="#">
                                                        <div className="form-group">
                                                            <input type="search" name="field-name" placeholder="Search Here" required />
                                                            <button type="submit" className="search-btn">
                                                                <span className="fa fa-search"></span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div> {/* end nav outer */}
                    </div>
                </div>
            </div>
        </header>
    );
}
