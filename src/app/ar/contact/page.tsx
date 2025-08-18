// app/contact/page.tsx
'use client';

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";
import ContactSection from "../components/ContactSection";
import ClientsSection from "../components/ClientsSection";

export default function Contact() {
    return (
        <>
            <Header />

            {/* Page Title */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/construction.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>News Detail</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Blog Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <ContactSection />
            <ClientsSection />
            <Footer />
        </>
    );
}
