"use client";

import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/HomeHeader";
import Footer from "../components/HomeFooter";
import ClientsAndVideoSection from "../components/ClientsAndVideoSection";

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="slick-prev custom-arrow" onClick={onClick}>
        ‹
    </div>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="slick-next custom-arrow" onClick={onClick}>
        ›
    </div>
);

export default function AboutPage() {
    const testimonialData = [
        {
            name: "Elena Gomes",
            date: "July 28 - 2018",
            image: "/images/resource/thumb-2.jpg",
            text:
                "I got an excellent design for my future home, from cooperation I was very pleased, everything was done at the highest level. Boldly I recommend to all this company.",
        },
        {
            name: "Aliza Norka",
            date: "July 28 - 2018",
            image: "/images/resource/thumb-3.jpg",
            text:
                "I got an excellent design for my future home, from cooperation I was very pleased, everything was done at the highest level. Boldly I recommend to all this company.",
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
    };

    const processSteps = [
        {
            title: "Concept",
            desc:
                "We begin by understanding your vision and space, translating ideas into a practical project scope.",
        },
        {
            title: "Planning",
            desc:
                "We prepare detailed schedules, budgets, and permits to ensure your construction starts on solid ground.",
        },
        {
            title: "Design",
            desc:
                "Our architects develop creative, efficient designs with full compliance to structural and aesthetic standards.",
        },
        {
            title: "Execution",
            desc:
                "Our experienced team delivers construction with high-quality materials, safety protocols, and skilled craftsmanship throughout.",
        },
    ];

    const faqData = [
        {
            question: "Do you do the design and the execution yourselves?",
            answer:
                "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
            active: false,
        },
        {
            question: "Do you give Contra and After sales service?",
            answer:
                "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
            active: true,
        },
        {
            question: "Will you be able to give a quote, if given the floor plan?",
            answer:
                "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
            active: false,
        },
        {
            question: "At what stage an interior designing work could be started?",
            answer:
                "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
            active: false,
        },
        {
            question: "Do you charge for giving a Proposal?",
            answer:
                "We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.",
            active: false,
        },
    ];

    return (
    <>
            <Header />
            <main>
                {/* Page Title */}
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(/images/background/10.webp)" }}
                >
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>About Us</h1>
                                <span className="title">The Interior speak for themselves</span>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section
                    className="about-section"
                    style={{ backgroundImage: "url(/images/background/1.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="row no-gutters">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div
                                        className="title-box wow fadeInLeft"
                                        data-wow-delay="1200ms"
                                    >
                                        <h2>
                                            ABOUT <br />
                                            US
                                        </h2>
                                    </div>
                                    <div className="image-box">
                                        <figure className="alphabet-img wow fadeInRight">
                                            <img
                                                src="/images/resource/alphabet-image.png"
                                                alt="Alphabet"
                                            />
                                        </figure>
                                        <figure
                                            className="image wow fadeInRight"
                                            data-wow-delay="600ms"
                                        >
                                            <img src="/images/resource/image-2.png" alt="About Image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="content-box">
                                        <div className="title">
                                            <h2>
                                                Any Project <br />
                                                For Any Scale
                                            </h2>
                                        </div>
                                        <div className="text">
                                            Karyani House has many years of experience and specializes
                                            in designing, building, renovating, and maintaining villas,
                                            residential buildings, and commercial spaces. We provide
                                            expert services in structural repair, cladding, aluminum
                                            and glass works, interior finishing, and custom construction
                                            solutions across Abu Dhabi and the UAE.
                                        </div>
                                        <div className="link-box">
                                            <Link href="/about" className="theme-btn btn-style-one">
                                                About Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section
                    className="process-section"
                    style={{ backgroundImage: "url(/images/background/8.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="sec-title light">
                            <span className="float-text">HOW WE WORK</span>
                            <h2>Proven Process</h2>
                        </div>
                        <div className="row">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="process-block col-lg-3 col-md-6 col-sm-12"
                                >
                                    <div className="inner-box">
                                        <span className="count">{`0${idx + 1}`}</span>
                                        <h4>
                                            <Link href="/service-detail">{step.title}</Link>
                                        </h4>
                                        <div className="text">{step.desc}</div>
                                        <div className="link-box">
                                            <Link href="/service-detail">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="testimonial-section-two">
                    <div className="auto-container">
                        <div className="sec-title">
                            <span className="float-text">Testimonial</span>
                            <h2>What Clients Says</h2>
                        </div>
                        <Slider {...sliderSettings}>
                            {testimonialData.map((item, idx) => (
                                <div key={idx} className="testimonial-block-two">
                                    <div className="inner-box">
                                        <div className="text">{item.text}</div>
                                        <div className="info-box">
                                            <div className="thumb">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <h5 className="name">{item.name}</h5>
                                            <span className="date">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>

                {/* Clients & Video Section */}
                <ClientsAndVideoSection />

                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src="/images/resource/faq-img.png" alt="FAQ Image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">some FAQ’s</span>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        {faqData.map(({ question, answer, active }, idx) => (
                                            <li
                                                key={idx}
                                                className={`accordion block${active ? " active-block" : ""}`}
                                            >
                                                <div className={`acc-btn${active ? " active" : ""}`}>
                                                    {question}
                                                    <div className="icon fa fa-plus-square"></div>
                                                </div>
                                                <div className={`acc-content${active ? " current" : ""}`}>
                                                    <div className="content">
                                                        <div className="text">{answer}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* App Section */}
                <section className="app-section">
                    <div className="outer-box">
                        <div className="auto-container">
                            <div className="row">
                                <div className="title-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h1>
                                            Karyani <br />
                                            House
                                        </h1>
                                    </div>
                                </div>

                                <div className="image-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image-box wow zoomInLeft">
                                            <figure className="image">
                                                <img src="/images/resource/mobile-app.png" alt="Mobile App" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h3>Karyani House <br /> delivers expert construction</h3>
                                        <div className="text">
                                            renovation, cladding, and maintenance <br />
                                            services with guaranteed quality
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engineer / Specialize Section */}
                <section className="specialize-section-two">
                    <div className="auto-container">
                        <div className="row">
                            <div className="title-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">Services</span>
                                        <h2>Meet Our Engineer</h2>
                                    </div>

                                    <div className="text-box">
                                        <h4>Dedicated Expertise</h4>
                                        <p>
                                            Precision and innovation define our engineering team. With
                                            countless challenges in modern construction, staying ahead
                                            requires both skill and creativity.
                                        </p>
                                        <p>
                                            Far beyond typical solutions, our engineers craft practical
                                            and efficient designs that stand the test of time. Combining
                                            knowledge with passion, they ensure every project’s success
                                            and safety. Their work shapes the future with strength and
                                            elegance.
                                        </p>
                                    </div>
                                    <div className="link-box">
                                        <Link href="#">
                                            Read More <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="carousel-outer">
                                        <ul className="image-carousel owl-carousel owl-theme">
                                            <li>
                                                <Link href="/images/resource/ENGG12.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="/images/resource/ENGG12.png" alt="" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/images/resource/Eng1.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="/images/resource/Eng1.png" alt="" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/images/resource/special-4.jpg" className="lightbox-image" title="Image Caption Here">
                                                    <img src="/images/resource/special-4.jpg" alt="" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/images/resource/ENGG122.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="/images/resource/ENGG12.png" alt="" />
                                                </Link>
                                            </li>
                                        </ul>

                                        <ul className="thumbs-carousel owl-carousel owl-theme">
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="/images/resource/Eng12.png" alt="" />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="/images/resource/ENG.png" alt="" />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="/images/resource/Eng12.png" alt="" />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

