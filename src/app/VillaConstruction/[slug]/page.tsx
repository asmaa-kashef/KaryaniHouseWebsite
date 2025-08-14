"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import parse, { DOMNode, Element, HTMLReactParserOptions } from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    author: number;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
        author?: { name: string }[];
        "wp:term"?: { name: string }[][];
    };
};

type HeadingItem = {
    id: string;
    text: string;
    level: number;
};

const WORDPRESS_API_BASE = "https://karyaniconstruction.karyani-house.com/wp-json/wp/v2";

function getTextFromChildren(children: any[]): string {
    return children
        .map((child) => {
            if (child.type === "text") return child.data;
            if (child.type === "tag" && child.children) return getTextFromChildren(child.children);
            return "";
        })
        .join("")
        .trim();
}

function extractHeadings(html: string): HeadingItem[] {
    const headings: HeadingItem[] = [];
    let stopCollecting = false;

    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (stopCollecting) return;
            if (domNode.type === "tag" && /^h[1-6]$/.test(domNode.name)) {
                const element = domNode as Element;
                const level = parseInt(domNode.name.slice(1), 10);
                const text = getTextFromChildren(element.children);
                const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
                if (text.toLowerCase().includes("frequently asked questions")) stopCollecting = true;
                element.attribs = { ...element.attribs, id };
                headings.push({ id, text, level });
            }
        },
    };

    parse(html, options);
    return headings;
}

