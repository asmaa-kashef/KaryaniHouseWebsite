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
                "https://karyaniconstruction.karyani-house.com/wp-json/wp/v2/posts?_embed&per_page=4",
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
            className="news-section alternate"
            style={{ backgroundColor: "chocolate", padding: "50px 0" }} // Purple background
        >
            <div className="auto-container">
                <div className="sec-title" style={{ color: "#fff" }}>
                    <span className="float-text">{content.floatText}</span>
                    <h2 style={{ color: "white" }}>{content.mainTitle}</h2>

                </div>
                <div className="row">
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
                                className="news-block-two col-lg-6 col-md-12 col-sm-12"
                            >
                                <div className="inner-box" style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "15px" }}>
                                    <div className="image-box">
                                        <figure className="image" style={{ overflow: "hidden" }}>
                                            <Image
                                                src={img}
                                                alt={title.replace(/<[^>]+>/g, "")}
                                                width={400}
                                                height={250}
                                                style={{
                                                    width: "100%",
                                                    height: "250px",
                                                    objectFit: "cover",
                                                    borderRadius: "4px",
                                                }}
                                            />
                                        </figure>
                                        <div className="overlay-box">
                                            <a href={`/blog/${post.slug}`}>
                                                <i className="fa fa-link"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="caption-box">
                                        <div className="inner">
                                            <h3>
                                                <a
                                                    href={`/blog/${post.slug}`}
                                                    dangerouslySetInnerHTML={{ __html: title }}
                                                />
                                            </h3>
                                            <ul className="info">
                                                <li>{date},</li>
                                                <li>
                                                    <a href="#">{author}</a>
                                                </li>
                                                <li>
                                                    <a href="#">Comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
