// src/components/AsyncCSS.tsx
"use client";

import { useEffect } from "react";

interface AsyncCSSProps {
    href: string;
}

export default function AsyncCSS({ href }: AsyncCSSProps) {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.media = "print"; // يجعلها non-blocking
        link.onload = () => {
            link.media = "all"; // بعد التحميل تصبح CSS كاملة
        };
        document.head.appendChild(link);
    }, [href]);

    return null;
}
