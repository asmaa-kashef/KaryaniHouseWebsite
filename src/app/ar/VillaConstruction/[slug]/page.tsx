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
                // جلب المقال بالعربي
                const postRes = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed&lang=ar`);
                const postData: Post[] = await postRes.json();
                setPost(postData[0] || null);

                // جلب أحدث 3 مقالات بالعربي
                const recentRes = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=3&_embed&lang=ar`);
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

    if (loading) return <p>جاري التحميل...</p>;
    if (!post) return <p>المقال غير موجود</p>;

    const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const author = post._embedded?.author?.[0]?.name || "كاتب غير معروف";
    const date = new Date(post.date).toLocaleDateString("ar-EG");
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "عام";

    const headings = extractHeadings(post.content.rendered);

    function removeFaqSection(html: string): string {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;

        // حذف عناصر FAQ
        const faqElements = wrapper.querySelectorAll('[class*="uagb-faq"]');
        faqElements.forEach((el) => el.remove());

        return wrapper.innerHTML;
    }

    const cleanedContent = post?.content?.rendered ? removeFaqSection(post.content.rendered) : "";

    const parsedContent = parse(cleanedContent, {
        replace: (domNode) => {
            if (domNode.type === "tag") {
                const element = domNode as Element;

                if (/^h[1-6]$/.test(element.name)) {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "font-family: system-ui, math; color: black; margin-top: 1em; margin-bottom: 0.5em;",
                    };
                }

                if (element.name === "table") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "width: 100%; border-collapse: collapse; margin: 1em 0; border: 1px solid #ddd; background-color: #f9f9f9;",
                    };
                }

                if (element.name === "thead") {
                    element.attribs = { ...element.attribs, style: "background-color: #eaeaea;" };
                }

                if (element.name === "tr") {
                    element.attribs = { ...element.attribs, style: "border-bottom: 1px solid #ddd;" };
                }

                if (element.name === "th") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold; color: black;",
                    };
                }

                if (element.name === "td") {
                    element.attribs = { ...element.attribs, style: "padding: 12px; border: 1px solid #ddd; color: black;" };
                }

                if (element.name === "ul" || element.name === "ol") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "margin: 1em 0; padding-left: 1.8em; color: black; direction: ltr; list-style-position: outside; list-style-type: disc;",
                    };
                }

                if (element.name === "li") {
                    element.attribs = { ...element.attribs, style: "margin-bottom: 0.8em; list-style-type: disc;" };
                }

                if (element.name === "img") {
                    element.attribs = {
                        ...element.attribs,
                        style: "max-width: 100%; height: auto; margin: 1em 0; border-radius: 8px;",
                    };
                }

                if (element.name === "p") {
                    element.attribs = { ...element.attribs, style: "margin-bottom: 1em; color: black;" };
                }

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
        <div className="rtl">
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/construction.webp)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={{ fontFamily: "system-ui, math", color: "black" }} />
                            <span className="title">{category}</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">الرئيسية</Link></li>
                            <li>تفاصيل المقال</li>
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
                                                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={{ fontFamily: "system-ui, math", color: "black" }} />
                                                <ul className="info">
                                                    <li>{date}</li>
                                                    <li>{author}</li>
                                                    <li>{category}</li>
                                                </ul>

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
                                            <input type="search" name="search-field" placeholder="بحث..." required />
                                            <button type="submit"><span className="icon fa fa-search"></span></button>
                                        </div>
                                    </form>
                                </div>

                                {/* Schedule a Site Visit */}
                                <div className="p-6 text-center shadow-md max-w-md mx-auto mb-6 border-2 border-pink-500"
                                    style={{ background: "linear-gradient(to bottom right, #ffe9b5, #f9b7b7)", borderRadius: "23px", padding: "28px", marginBottom: "55px" }}>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: "black", fontFamily: "system-ui, math" }}>
                                        <strong>جدولة زيارة الموقع</strong>
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
                                            متصفحك لا يدعم عرض الفيديو.
                                        </video>
                                    ))}
                                </div>

                                {/* Recent Posts */}
                                <div className="sidebar-widget latest-news">
                                    <div className="sidebar-title">
                                        <h3 style={{ fontFamily: "system-ui, math", color: "black" }}>أحدث المقالات</h3>
                                    </div>
                                    <div className="widget-content">
                                        {recentPosts.length === 0 && <p>لا توجد مقالات حديثة.</p>}
                                        {recentPosts.map((recent) => {
                                            const recentImage = recent._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/default-news.jpg";
                                            const recentAuthor = recent._embedded?.author?.[0]?.name || "كاتب غير معروف";
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
                                                    <div className="post-info">بواسطة {recentAuthor}</div>
                                                </article>
                                            );
                                        })}
                                    </div>
                                </div>

                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
