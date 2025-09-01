"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// النصوص باللغتين
const contentData = {
    en: {
        videoFloat: "See Video",
        videoHeading: "Expert Engineer",
        videoTitle: "We Give You The Best",
        videoText: "Highly skilled professional ensuring innovative, precise, and reliable construction solutions daily.",
    },
    ar: {
        videoFloat: "شاهد الفيديو",
        videoHeading: "مهندس خبير",
        videoTitle: "نحن نقدم لك الأفضل",
        videoText: "محترف ذو خبرة عالية يضمن حلول بناء مبتكرة ودقيقة وموثوقة بشكل يومي.",
    },
};

export default function ClientsAndVideoSection() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = contentData[currentLang];

    return (
        <>
            {/* قسم العملاء */}
            <section className="clients-section style-two" dir={currentLang === "ar" ? "rtl" : "ltr"}>
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
                                                width={110}
                                                height={80}
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

            {/* قسم الفيديو */}
            <section className="video-section" dir={currentLang === "ar" ? "rtl" : "ltr"}>
                <div className="outer-box" style={{ backgroundImage: "url(/images/background/9.jpg)" }}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <span className="float-text">{content.videoFloat}</span>
                                        <h2>{content.videoHeading}</h2>
                                    </div>
                                    <span className="title">{content.videoTitle}</span>
                                    <div className="text">{content.videoText}</div>
                                </div>
                            </div>

                            <div className="video-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="video-box">
                                        <figure className="image">
                                            <Image
                                                src="/images/resource/video-img.webp"
                                                alt="Video Preview"
                                                width={600}
                                                height={400}
                                            />
                                            <a
                                                href="https://www.youtube.com/watch?v=00_cHMGz5aE"
                                                className="link"
                                                data-fancybox="gallery"
                                            >
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
