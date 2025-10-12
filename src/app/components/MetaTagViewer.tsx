"use client";

import React, { useEffect, useState } from "react";

interface MetaData {
    tag: string;
    name?: string;
    content?: string;
}

interface MetaTagViewerProps {
    pageUrl: string;
    onMetaFetched?: (meta: MetaData[]) => void; // callback لإرجاع البيانات
}

const MetaTagViewer: React.FC<MetaTagViewerProps> = ({ pageUrl, onMetaFetched }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMeta() {
            try {
                setLoading(true);
                setError("");

                const res = await fetch(`/api/fetchHead?url=${encodeURIComponent(pageUrl)}`);
                const data = await res.json();

                if (data.error) throw new Error(data.error);

                const parser = new DOMParser();
                const doc = parser.parseFromString(data.html, "text/html");
                const head = doc.querySelector("head");
                if (!head) throw new Error("لم يتم العثور على <head>");

                const elements: MetaData[] = [];

                // title
                const titleEl = head.querySelector("title");
                if (titleEl) elements.push({ tag: "title", content: titleEl.textContent || "" });

                // meta description
                const metaDesc = head.querySelector('meta[name="description"]');
                if (metaDesc)
                    elements.push({ tag: "meta", name: "description", content: metaDesc.getAttribute("content") || "" });

                // ارجع البيانات للـ parent component اذا موجود
                if (onMetaFetched) onMetaFetched(elements);

            } catch (err: any) {
                setError(err.message || "فشل في جلب الصفحة");
            } finally {
                setLoading(false);
            }
        }

        fetchMeta();
    }, [pageUrl, onMetaFetched]);

    if (loading) return null; // مش هنعرض حاجة
    if (error) return null;   // ممكن تعمل log بدل return

    return null; // مفيش عرض، مجرد fetch للبيانات
};

export default MetaTagViewer;
