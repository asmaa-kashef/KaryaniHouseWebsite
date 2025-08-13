import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    author: number;
    _embedded?: {
        "wp:featuredmedia"?: {
            source_url: string;
        }[];
    };
};

const WORDPRESS_API_URL =
    "https://karyaniconstruction.karyani-house.com/wp-json/wp/v2/posts?_embed";

// تعريف الدالة هنا
const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(WORDPRESS_API_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/construction.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>News Detail</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Blog Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="auto-container">
                    <div className="row">
                        {posts.map((post) => {
                            const featuredImage =
                                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                "/images/default-news.jpg";

                            return (
                                <div
                                    key={post.id}
                                    className="news-block-two col-lg-6 col-md-12 col-sm-12"
                                >
                                    <div className="inner-box">
                                        <div
                                            className="image-box"
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                height: "300px",
                                                borderRadius: "8px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src={featuredImage}
                                                alt={post.title.rendered}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                sizes="(max-width: 768px) 100vw, 600px"
                                            />
                                        </div>
                                        <div className="overlay-box">
                                            <Link href={`/blog/${post.slug}`}>
                                                <i className="fa fa-link"></i>
                                            </Link>
                                        </div>
                                        <div
                                            className="caption-box"
                                            style={{
                                                minHeight: "180px",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                padding: "15px",
                                            }}
                                        >
                                            <div className="inner">
                                                <h3>
                                                    <Link href={`/VillaConstruction/${post.slug}`}>
                                                        <span
                                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                        />
                                                    </Link>
                                                </h3>
                                                <ul className="info" style={{ marginTop: "10px" }}>
                                                    <li>{new Date(post.date).toLocaleDateString()}</li>
                                                    <li>
                                                        <a href="#">Author #{post.author}</a>
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
            <Footer />
        </>
    );
}
