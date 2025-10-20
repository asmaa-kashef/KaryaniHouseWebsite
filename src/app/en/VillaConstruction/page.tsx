import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import { Metadata } from "next";

// ✅ Static SEO metadata for the Blog Listing page
export const metadata: Metadata = {
    title: "Karyani House Blog | Luxury Villa Construction News & Updates",
    description:
        "Explore the latest news, trends, and insights from Karyani House on luxury modern villa design, construction, cladding, and smart home innovations in Riyadh and the UAE.",
    keywords: [
        "villa construction",
        "luxury villas",
        "modern architecture",
        "Karyani House",
        "construction company Riyadh",
        "villa design UAE",
    ],
    openGraph: {
        title: "Karyani House Blog | Luxury Villa Construction News & Updates",
        description:
            "Stay updated with the latest villa construction trends, design inspiration, and project highlights from Karyani House.",
        url: "https://www.karyani-house.com/blog",
        siteName: "Karyani House",
        images: [
            {
                url: "https://www.karyani-house.com/images/og-blog-cover.jpg",
                width: 1200,
                height: 630,
                alt: "Karyani House Blog - Modern Villa Construction",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Karyani House Blog | Modern Villa Construction Updates",
        description:
            "Luxury villa construction insights and project updates from Karyani House.",
        images: ["https://www.karyani-house.com/images/og-blog-cover.jpg"],
        creator: "@KaryaniHouse",
    },
    alternates: {
        canonical: "https://www.karyani-house.com/blog",
    },
};

type Post = {
    id: number;
    slug: string;
    lang?: string;
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
    "https://blog.karyani-house.com/wp-json/wp/v2/posts?_embed";

// ✅ Fetch posts function with English filter
const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(WORDPRESS_API_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    const posts: Post[] = await res.json();

    // ✅ Filter English posts only
    const englishPosts = posts.filter((p) => p.lang === "en");
    return englishPosts;
};

export default async function BlogPage() {
    const posts = await getPosts();

    // ✅ Structured Data (Schema.org JSON-LD)
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Karyani House Blog",
        "description":
            "Latest news, trends, and updates about modern luxury villa construction from Karyani House.",
        "url": "https://www.karyani-house.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Karyani House",
            "url": "https://www.karyani-house.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.karyani-house.com/images/logo.png",
            },
        },
        "blogPost": posts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title.rendered,
            "url": `https://www.karyani-house.com/blog/${post.slug}`,
            "datePublished": post.date,
            "author": {
                "@type": "Person",
                "name": `Author #${post.author}`,
            },
            "image":
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://www.karyani-house.com/images/default-news.jpg",
            "description": post.excerpt.rendered.replace(/<[^>]+>/g, ""),
        })),
    };

    return (
        <>
            {/* ✅ Inject Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            <Header />

            <section
                className="page-title"
                style={{
                    backgroundImage: "url(/images/background/construction.webp)",
                }}
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
                                                    <Link href={`/en/VillaConstruction/${post.slug}`}>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.title.rendered,
                                                            }}
                                                        />
                                                    </Link>
                                                </h3>
                                                <ul className="info" style={{ marginTop: "10px" }}>
                                                    <li>
                                                        {new Date(post.date).toLocaleDateString("en-US")}
                                                    </li>
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
