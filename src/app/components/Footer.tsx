'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer alternate" style={{ backgroundImage: 'url(/images/background/5.jpg)' }}>
            <div className="auto-container">
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="row">
                        {/* Big Column */}
                        <div className="big-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                            <div className="row">
                                {/* Footer Column - About */}
                                <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="footer-logo">
                                            <figure>
                                                <Link href="/"><Image src="/images/logo.png" alt="Footer Logo" width={150} height={50} /></Link>
                                            </figure>
                                        </div>
                                        <div className="widget-content">
                                            <div className="text">
                                                Contra and layouts, in content of dummy text is nonsensical. Typefaces of dummy text is appearance of different general the content of dummy text is nonsensical.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Column - Recent Posts */}
                                <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget recent-posts">
                                        <h2 className="widget-title">Recent Posts</h2>
                                        <div className="widget-content">
                                            {[1, 2].map((post, index) => (
                                                <div className="post" key={index}>
                                                    <div className="thumb">
                                                        <Link href="/blog-detail">
                                                            <Image src={`/images/resource/post-thumb-${post}.jpg`} alt={`Post ${post}`} width={80} height={80} />
                                                        </Link>
                                                    </div>
                                                    <h4><Link href="/blog-detail">{post === 1 ? 'Triangle Concrete House on lake' : 'The Amazing Interior for the Hotel art'}</Link></h4>
                                                    <ul className="info">
                                                        <li>26 Aug</li>
                                                        <li>3 Comments</li>
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Big Column 2 */}
                        <div className="big-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                {/* Useful Links */}
                                <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h2 className="widget-title">Useful links</h2>
                                        <div className="widget-content">
                                            <ul className="list">
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/services">Services</Link></li>
                                                <li><Link href="/projects">Project</Link></li>
                                                <li><Link href="/blog-classic">News</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Works Gallery */}
                                <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h2 className="widget-title">Recent Works</h2>
                                        <div className="widget-content">
                                            <div className="outer clearfix">
                                                {[1, 2, 3, 4, 5, 6].map((img, index) => (
                                                    <figure className="image" key={index}>
                                                        <a href={`/images/gallery/${img}.jpg`} className="lightbox-image" title="Image Title Here">
                                                            <Image src={`/images/resource/work-thumb-${img}.jpg`} alt={`Work ${img}`} width={70} height={70} />
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
                                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
                            </ul>
                        </div>
                        <div className="copyright-text">
                            <a href="https://www.templateshub.net" target="_blank" rel="noopener noreferrer">Templates Hub</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
