'use client'

import React from 'react'
import FooterRecentPosts from "./FooterRecentPosts";
const Footer = () => {
    return (
        <footer
            className="main-footer alternate"
            style={{ backgroundImage: 'url(images/background/5.jpg)' }}
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
                                                <a href="index.html">
                                                    <img
                                                        src="/images/logo.png"
                                                        alt="Logo"
                                                        title="Logo"
                                                        style={{ height: '160px' }}
                                                    />
                                                </a>
                                                
                                              
                                            </figure>
                                        </div>
                                        <div className="widget-content">
                                            <div className="text">
                                                Karyani House and partners, in design and execution of modern spaces, bring clarity. Styles of modern design ensure uniqueness across every crafted project
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
                                        <h2 className="widget-title">Useful links</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="services.html">Services</a>
                                                </li>
                                                <li>
                                                    <a href="/projects">Project</a>
                                                </li>
                                                <li>
                                                    <a href="blog-classic.html">News</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact Us</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h2 className="widget-title">Recent Works</h2>
                                        <div className="widget-content">
                                            <div className="outer clearfix">
                                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                                    <figure className="image" key={num}>
                                                        <a
                                                            href={`images/gallery/${num}.webp`}
                                                            className="lightbox-image"
                                                            title="Image Title Here"
                                                        >
                                                            <img
                                                                src={`images/gallery/${num}.webp`}
                                                                alt=""
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
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright-text">
                            <a href="https://karyanihouse.github.io/Catalogue" target="_blank">
                               Karyani House
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
