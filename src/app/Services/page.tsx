// src/app/Services/page.tsx

import React, { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";
import Link from "next/link";
import ServicesClientComponent from "./ServicesClientComponent";

export const dynamic = "force-dynamic";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/cons.jpg)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Service Detail</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Service Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* The Suspense boundary is essential here */}
            <Suspense fallback={<div>Loading...</div>}>
                <ServicesClientComponent />
            </Suspense>

            <Footer />
        </>
    );
}