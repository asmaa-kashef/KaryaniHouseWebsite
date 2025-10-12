"use client";
import React, { useEffect, useState } from "react";
import Header from "../../../components/HomeHeader";
import Footer from "../../../components/HomeFooter";
import FAQAccordion from "../../../components/FAQAccordion";
import TableOfContents from "../../../components/TableOfContents";
import BlogBackground from "../../../components/BlogBackground";
import Sidebar from "../../../components/Sidebar";
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
            <BlogBackground
                title={post.title.rendered}
                category={category}
            />

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
                        <Sidebar recentPosts={recentPosts} />

                    </div>
                </div>
            </div>


       



            <Footer />
        </>
    );
}
