import React from "react";
import { Metadata, ResolvingMetadata } from 'next'; // ✅ الخطوة 1: استيراد Metadata
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

// Props Type for both Page and generateMetadata
type Props = {
    params: { slug: string };
};

const WORDPRESS_API_BASE = "https://blog.karyani-house.com/wp-json/wp/v2";

// ✅ الخطوة 2: إنشاء دالة generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;

    try {
        // ✅ الخطوة 3: جلب الميتا تايتل والديسكربشن هنا
        const externalUrl = `https://blog.karyani-house.com/${slug}/`;
        const { data: rawHtml } = await axios.get(externalUrl);
        const $ = cheerio.load(rawHtml);

        const metaTitle = $("title").text();
        const metaDescription = $('meta[name="description"]').attr("content") || "";

        // ✅ الخطوة 4: إرجاع كائن الميتا
        return {
            title: metaTitle,
            description: metaDescription,
        };
    } catch (error) {
        console.error("Failed to generate metadata:", error);
        // في حالة الفشل، يمكن إرجاع قيم افتراضية
        return {
            title: "Blog Post",
            description: "Failed to load description.",
        };
    }
}


// Helper functions (تبقى كما هي)
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


// ✅ مكون الصفحة الرئيسي - Async Server Component
export default async function VillaConstructionDetail({ params }: Props) {
    const { slug } = params;

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
                if (element.name === "ul" || element.name === "ol") element.attribs = { ...element.attribs, style: "margin:1em 0; padding-left:1.8em; color:black; direction:ltr; list-style-position:outside; list-style-type:disc;" };
                if (element.name === "li") element.attribs = { ...element.attribs, style: "margin-bottom:0.8em; list-style-type:disc;" };
                if (element.name === "img") element.attribs = { ...element.attribs, style: "max-width:100%; height:auto; margin:1em 0; border-radius:8px;" };
                if (element.name === "p") element.attribs = { ...element.attribs, style: "margin-bottom:1em; color:black;" };
                if (element.name === "blockquote") element.attribs = { ...element.attribs, style: "border-left:4px solid #db2777; padding-left:1em; color:black; font-style:italic; margin:1em 0;" };
            }
        },
    });

    // ✅ الخطوة 5: تم حذف كود axios و cheerio من هنا لأنه الآن في generateMetadata
    // لم نعد بحاجة إلى المتغيرات metaTitle و metaDescription داخل المكون

    return (
        <>
            <Header />
            <BlogBackground title={post.title.rendered} category={category} />

            {/* ❌ تم حذف هذا الجزء لأنه لم يعد ضرورياً */}
            {/* <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-9">
                    <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
                    <p className="text-sm text-gray-500 mb-2">
                        Published on {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div className="mb-4">
                        <strong>Meta Title:</strong> {metaTitle}
                        <br />
                        <strong>Meta Description:</strong> {metaDescription}
                    </div>
                </div>
            </div> 
            */}

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
        </>
    );
}