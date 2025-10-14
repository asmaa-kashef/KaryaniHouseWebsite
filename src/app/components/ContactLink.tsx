// components/ContactLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function ContactLink() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    const translations = {
        en: {
            text: "Contact Us",
            href: "/en/contact",
        },
        ar: {
            text: "تواصل معنا",
            href: "/ar/contact",
        },
    };

    const { text, href } = translations[currentLang];

    return (
        <Link
            href={href}
            style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: 5,
                fontWeight: "600",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
                direction: currentLang === "ar" ? "rtl" : "ltr",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
            }
        >
            {text}
        </Link>
    );
}
