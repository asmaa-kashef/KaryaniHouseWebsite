import React from "react";
import Image from 'next/image';

export default function ClientsAndVideoSection() {
    return (
        <>
            {/* Clients Section */}
            <section className="clients-section style-two">
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <ul className="sponsors-carousel owl-carousel owl-theme">
                            {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => (
                                <li key={idx} className="slide-item">
                                    <figure className="image-box">
                                        <a href="#">
                                            {/* Corrected line: Replaced <img> with <Image> */}
                                            <Image
                                                src={`/images/clients/${num}.webp`}
                                                alt={`Client ${num}`}
                                                width={110}
                                                height={80}
                                                // Note: The styling should ideally be in a CSS class
                                                // and not inline for better practice.
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

            {/* Video Section */}
            <section className="video-section">
                <div className="outer-box" style={{ backgroundImage: 'url(/images/background/9.jpg)' }}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <span className="float-text">See Video</span>
                                        <h2>Expert Engineer</h2>
                                    </div>
                                    <span className="title">We Give You The Best</span>
                                    <div className="text">
                                        Highly skilled professional ensuring innovative, precise, and reliable construction solutions daily.
                                    </div>
                                </div>
                            </div>

                            <div className="video-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="video-box">
                                        <figure className="image">
                                            <Image
                                                src="/images/resource/video-img.webp"
                                                alt="Video Preview"
                                                width={600} // Example size, adjust as needed
                                                height={400} // Example size, adjust as needed
                                            />
                                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="link" data-fancybox="gallery">
                                                <span className="icon fa fa-play"></span>
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
