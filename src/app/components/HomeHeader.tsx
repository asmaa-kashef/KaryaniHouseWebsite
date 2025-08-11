// components/Header.tsx
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
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:info@karyani-house.com">+971-050-6607159</a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <ul className="social-icon-four clearfix">
                                <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
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
                                <a href="/">
                                    <img
                                        src="/images/logo.png"
                                        alt="Logo"
                                        title="Logo"
                                        style={{ height: '160px' }}
                                    />
                                </a>
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
                                        <li>
                                            <a href="/">Home</a>
                                        </li>

                                        <li>

                                            <a href="/about">About</a>
                                            <ul>
                                                <li><a href="/about">About Us</a></li>
                                                <li><a href="faq.html">FAQ's</a></li>
                                                <li><a href="team.html">Our Team</a></li>
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <a href="#">Services</a>
                                            <ul>
                                                <li><a href="services.html">All Services</a></li>
                                                <li><a href="service-detail.html">Commercial Design</a></li>
                                                <li><a href="service-detail.html">Landescape Design</a></li>
                                                <li><a href="service-detail.html">Interior Design</a></li>
                                                <li><a href="service-detail.html">Complete Interior</a></li>
                                                <li><a href="service-detail.html">House Interior</a></li>
                                                <li><a href="service-detail.html">Service Detail</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="/projects">Projects</a>
                                            <ul>
                                                <li><a href="projects.html">Projects</a></li>
                                                <li><a href="project-detail.html">Project Detail</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <Link href="/VillaConstruction">Blog</Link>
                                          
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                                <li><a href="blog-detail.html">Blog Detail 01</a></li>
                                                <li><a href="blog-detail-2.html">Blog Detail 02</a></li>
                                                <li><a href="error-page.html">Error Page</a></li>
                                            </ul>
                                        </li>

                                
                                        <li><Link href="/contact">Contact</Link></li>
                                      

                                  
                                    </ul>
                                </div>
                            </nav>
                            {/* Main Menu End */}

                            {/* Outer Box */}
                      
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header */}
            <div className="sticky-header">
                <div className="auto-container clearfix">
                    {/* Logo */}
                    <div className="logo pull-left">
                        <a href="index-2.html">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                title="Logo"
                                style={{ height: '160px' }}
                            />
                        </a>
                    </div>
                   
                    {/* Right Col */}
                    <div className="pull-right">
                        {/* Main Menu */}
                        <nav className="main-menu">
                            <div className="navbar-collapse show collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li>
                                        <a href="/">Home</a>
                                        
                                    </li>

                                    <li>
                                        <a href="/about">About</a>
                                        <ul>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="faq.html">FAQ's</a></li>
                                            <li><a href="team.html">Our Team</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown">
                                        <a href="#">Services</a>
                                        <ul>
                                            <li><a href="services.html">All Services</a></li>
                                            <li><a href="service-detail.html">Commercial Design</a></li>
                                            <li><a href="service-detail.html">Landescape Design</a></li>
                                            <li><a href="service-detail.html">Interior Design</a></li>
                                            <li><a href="service-detail.html">Complete Interior</a></li>
                                            <li><a href="service-detail.html">House Interior</a></li>
                                            <li><a href="service-detail.html">Service Detail</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="/projects">Projects</a>
                                      
                                    </li>

                                    <li>
                                        <Link href="/VillaConstruction">Blog</Link>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-classic.html">Blog Classic</a></li>
                                            <li><a href="blog-detail.html">Blog Detail 01</a></li>
                                            <li><a href="blog-detail-2.html">Blog Detail 02</a></li>
                                            <li><a href="error-page.html">Error Page</a></li>
                                        </ul>
                                    </li>

                                 

                                    <li><a href="/contact">Contact</a></li>

                                  
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