export default function VillaConstructionDetail() {
    const params = useParams();
    const slug = params?.slug as string;

    const [post, setPost] = useState<Post | null>(null);
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const postRes = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed`);
                const postData = await postRes.json();
                setPost(postData[0] || null);

                const recentRes = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=3&_embed`);
                const recentData = await recentRes.json();
                setRecentPosts(recentData || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        if (slug) fetchData();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!post) return <p>Post not found</p>;

    const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const author = post._embedded?.author?.[0]?.name || "Unknown author";
    const date = new Date(post.date).toLocaleDateString("ar-EG");
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";

    const headings = extractHeadings(post.content.rendered);
    const parsedContent = parse(post.content.rendered);

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
                            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            <span className="title">{category}</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>Blog Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Content + Sidebar */}
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Main Content */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            {image && (
                                <div className="image-box" style={{ position: "relative", width: "100%", height: "400px" }}>
                                    <Image
                                        src={image}
                                        alt={post.title.rendered}
                                        fill
                                        style={{ objectFit: "cover", borderRadius: "8px" }}
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        priority
                                    />
                                </div>
                            )}
                            <div className="blog-detail">
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="caption-box">
                                            <div className="inner">
                                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                <ul className="info">
                                                    <li>{date}</li>
                                                    <li>{author}</li>
                                                    <li>{category}</li>
                                                </ul>

                                                {/* Table of Contents */}
                                                {headings.length > 0 && (
                                                    <nav className="toc" aria-label="Table of Contents"
                                                        style={{
                                                            background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)",
                                                            borderRadius: "23px",
                                                            padding: "28px",
                                                            marginBottom: "55px",
                                                            color: "black",
                                                            fontWeight: "bold",
                                                        }}>
                                                        <h3>Table of Contents</h3>
                                                        <ul>
                                                            {headings.map(({ id, text, level }) => (
                                                                <li key={id} style={{ marginLeft: `${(level - 2) * 20}px` }}>
                                                                    <a href={`#${id}`} style={{ textDecoration: "none", cursor: "pointer", color: "black" }}>
                                                                        {text}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </nav>
                                                )}

                                                <div className="entry-content">{parsedContent}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar default-sidebar">

                                {/* Search Box */}
                                <div className="sidebar-widget search-box">
                                    <form method="post" action="#">
                                        <div className="form-group">
                                            <input type="search" name="search-field" placeholder="Search....." required />
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>

                                {/* Schedule a Site Visit */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black" }}>
                                        <strong>Schedule a Site Visit</strong>
                                    </h3>
                                    {["/video/final2.mp4", "/video/final.mp4"].map((src) => (
                                        <video
                                            key={src}
                                            controls
                                            style={{
                                                marginTop: "30px",
                                                borderRadius: "23px",
                                                maxWidth: "100%",
                                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                                border: "2px solid #db2777",
                                                background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)",
                                                padding: "10px",
                                            }}
                                            src={src}
                                            type="video/mp4"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ))}
                                </div>

                                {/* Best Construction Company */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black" }}>
                                        <strong>Do You Need the Best <br /> Construction Company in Abu Dhabi?</strong>
                                    </h3>
                                    <p className="text-sm text-black-700 mb-2" style={{ color: "black" }}>
                                        <strong>Karyani House</strong> is the leading construction company in Abu Dhabi.
                                    </p>
                                    <p className="text-sm text-gray-700 mb-4" style={{ color: "black" }}>
                                        From villa construction to finishing works – your place is with us.
                                    </p>
                                    <p className="text-sm text-gray-800 font-medium mb-4 flex items-center justify-center gap-1" style={{ color: "black" }}>
                                        <span className="text-pink-600 text-lg">📞</span> Call us today: 050 660 7159
                                    </p>
                                    <Link href="/contact"
                                        className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-md shadow transition hover:brightness-90"
                                        style={{ backgroundColor: "#545454" }}
                                    >
                                        <span className="text-yellow-400">⚒️</span> Request a Consultation
                                    </Link>
                                </div>

                                {/* Categories */}
                                <div className="sidebar-widget categories">
                                    <div className="sidebar-title">
                                        <h3>Our Company Service</h3>
                                    </div>
                                    <ul className="cat-list">
                                        {["Villa Construction", "Structure Repair", "Cladding", "Interior Works", "Alumnium and Glass"].map((cat) => (
                                            <li key={cat} className={cat === "Cladding" ? "active" : ""}><Link href="#">{cat}</Link></li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Get a Free Quote */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "12px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black" }}>
                                        <strong>Get a Free Quote</strong>
                                    </h3>
                                    <a href="tel:+9710506607159" style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "underline", cursor: "pointer", display: "inline-block", marginTop: "8px" }}>
                                        +971 050 660 7159
                                    </a>
                                </div>

                                {/* Recent Posts */}
                                <div className="sidebar-widget latest-news">
                                    <div className="sidebar-title">
                                        <h3>Recent Post</h3>
                                    </div>
                                    <div className="widget-content">
                                        {recentPosts.length === 0 && <p>No recent posts found.</p>}
                                        {recentPosts.map((recent) => {
                                            const recentImage = recent._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/default-news.jpg";
                                            const recentAuthor = recent._embedded?.author?.[0]?.name || "Unknown author";
                                            return (
                                                <article className="post" key={recent.id}>
                                                    <div className="post-thumb" style={{ position: "relative", width: "100%", height: "80px" }}>
                                                        <Link href={`/VillaConstruction/${recent.slug}`}>
                                                            <Image src={recentImage} alt={recent.title.rendered} fill style={{ objectFit: "cover", borderRadius: "5px" }} />
                                                        </Link>
                                                    </div>
                                                    <h3>
                                                        <Link href={`/VillaConstruction/${recent.slug}`} className="post-title-link">
                                                            <span dangerouslySetInnerHTML={{ __html: recent.title.rendered }} />
                                                        </Link>
                                                    </h3>
                                                    <div className="post-info">by {recentAuthor}</div>
                                                </article>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="sidebar-widget tags" style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <div className="sidebar-title">
                                        <h3>Our Construction Services</h3>
                                    </div>
                                    <ul className="tag-list clearfix" style={{ color: "black" }}>
                                        {["Landing Mining", "Building Staff", "Material Supply", "Consultancy", "Architecture", "Crane Services"].map((tag) => (
                                            <li key={tag}>
                                                <Link href="#" style={{ color: "black", border: "1px solid black", padding: "4px 8px", borderRadius: "6px", display: "inline-block" }}>{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </aside>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
