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
                                <Link href="/">
                                    <Image src="/images/logo.png" alt="Logo" width={150} height={80} />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer">
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
                                        <li><Link href="/">Home</Link></li>

                                        <li>
                                            <Link href="/about">About</Link>
                                            <ul>
                                                <li><Link href="/about">About Us</Link></li>
                                                <li><Link href="/team">Our Team</Link></li>
                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            {/* Dropdown title, keep <a> since it's not a real page */}
                                            <a href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
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

                                        <li>
                                            <Link href="/projects">Projects</Link>
                                            <ul>
                                                <li><Link href="/projects">Projects</Link></li>
                                                <li><Link href="/project-detail">Project Detail</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link href="/VillaConstruction">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
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
