
import React from "react";
import Image from "next/image";
import Header from "./components/HomeHeader";
import Footer from "./components/HomeFooter";
import ProjectsComponent from './components/ProjectsComponent';
import NewsSection from "./components/NewsSection";
import ProjectsSection from "./components/ProjectsSection";
import OfferForm from "./components/OfferForm";
export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Banner Section */}
                <section className="banner-section-two">
                    <div className="banner-carousel owl-carousel owl-theme">
                        {[
                            "/images/main-slider/construction.webp",
                            "/images/main-slider/VillaConstruction.webp",
                            "/images/main-slider/villa.webp"
                        ].map((bg, idx) => (
                            <div
                                key={idx}
                                className="slide-item"
                                style={{ backgroundImage: `url(${bg})` }}
                            >
                                <div className="auto-container">
                                    <div className="content-box">
                                        <span className="title">Our Specialization</span>
                                        <h2>Villa Construction <br />Structure Repair<br />Cladding</h2>
                                        <div className="video-link">
                                            <a
                                                href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                                                data-fancybox="gallery"
                                            >
                                                <i className="icon fa fa-play" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Specialize Section */}
                <section className="specialize-section">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="float-text">Specialization</span>
                            <h2>Our Specialization</h2>
                        </div>

                        <div className="services-carousel-two owl-carousel owl-theme">
                            {[
                                { img: "/images/resource/VillaConstruction.webp", title: "Villa Construction", link: "services.html" },
                                { img: "/images/resource/StructureRepair.webp", title: "Structure Repair", link: "services.html" },
                                { img: "/images/resource/cladding.webp", title: "Cladding", link: "Cladding" },
                                { img: "/images/resource/Alumnum.webp", title: "Alumnium And Glass", link: "services.html" },
                                { img: "/images/resource/Interiordesign.webp", title: "Interior Design", link: "services.html" },
                            ].map((service, idx) => (
                                <div key={idx} className="service-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image">
                                                <a href={service.link}>
                                                    <Image
                                                        src={service.img}
                                                        alt={service.title}
                                                        width={300}
                                                        height={300}
                                                        style={{ objectFit: "cover", display: "block" }}
                                                    />
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="caption-box">
                                            <h3><a href={service.link}>{service.title}</a></h3>
                                            <div className="link-box">
                                                <a href="service-detail.html">
                                                    Read More <i className="fa fa-angle-double-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="about-section" style={{ backgroundImage: "url(/images/background/1.jpg)" }}>
                    <div className="auto-container">
                        <div className="row no-gutters">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="title-box wow fadeInLeft" data-wow-delay="1200ms">
                                        <h2>ABOUT <br /> US</h2>
                                    </div>
                                    <div className="image-box">
                                        <figure className="alphabet-img wow fadeInRight">
                                            <Image
                                                src="/images/resource/alphabet-image.png"
                                                alt=""
                                                width={800}
                                                height={800}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </figure>
                                        <figure className="image wow fadeInRight" data-wow-delay="600ms">
                                            <Image
                                                src="/images/resource/image-1.webp"
                                                alt=""
                                                width={350}
                                                height={100}
                                                style={{ objectFit: "cover" }}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="content-box">
                                        <div className="title">
                                            <h2>Any Project <br />For Any Scale</h2>
                                        </div>
                                        <div className="text">
                                            Karyani House has many years of experience and specializes in designing, building, renovating, and maintaining villas, residential buildings, and commercial spaces. We provide expert services in structural repair, cladding, aluminum and glass works, interior finishing, and custom construction solutions across Abu Dhabi and the UAE.
                                        </div>
                                        <div className="link-box">
                                            <a href="about.html" className="theme-btn btn-style-one">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fun Fact and Features */}
                <section className="fun-fact-and-features" style={{ backgroundImage: "url(/images/background/3.jpg)" }}>
                    <div className="outer-box">
                        <div className="auto-container">
                            <div className="fact-counter">
                                <div className="row">
                                    {[
                                        { stop: 14, title: "Years of Experience" },
                                        { stop: 237, title: "Project Taken" },
                                        { stop: 237, title: "Twitter Follower" },
                                        { stop: 12, title: "Awards won" },
                                    ].map((item, idx) => (
                                        <div key={idx} className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay={`${idx * 400}ms`}>
                                            <div className="count-box">
                                                <div className="count">
                                                    <span className="count-text" data-speed="5000" data-stop={item.stop}>0</span>
                                                </div>
                                                <h4 className="counter-title">{item.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="features">
                                <div className="row">
                                    {[
                                        { icon: "flaticon-decorating", title: "Perfect Design", text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart." },
                                        { icon: "flaticon-plan", title: "Carefully Planned", text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart." },
                                        { icon: "flaticon-sketch-3", title: "Smartly Execute", text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart." },
                                    ].map((feature, idx) => (
                                        <div key={idx} className="feature-block col-lg-4 col-md-6 col-sm-12">
                                            <div className="inner-box">
                                                <div className="icon-box">
                                                    <span className={`icon ${feature.icon}`}></span>
                                                </div>
                                                <h3><a href="service-detail.html">{feature.title}</a></h3>
                                                <div className="text">{feature.text}</div>
                                                <div className="link-box"><a href="service-detail.html">Read More</a></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section Two */}
                <ProjectsComponent />

                {/* Offer Section */}

                <OfferForm />
                {/* Projects Section */}
                <ProjectsSection />

                {/* Clients Section */}
                <section className="clients-section style-two" style={{ backgroundImage: "url(/images/background/7.jpg)" }}>
                    <div className="auto-container">
                        <div className="sponsors-outer">
                            <ul className="sponsors-carousel owl-carousel owl-theme">
                                {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
                                    <li key={idx} className="slide-item">
                                        <figure className="image-box">
                                            <a href="#">
                                                <Image
                                                    src={`/images/clients/${num}.webp`}
                                                    alt={`Client ${num}`}
                                                    width={150}
                                                    height={90}
                                                    style={{ objectFit: "contain", display: "block", margin: "0 auto" }}
                                                />
                                            </a>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <NewsSection />
            </main>
            <Footer />
        </>
    );
}