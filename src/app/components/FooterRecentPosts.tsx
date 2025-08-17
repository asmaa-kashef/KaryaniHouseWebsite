"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    date: string;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
    };
};

export default function FooterRecentPosts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function getPosts() {
            const res = await fetch(
                "https://karyaniconstruction.karyani-house.com/wp-json/wp/v2/posts?_embed&per_page=2"
            );
            if (!res.ok) throw new Error("Failed to fetch posts");
            const data = await res.json();
            setPosts(data);
        }
        getPosts();
    }, []);

    if (posts.length === 0) return <div>Loading...</div>;

    return (
        <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget recent-posts">
                <h2 className="widget-title">Recent Posts</h2>
                <div className="widget-content">
                    {posts.map((post) => {
                        const img =
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                            "images/resource/post-thumb-1.jpg";
                        const title = post.title.rendered;
                        const date = new Date(post.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        });

                        return (
                            <div className="post" key={post.id}>
                                <div className="thumb">
                                    <a href={`/blog/${post.slug}`}>
                                        <Image
                                            src={img || "/images/placeholder.jpg"} // لو img مش موجود، هيعرض placeholder
                                            alt={title.replace(/<[^>]+>/g, "")}
                                            width={600}   // حدد العرض المناسب
                                            height={400}  // حدد الارتفاع المناسب
                                            style={{ objectFit: "cover" }}
                                        />
                                    </a>
                                </div>
                                <h4>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        dangerouslySetInnerHTML={{ __html: title }}
                                    />
                                </h4>
                                <ul className="info">
                                    <li>{date}</li>
                                    <li>3 Comments</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
