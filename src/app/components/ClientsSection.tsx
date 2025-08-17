"use client";
import React from "react";
import Image from 'next/image';
const ClientsSection = () => {
    return (
        <section className="clients-section style-two">
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
    );
};

export default ClientsSection;
