import React from "react";
import type { Metadata } from "next";
import Header from "../../../components/HomeHeader";
import Footer from "../../../components/HomeFooter";
import FAQAccordion from "../../../components/FAQAccordion";
import TableOfContents from "../../../components/TableOfContents";
import BlogBackground from "../../../components/BlogBackground";
import Sidebar from "../../../components/Sidebar";
import parse, { Element, DOMNode, HTMLReactParserOptions, Text } from "html-react-parser";
import Image from "next/image";

// ✅ لتفادي خطأ Type mismatch في build
export const dynamicParams = true;

// ✅ النوع الموحد للـ params
type Props = {
    params: { slug: string };
};

// =======================
// أنواع بيانات WordPress
// =======================
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

const WORDPRESS_API_BASE = "https://blog.karyani-house.com/wp-json/wp/v2";

// ✅ توليد الميتاداتا الديناميكية (من غير parent)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const res = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${params.slug}&_embed`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) throw new Error("Failed to fetch metadata");

        const data = await res.json();
        const post = data[0];

        if (!post)
            return {
                title: "Post Not Found - Karyani House Blog",
                description: "This post does not exist or has been removed.",
            };

        const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/default-blog.jpg";

        const cleanDescription = post.content.rendered
            .replace(/<[^>]+>/g, "")
            .replace(/\s+/g, " ")
            .slice(0, 150);

        return {
            title: post.title.rendered + " - Karyani House Blog",
            description: cleanDescription,
            openGraph: {
                title: post.title.rendered,
                description: cleanDescription,
                url: `https://blog.karyani-house.com/${params.slug}`,
                type: "article",
                images: [{ url: featuredImage }],
            },
            twitter: {
                card: "summary_large_image",
                title: post.title.rendered,
                description: cleanDescription,
                images: [featuredImage],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "Karyani House Blog",
            description:
                "Explore expert articles about villa construction, interior design, and facade cladding in Abu Dhabi.",
        };
    }
}

type HeadingItem = {
    id: string;
    text: string;
    level: number;
};

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

// ✅ الصفحة الرئيسية للتفاصيل
export default async function VillaConstructionDetail({ params }: Props): Promise<JSX.Element> {
    const { slug } = params;

    const [postRes, recentRes] = await Promise.all([
        fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}&_embed`, { next: { revalidate: 60 } }),
        fetch(`${WORDPRESS_API_BASE}/posts?per_page=3&_embed`, { next: { revalidate: 60 } }),
    ]);

    if (!postRes.ok) throw new Error("Failed to load post data");
    if (!recentRes.ok) throw new Error("Failed to load recent posts");

    const postData: Post[] = await postRes.json();
    const recentData: Post[] = await recentRes.json();

    const post = postData[0] || null;
    const recentPosts = recentData || [];

    if (!post) {
        return (
            <div style={{ padding: "4rem", textAlign: "center" }}>
                <Header />
                <h2>Post not found</h2>
                <Footer />
            </div>
        );
    }

    const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
    const author = post._embedded?.author?.[0]?.name || "Unknown author";
    const date = new Date(post.date).toLocaleDateString("ar-EG");
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "General";

    const headings = extractHeadings(post.content.rendered);
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
                    element.attribs = {
                        ...element.attribs,
                        style: "padding: 12px; border: 1px solid #ddd; color: black;",
                    };
                }

                if (element.name === "ul" || element.name === "ol") {
                    element.attribs = {
                        ...element.attribs,
                        style:
                            "margin: 1em 0; padding-left: 1.8em; color: black; direction: ltr; list-style-position: outside; list-style-type: disc;",
                    };
                }

                if (element.name === "li") {
                    element.attribs = {
                        ...element.attribs,
                        style: "margin-bottom: 0.8em; list-style-type: disc;",
                    };
                }

                if (element.name === "img") {
                    element.attribs = {
                        ...element.attribs,
                        style: "max-width: 100%; height: auto; margin: 1em 0; border-radius: 8px;",
                    };
                }

                if (element.name === "p") {
                    element.attribs = {
                        ...element.attribs,
                        style: "margin-bottom: 1em; color: black;",
                    };
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

    // ✅ Schema Markup (JSON-LD)
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title.rendered,
        description: cleanedContent.slice(0, 150),
        image: image || "/images/default-blog.jpg",
        author: {
            "@type": "Person",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "Karyani House Blog",
            logo: {
                "@type": "ImageObject",
                url: "/images/logo.png",
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        url: `https://blog.karyani-house.com/${slug}`,
    };

    // ✅ واجهة الصفحة النهائية
    return (
        <>
            <Header />
            <BlogBackground title={post.title.rendered} category={category} />

            <script type="application/ld+json">{JSON.stringify(schema)}</script>

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            {image && (
                                <div
                                    className="image-box"
                                    style={{ position: "relative", width: "100%", height: "400px" }}
                                >
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

                                                <TableOfContents headings={headings} />

                                                <div className="entry-content">{parsedContent}</div>
                                                <FAQAccordion htmlContent={post.content.rendered} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ✅ السايدبار */}
                        <Sidebar recentPosts={recentPosts} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
