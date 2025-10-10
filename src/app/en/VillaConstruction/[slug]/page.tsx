"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/HomeHeader";
import Footer from "../../../components/HomeFooter";
import FAQAccordion from "../../../components/FAQAccordion";
import TableOfContents from "../../../components/TableOfContents";
import parse, { Element, DOMNode, HTMLReactParserOptions, Text } from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

// Types
interface WPEmbeddedMedia {
    source_url: string;
}
interface WPAuthor {
    name: string;
}
interface WPTerm {
    name: string;
}

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    author: number;
    _embedded?: {
        "wp:featuredmedia"?: WPEmbeddedMedia[];
        author?: WPAuthor[];
        "wp:term"?: WPTerm[][];
    };
};

type HeadingItem = {
    id: string;
    text: string;
    level: number;
};

const WORDPRESS_API_BASE = "https://blog.karyani-house.com/wp-json/wp/v2";

function getTextFromChildren(children: DOMNode[]): string {
    return children
        .map((child) => {
            if ((child as Text).type === "text") return (child as Text).data;
            if ((child as Element).type === "tag" && (child as Element).children) {
                return getTextFromChildren((child as Element).children as DOMNode[]);
            }
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
                const text = getTextFromChildren(element.children as DOMNode[]);
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
                const postData: Post[] = await postRes.json();
                setPost(postData[0] || null);

                const recentRes = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=3&_embed`);
                const recentData: Post[] = await recentRes.json();
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

    // Parse content and apply styles
    function removeFaqSection(html: string): string {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;

        // حذف كل العناصر اللي ليها علاقة بالـ FAQ
        const faqElements = wrapper.querySelectorAll('[class*="uagb-faq"]');
        faqElements.forEach((el) => el.remove());

        return wrapper.innerHTML;
    }

    const cleanedContent = post?.content?.rendered ? removeFaqSection(post.content.rendered) : "";

    const parsedContent = parse(cleanedContent, {
        replace: (domNode) => {
            if (domNode.type === "tag") {
                const element = domNode as Element;

                // العناوين H1-H6
                if (/^h[1-6]$/.test(element.name)) {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "font-family: system-ui, math; color: black; margin-top: 1em; margin-bottom: 0.5em;",
                    };
                }

                // الجداول
                if (element.name === "table") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "width: 100%; border-collapse: collapse; margin: 1em 0; border: 1px solid #ddd; background-color: #f9f9f9;",
                    };
                }

                // رأس الجدول
                if (element.name === "thead") {
                    element.attribs = {
                        ...element.attribs,
                        style: "background-color: #eaeaea;",
                    };
                }

                // صفوف الجدول
                if (element.name === "tr") {
                    element.attribs = {
                        ...element.attribs,
                        style: "border-bottom: 1px solid #ddd;",
                    };
                }

                // خلايا رأس الجدول
                if (element.name === "th") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold; color: black;",
                    };
                }

                // خلايا جسم الجدول
                if (element.name === "td") {
                    element.attribs = {
                        ...element.attribs,
                        style: "padding: 12px; border: 1px solid #ddd; color: black;",
                    };
                }

                // القوائم UL و OL
                if (element.name === "ul" || element.name === "ol") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "margin: 1em 0; padding-left: 1.8em; color: black; direction: ltr; list-style-position: outside; list-style-type: disc;",
                    };
                }

                // عناصر القائمة LI
                if (element.name === "li") {
                    element.attribs = {
                        ...element.attribs,
                        style: "margin-bottom: 0.8em; list-style-type: disc;",
                    };
                }

                // الصور
                if (element.name === "img") {
                    element.attribs = {
                        ...element.attribs,
                        style: "max-width: 100%; height: auto; margin: 1em 0; border-radius: 8px;",
                    };
                }

                // الفقرات
                if (element.name === "p") {
                    element.attribs = {
                        ...element.attribs,
                        style: "margin-bottom: 1em; color: black;",
                    };
                }

                // blockquote
                if (element.name === "blockquote") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "border-left: 4px solid #db2777; padding-left: 1em; color: black; font-style: italic; margin: 1em 0;",
                    };
                }
            }
        },
    });


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
                            <h1
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                style={{ fontFamily: "system-ui, math", color: "black" }}
                            />
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
                                                <h3
                                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    style={{ fontFamily: "system-ui, math", color: "black" }}
                                                />
                                                <ul className="info">
                                                    <li>{date}</li>
                                                    <li>{author}</li>
                                                    <li>{category}</li>
                                                </ul>

                                                {/* Table of Contents */}
                                                <TableOfContents headings={headings} />

                                                <div className="entry-content">{parsedContent}</div>
                                                <FAQAccordion htmlContent={post.content.rendered} />
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
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black", fontFamily: "system-ui, math" }}>
                                        <strong>Schedule a Site Visit</strong>
                                    </h3>
                                    {["/video/final2.mp4", "/video/final.mp4"].map((src, index) => (
                                        <video
                                            key={`video-${index}`}
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
                                            typeof="video/mp4"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    ))}
                                </div>

                                {/* Best Construction Company */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black", fontFamily: "system-ui, math" }}>
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
                                        <h3 style={{ fontFamily: "system-ui, math", color: "black" }}>Our Company Service</h3>
                                    </div>
                                    <ul className="cat-list">
                                        {["Villa Construction", "Structure Repair", "Cladding", "Interior Works", "Alumnium and Glass"].map((cat, index) => (
                                            <li key={`cat-${index}`} className={cat === "Cladding" ? "active" : ""}>
                                                <Link href="#">{cat}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Get a Free Quote */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "12px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black", fontFamily: "system-ui, math" }}>
                                        <strong>Get a Free Quote</strong>
                                    </h3>
                                    <a href="tel:+9710506607159" style={{ color: "black", fontWeight: "bold", fontSize: "1.1rem", textDecoration: "underline", cursor: "pointer", display: "inline-block", marginTop: "8px" }}>
                                        +971 050 660 7159
                                    </a>
                                </div>

                                {/* Recent Posts */}
                                <div className="sidebar-widget latest-news">
                                    <div className="sidebar-title">
                                        <h3 style={{ fontFamily: "system-ui, math", color: "black" }}>Recent Post</h3>
                                    </div>
                                    <div className="widget-content">
                                        {recentPosts.length === 0 && <p>No recent posts found.</p>}
                                        {recentPosts.map((recent) => {
                                            const recentImage = recent._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/default-news.jpg";
                                            const recentAuthor = recent._embedded?.author?.[0]?.name || "Unknown author";
                                            return (
                                                <article className="post" key={`recent-${recent.id}`}>
                                                    <div className="post-thumb" style={{ position: "relative", width: "100%", height: "80px" }}>
                                                        <Link href={`/VillaConstruction/${recent.slug}`}>
                                                            <Image src={recentImage} alt={recent.title.rendered} fill style={{ objectFit: "cover", borderRadius: "5px" }} />
                                                        </Link>
                                                    </div>
                                                    <h3>
                                                        <Link href={`/VillaConstruction/${recent.slug}`} className="post-title-link" style={{ fontFamily: "system-ui, math", color: "black" }}>
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
                                        <h3 style={{ fontFamily: "system-ui, math", color: "black" }}>Our Construction Services</h3>
                                    </div>
                                    <ul className="tag-list clearfix" style={{ color: "black" }}>
                                        {["Landing Mining", "Building Staff", "Material Supply", "Consultancy", "Architecture", "Crane Services"].map((tag, index) => (
                                            <li key={`tag-${index}`}>
                                                <Link href="#" style={{ color: "black", border: "1px solid black", padding: "4px 8px", borderRadius: "6px", display: "inline-block" }}>{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #d1f4ff, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "#1f2937", fontFamily: "system-ui, math" }}>
                                        <strong>Book a Free Engineering Consultation</strong>
                                    </h3>
                                    <p className="text-sm text-gray-800 mb-4" style={{ color: "#1f2937" }}>
                                        Our experts are ready to help you plan your next project.
                                    </p>
                                    <Link href="/consultation"
                                        className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-md shadow transition hover:brightness-90"
                                        style={{ backgroundColor: "#2563eb" }}
                                    >
                                        <span className="text-yellow-400">📐</span> Book Now
                                    </Link>
                                </div>
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #c2f0c2, #ffe9b5)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "#1f2937", fontFamily: "system-ui, math" }}>
                                        <strong>Become a Partner</strong>
                                    </h3>
                                    <p className="text-sm text-gray-800 mb-4" style={{ color: "#1f2937" }}>
                                        We welcome collaborations with architects, suppliers, and contractors.
                                    </p>
                                    <Link href="/partnership"
                                        className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-md shadow transition hover:brightness-90"
                                        style={{ backgroundColor: "#059669" }}
                                    >
                                        <span className="text-yellow-400">🤝</span> Apply Now
                                    </Link>
                                </div>
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #fcd5ce, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "#1f2937", fontFamily: "system-ui, math" }}>
                                        <strong>Request a Custom Quote</strong>
                                    </h3>
                                    <p className="text-sm text-gray-800 mb-4" style={{ color: "#1f2937" }}>
                                        Get a tailored estimate that fits your budget and needs.
                                    </p>
                                    <Link href="/quote"
                                        className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-md shadow transition hover:brightness-90"
                                        style={{ backgroundColor: "#b91c1c" }}
                                    >
                                        <span className="text-yellow-400">💰</span> Get Quote
                                    </Link>
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