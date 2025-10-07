'use client';

import Head from 'next/head';
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";

export default function ThankYouPage() {
    return (
        <>
            <Head>
                <title>Thank You | Karyani House Construction</title>
                <meta name="description" content="Your request has been successfully received. We will contact you soon to provide the best construction and repair services. For more information, contact Karyani House Construction." />
            </Head>
            <Header />
            <main style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                flexDirection: "column",
                textAlign: "center",
                padding: "0 20px",
            }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Thank you!</h1>
                <p style={{ fontSize: "1.5rem", maxWidth: "600px", marginBottom: "20px" }}>
                    We received your request and will contact you soon.
                </p>
                <a
                    href="tel:+9710506607159"
                    style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff8a00", textDecoration: "none" }}
                >
                    Call us: +9710506607159
                </a>
            </main>
            <Footer />
        </>
    );
}