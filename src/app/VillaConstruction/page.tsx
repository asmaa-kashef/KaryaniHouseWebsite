// app/blog/page.tsx
import React from "react";
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

// ✅ غيّري الرابط هنا إلى رابط موقع WordPress الخاص بك
const WORDPRESS_API_URL = "https://karyaniconstruction.karyani-house.com/wp-json/wp/v2/posts?_embed";

const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(WORDPRESS_API_URL, {
        next: { revalidate: 60 }, // تفعيل التخزين المؤقت لمدة 60 ثانية
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return await res.json();
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            <Header />
            {/* Page Title */}
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
                                <a href="/">Home</a>
                            </li>
                            <li>Blog Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="blog-section">
                <div className="auto-container">
                    <div className="row">
                        {posts.map((post) => {
                            const featuredImage =
                                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                "/images/default-news.jpg";

                            return (
                                <div key={post.id} className="news-block-two col-lg-6 col-md-12 col-sm-12">
                                    <div className="inner-box">

                                        <div className="image-box">
                                            <figure className="image">
                                                <img
                                                    src={featuredImage}
                                                    alt={post.title.rendered}
                                                    style={{
                                                        width: "100%",
                                                        height: "300px",
                                                        objectFit: "cover",
                                                        display: "block",
                                                        borderRadius: "8px"
                                                    }}
                                                />
                                            </figure>
                                            <div className="overlay-box">
                                                <a href={`/blog/${post.slug}`}>
                                                    <i className="fa fa-link"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div
                                            className="caption-box"
                                            style={{
                                                minHeight: "180px",            // Ensures all caption-boxes are equal
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                padding: "15px"
                                            }}
                                        >
                                            <div className="inner">
                                                <h3>
                                                    <a
                                                        href={`/VillaConstruction/${post.slug}`}
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    />
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
            <Footer/>
            
        </>
    );
}
