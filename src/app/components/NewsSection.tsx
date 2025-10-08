"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    date: string;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
        author?: { name: string }[];
    };
};

const translations = {
    en: { mainTitle: "News & Articles", floatText: "Blogs" },
    ar: { mainTitle: "الأخبار والمقالات", floatText: "مدونة" },
};

export default function NewsSection() {
    const [posts, setPosts] = useState<Post[]>([]);
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    useEffect(() => {
        async function getPosts() {
            const res = await fetch(
                "https://blog.karyani-house.com/wp-json/wp/v2/posts?_embed&per_page=4",
                { next: { revalidate: 60 } }
            );
            if (!res.ok) throw new Error("Failed to fetch posts");
            const data = await res.json();
            setPosts(data);
        }
        getPosts();
    }, []);

    return (
        <section
            style={{ backgroundColor: "chocolate", padding: "50px 0" }}
            dir={currentLang === "ar" ? "rtl" : "ltr"}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ color: "#fff", position: "relative", textAlign: "center", marginBottom: "40px" }}>
                    <span
                        style={{
                            fontSize: "64px",
                            color: "rgba(255,152,0,0.08)",
                            fontWeight: "bold",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 0,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {content.floatText}
                    </span>
                    <h2
                        style={{
                            color: "white",
                            fontSize: "2rem",
                            fontWeight: "700",
                            marginBottom: "10px",
                            position: "relative",
                            zIndex: 1,
                            display: "inline-block",
                            paddingBottom: "10px"
                        }}
                    >
                        {content.mainTitle}
                        <span
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "60px",
                                height: "3px",
                                backgroundColor: "#fff",
                                borderRadius: "2px",
                            }}
                        ></span>
                    </h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "30px",
                        justifyContent: "center"
                    }}
                >
                    {posts.map((post) => {
                        const img =
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                            "/images/default-news.jpg";
                        const title = post.title.rendered;
                        const date = new Date(post.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        });
                        const author = post._embedded?.author?.[0]?.name || "Unknown Author";

                        return (
                            <div
                                key={post.id}
                                style={{
                                    flex: "1 1 45%",
                                    maxWidth: "500px",
                                    backgroundColor: "#fff",
                                    borderRadius: "8px",
                                    padding: "15px",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                }}
                            >
                                <div style={{ marginBottom: "15px", position: "relative" }}>
                                    <figure style={{ overflow: "hidden", borderRadius: "4px" }}>
                                        <Image
                                            src={img}
                                            alt={title.replace(/<[^>]+>/g, "")}
                                            width={400}
                                            height={250}
                                            style={{
                                                width: "100%",
                                                height: "250px",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                    </figure>
                                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", opacity: 0, transition: "opacity 0.3s ease", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <a href={`/blog/${post.slug}`} style={{ color: "#fff", fontSize: "24px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "scale(1.2)" }}>
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div style={{ padding: "0 10px" }}>
                                    <h3>
                                        <a
                                            href={`/blog/${post.slug}`}
                                            dangerouslySetInnerHTML={{ __html: title }}
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: "600",
                                                color: "#333",
                                                textDecoration: "none"
                                            }}
                                        />
                                    </h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", gap: "10px", fontSize: "0.85rem", color: "#666" }}>
                                        <li>{date},</li>
                                        <li>
                                            <a href="#" style={{ color: "#666", textDecoration: "none" }}>{author}</a>
                                        </li>
                                        <li>
                                            <a href="#" style={{ color: "#666", textDecoration: "none" }}>Comments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
