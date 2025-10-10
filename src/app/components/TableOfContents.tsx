"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

interface HeadingItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
    const [open, setOpen] = useState(true);
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";

    if (headings.length === 0) return null;

    const labels = {
        ar: {
            title: "جدول المحتويات",
            toggleOpen: "−",
            toggleClosed: "+",
        },
        en: {
            title: "Table of Contents",
            toggleOpen: "−",
            toggleClosed: "+",
        },
    };

    const { title, toggleOpen, toggleClosed } = labels[currentLang];

    return (
        <nav
            className="toc"
            aria-label="Table of Contents"
            dir={currentLang === "ar" ? "rtl" : "ltr"}
            style={{
                background: "linear-gradient(to bottom right, #fff8dc, #ffe4e1)",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "50px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                color: "black",
                fontWeight: "bold",
            }}
        >
            {/* عنوان قابل للنقر */}
            <h3
                onClick={() => setOpen(!open)}
                style={{
                    fontFamily: "system-ui, math",
                    color: "#222",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.3rem",
                    marginBottom: "20px",
                }}
            >
                {title}
                <span style={{ fontSize: "1.5rem", marginLeft: "10px" }}>
                    {open ? toggleOpen : toggleClosed}
                </span>
            </h3>

            {/* القائمة تظهر فقط إذا كانت مفتوحة */}
            {open && (
                <ul style={{ paddingLeft: "0", listStyle: "none", margin: 0 }}>
                    {headings.map(({ id, text, level }, index) => (
                        <li
                            key={`${id}-${index}`}
                            style={{
                                marginLeft: `${(level - 2) * 20}px`,
                                marginBottom: "0.6em",
                            }}
                        >
                            <a
                                href={`#${id}`}
                                style={{
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    color: "#333",
                                    fontSize: "0.95rem",
                                    padding: "6px 12px",
                                    borderRadius: "6px",
                                    display: "inline-block",
                                    transition: "background 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "#ffe9b5";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                {text}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
