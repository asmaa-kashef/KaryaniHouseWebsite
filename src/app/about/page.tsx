"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/HomeHeader";
import Footer from "../components/HomeFooter";
import ProjectsComponent from "../components/ProjectsComponent";
import NewsSection from "../components/NewsSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsAndVideoSection from "../components/ClientsAndVideoSection";
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-prev custom-arrow" onClick={onClick}>
            ‹
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-next custom-arrow" onClick={onClick}>
            ›
        </div>
    );
};

export default function HomePage() {
    const testimonialData = [
        {
            name: "Elena Gomes",
            date: "July 28 - 2018",
            image: "/images/resource/thumb-2.jpg",
            text: "I got an excellent design for my future home, from cooperation I was very pleased, everything was done at the highest level. Boldly I recommend to all this company."
        },
        {
            name: "Aliza Norka",
            date: "July 28 - 2018",
            image: "/images/resource/thumb-3.jpg",
            text: "I got an excellent design for my future home, from cooperation I was very pleased, everything was done at the highest level. Boldly I recommend to all this company."
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
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <>
            <Header />
            <main>
                <section className="page-title" style={{ backgroundImage: "url(/images/background/10.webp)" }}>
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>About Us</h1>
                                <span className="title">The Interior speak for themselves</span>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li><a href="/">Home</a></li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </section>

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
                                            <img src="/images/resource/alphabet-image.png" alt="" />
                                        </figure>
                                        <figure className="image wow fadeInRight" data-wow-delay="600ms">
                                            <img src="/images/resource/image-2.png" alt="" />
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

                {/* ✅ Clients, Video, FAQ, and App Sections will go here */}


                <section className="process-section" style={{ backgroundImage: "url(/images/background/8.jpg)" }}>
                    <div className="auto-container">
                        <div className="sec-title light">
                            <span className="float-text">HOW WE WORK</span>
                            <h2>Proven Process</h2>
                        </div>
                        <div className="row">
                            {[
                                {
                                    title: "Concept",
                                    desc: "We begin by understanding your vision and space, translating ideas into a practical project scope."
                                },
                                {
                                    title: "Planning",
                                    desc: "We prepare detailed schedules, budgets, and permits to ensure your construction starts on solid ground."
                                },
                                {
                                    title: "Design",
                                    desc: "Our architects develop creative, efficient designs with full compliance to structural and aesthetic standards."
                                },
                                {
                                    title: "Execution",
                                    desc: "Our experienced team delivers construction with high-quality materials, safety protocols, and skilled craftsmanship throughout."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="process-block col-lg-3 col-md-6 col-sm-12">
                                    <div className="inner-box">
                                        <span className="count">{`0${idx + 1}`}</span>
                                        <h4><a href="service-detail.html">{step.title}</a></h4>
                                        <div className="text">{step.desc}</div>
                                        <div className="link-box"><a href="service-detail.html">Read More</a></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



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
                                            <div className="thumb"><img src={item.image} alt={item.name} /></div>
                                            <h5 className="name">{item.name}</h5>
                                            <span className="date">{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
                <ClientsAndVideoSection />
                <section className="faq-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src="images/resource/faq-img.png" alt="FAQ Image" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Column */}
                            <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">some FAQ’s</span>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Do you do the design and the execution yourselves?
                                                <div className="icon fa fa-plus-square"></div>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Block */}
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                Do you give Contra and After sales service?
                                                <div className="icon fa fa-plus-square"></div>
                                            </div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text">
                                                        We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Will you be able to give a quote, if given the floor plan?
                                                <div className="icon fa fa-plus-square"></div>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                At what stage an interior designing work could be started?
                                                <div className="icon fa fa-plus-square"></div>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        {/* Block */}
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                Do you charge for giving a Proposal?
                                                <div className="icon fa fa-plus-square"></div>
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">
                                                        We give a Contra for a Period of 5 years and promise to rectify any fault arising out of faulty workmanship at our cost. However the guarantee does not hold good for mishandling and breakable items.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
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
                                {/* Title Column */}
                                <div className="title-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h1>
                                            Karyani <br /> House
                                        </h1>
                                    </div>
                                </div>

                                {/* Image Column */}
                                <div className="image-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <div className="image-box wow zoomInLeft">
                                            <figure className="image">
                                                <img src="/images/resource/mobile-app.png" alt="Mobile App" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                               
                                {/* Content Column */}
                                <div className="content-column col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <h3>
                                            Karyani House  <br />  delivers expert construction
                                        </h3>
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
                <section className="specialize-section-two">
                    <div className="auto-container">
                        <div className="row">
                            {/* Title Column */}
                            <div className="title-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">Services</span>
                                        <h2>Meet Our Engineer</h2>
                                    </div>

                                    <div className="text-box">
                                        <h4>Dedicated Expertise</h4>
                                        <p>
                                            Precision and innovation define our engineering team. With countless challenges in modern construction, staying ahead requires both skill and creativity.
                                        </p>
                                        <p>
                                        Far beyond typical solutions, our engineers craft practical and efficient designs that stand the test of time. Combining knowledge with passion, they ensure every project’s success and safety. Their work shapes the future with strength and elegance.


                                        </p>
                                    </div>
                                    <div className="link-box">
                                        <a href="#">
                                            Read More <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Column */}
                            <div className="carousel-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="carousel-outer">
                                        <ul className="image-carousel owl-carousel owl-theme">
                                       
                                            <li>
                                                <a href="images/resource/ENGG12.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="images/resource/ENGG12.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="images/resource/Eng1.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="images/resource/Eng1.png" alt="" />
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="images/resource/special-4.jpg" className="lightbox-image" title="Image Caption Here">
                                                    <img src="images/resource/special-4.jpg" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="images/resource/ENGG122.png" className="lightbox-image" title="Image Caption Here">
                                                    <img src="images/resource/ENGG12.png" alt="" />
                                                </a>
                                            </li>
                                       
                                          
                                        </ul>

                                        <ul className="thumbs-carousel owl-carousel owl-theme">
                                        
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="images/resource/Eng12.png" alt="" />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="images/resource/ENG.png" alt="" />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
          
          
          
                                            <li className="thumb-box">
                                                <figure>
                                                    <img src="images/resource/Eng12.png" alt="" />
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
