// components/ContactLink.tsx
'use client';

import Link from "next/link";
import React from "react";

export default function ContactLink() {
    return (
        <Link
            href="/contact"
            style={{
                display: "inline-block",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "10px 25px",
                borderRadius: 5,
                fontWeight: "600",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007bff")
            }
        >
            Contact
        </Link>
    );
}