
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FooterRecentPosts from "./FooterRecentPosts";

const Footer = () => {
    return (
        <footer
            className="main-footer alternate"
            style={{ backgroundImage: 'url(/images/background/5.jpg)' }} // أضفت / في بداية الرابط
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
                                                <Link href="/" legacyBehavior>
                                                    <a>
                                                        <Image
                                                            src="/images/logo.png"
                                                            alt="Logo"
                                                            title="Logo"
                                                            width={160} // بدل ال height حدد width & height 
                                                            height={160}
                                                        />
                                                    </a>
                                                </Link>
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
                                                <li><Link href="/about" legacyBehavior><a>About</a></Link></li>
                                                <li><Link href="/services" legacyBehavior><a>Services</a></Link></li>
                                                <li><Link href="/projects" legacyBehavior><a>Project</a></Link></li>
                                                <li><Link href="/news" legacyBehavior><a>News</a></Link></li>
                                                <li><Link href="/contact" legacyBehavior><a>Contact Us</a></Link></li>
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
                                                            href={`/images/gallery/${num}.webp`}
                                                            className="lightbox-image"
                                                            title="Image Title Here"
                                                        >
                                                            <Image
                                                                src={`/images/gallery/${num}.webp`}
                                                                alt={`Gallery Image ${num}`}
                                                                width={100}  // حدد العرض والارتفاع المناسبين لك
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
