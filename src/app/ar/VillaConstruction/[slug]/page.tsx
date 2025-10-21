import React from "react";
import { Metadata } from 'next';
import Head from "next/head"; // <--- استيراد Head
import Header from "../../../components/HomeHeader";
import Footer from "../../../components/HomeFooter";
import FAQAccordion from "../../../components/FAQAccordion";
import TableOfContents from "../../../components/TableOfContents";
import BlogBackground from "../../../components/BlogBackground";
import Sidebar from "../../../components/Sidebar";
import parse, { Element, DOMNode, HTMLReactParserOptions, Text } from "html-react-parser";
import Image from "next/image";
import * as cheerio from "cheerio";
import axios from "axios";

// Types
type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    author: number;
    _embedded: {
        "wp:featuredmedia"?: { source_url: string }[];
        author?: { name: string }[];
        yoast_head_json?: {
            title?: string;
            description?: string;
        }[];
    };
    meta_description?: string;
};

type HeadingItem = {
    id: string;
    text: string;
    level: number;
};

type Props = {
    params: Promise<{ slug: string }>;
};

const WORDPRESS_API_BASE = "https://blog.karyani-house.com/wp-json/wp/v2";

// Generate Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    try {
        const externalUrl = `https://blog.karyani-house.com/${slug}/`;
        const { data: rawHtml } = await axios.get(externalUrl);
        const $ = cheerio.load(rawHtml);

        const metaTitle = $("title").text();
        const metaDescription = $('meta[name="description"]').attr("content") || "";

        return {
            title: metaTitle,
            description: metaDescription,
        };
    } catch (error) {
        console.error("Failed to generate metadata:", error);
        return {
            title: "Blog Post",
            description: "Failed to load description.",
        };
    }
}

// Helper functions
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

function removeFaqSection(html: string): string {
    return html.replace(/<div[^>]*class="[^"]*uagb-faq[^"]*"[^>]*>[\s\S]*?<\/div>/gi, "");
}

// Main Component
export default async function VillaConstructionDetail({ params }: Props) {
    const { slug } = await params;

    // Fetch post and recent posts
    const [postRes, recentRes] = await Promise.all([
        fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed`, { cache: "no-store" }),
        fetch(`${WORDPRESS_API_BASE}/posts?per_page=3&_embed`, { cache: "no-store" }),
    ]);

    if (!postRes.ok || !recentRes.ok) throw new Error("Failed to fetch data from WordPress API.");

    const postData: Post[] = await postRes.json();
    const recentData: Post[] = await recentRes.json();
    const post = postData[0];
    if (!post) return <p>Post not found</p>;

    post._embedded = post._embedded || {};
    const recentPosts: Post[] = (recentData || []).map((p) => ({ ...p, _embedded: p._embedded || {} }));

    const image = post._embedded["wp:featuredmedia"]?.[0]?.source_url || "";
    const author = post._embedded.author?.[0]?.name || "Unknown author";
    const date = new Date(post.date).toLocaleDateString("ar-EG");
    const category = "General";

    const headings = extractHeadings(post.content.rendered);
    const cleanedContent = removeFaqSection(post.content.rendered);

    const parsedContent = parse(cleanedContent, {
        replace: (domNode) => {
            if (domNode.type === "tag") {
                const element = domNode as Element;
                if (/^h[1-6]$/.test(element.name)) element.attribs = { ...element.attribs, style: "font-family: system-ui, math; color: black; margin-top: 1em; margin-bottom: 0.5em;" };
                if (element.name === "table") element.attribs = { ...element.attribs, style: "width:100%; border-collapse:collapse; margin:1em 0; border:1px solid #ddd; background-color:#f9f9f9;" };
                if (element.name === "thead") element.attribs = { ...element.attribs, style: "background-color: #eaeaea;" };
                if (element.name === "tr") element.attribs = { ...element.attribs, style: "border-bottom:1px solid #ddd;" };
                if (element.name === "th") element.attribs = { ...element.attribs, style: "padding:12px; text-align:left; border:1px solid #ddd; font-weight:bold; color:black;" };
                if (element.name === "td") element.attribs = { ...element.attribs, style: "padding:12px; border:1px solid #ddd; color:black;" };
                if (element.name === "ul" || element.name === "ol") element.attribs = {
                    ...element.attribs,
                    style: "margin:1em 0; padding-right:1.8em; padding-left:0; color:black; direction:rtl; list-style-position:outside; list-style-type:disc;"
                };
                if (element.name === "li") element.attribs = { ...element.attribs, style: "margin-bottom:0.8em; list-style-type:disc;" };
                if (element.name === "img") element.attribs = { ...element.attribs, style: "max-width:100%; height:auto; margin:1em 0; border-radius:8px;" };
                if (element.name === "p") element.attribs = { ...element.attribs, style: "margin-bottom:1em; color:black;" };
                if (element.name === "blockquote") element.attribs = {
                    ...element.attribs,
                    style: "border-right:4px solid #db2777; padding-right:1em; color:black; font-style:italic; margin:1em 0; text-align:right;"
                };
            }
        },
    });

    // Canonical URL
    const canonicalUrl = `https://www.karyani-house.com/en/VillaConstruction/${slug}`;

    // Schema JSON-LD
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "headline": post.title.rendered,
        "description": post._embedded?.yoast_head_json?.[0]?.description || "",
        "image": image ? [image] : [],
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Karyani House",
            "logo": {
                "@type": "ImageObject",
                "url": "https://blog.karyani-house.com/logo.png"
            }
        },
        "datePublished": post.date,
        "dateModified": post.date
    };

    return (
        <div className="rtl">
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <Header />

            {/* JSON-LD Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

            <BlogBackground title={post.title.rendered} category={category} />

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            {image && (
                                <div className="image-box" style={{ position: "relative", width: "100%", height: "400px" }}>
                                    <Image src={image} alt={post.title.rendered} fill style={{ objectFit: "cover", borderRadius: "8px" }} sizes="(max-width:768px) 100vw,800px" priority />
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
                        <Sidebar recentPosts={recentPosts} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
