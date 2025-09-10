"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutButton() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const buttonText = currentLang === "ar" ? "استكشف مشروعاتنا" : "Explore Our Projects";
    const href = currentLang === "ar" ? "/ar/projects?filter=all&page=1" : "/en/projects?filter=all&page=1";

    return (
        <Link
            href={href}
            style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 20px",
                fontSize: "16px",
                backgroundColor: "#ff7a00",
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
                borderRadius: "8px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                textAlign: "center",
                lineHeight: "1.2",
                minWidth: "100px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e06900")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff7a00")}
        >
            {buttonText}
        </Link>
    );
}
