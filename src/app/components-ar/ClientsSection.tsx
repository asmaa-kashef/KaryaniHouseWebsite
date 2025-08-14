"use client";
import React from "react";

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
                                        <img src={`/images/clients/${num}.webp`} alt={`Client ${num}`} style={{ width: "150px", height: "90px", objectFit: "contain", display: "block", margin: "0 auto" }} />
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
