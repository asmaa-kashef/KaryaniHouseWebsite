'use client';

import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";

export default function ThankYouPage() {
    return (
        <>
            <Header />
            <main style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                flexDirection: "column",
                textAlign: "center",
                direction: "rtl",
                padding: "0 20px",
            }}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>شكراً!</h1>
                <p style={{ fontSize: "1.5rem", maxWidth: "600px", marginBottom: "20px" }}>
                    لقد تم استلام طلبك وسنتواصل معك قريباً.
                </p>
                <a
                    href="tel:+9710506607159"
                    style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#ff8a00", textDecoration: "none" }}
                >
                    اتصل بنا: +9710506607159
                </a>
            </main>
            <Footer />
        </>
    );
}
