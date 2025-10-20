import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";

type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    author: number;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
    };
};

// ✅ Fetch Arabic posts only
const WORDPRESS_API_URL =
    "https://blog.karyani-house.com/wp-json/wp/v2/posts?_embed&lang=ar&fields=id,slug,title,excerpt,date,author,_embedded";

// ✅ SEO Metadata
export const metadata = {
    title: "أخبار كارياني هاوس | تحديثات وإنجازات بناء الفلل الفاخرة",
    description:
        "استعرض أحدث المقالات والتحديثات من كارياني هاوس حول بناء الفلل الفاخرة، العمارة الحديثة، واتجاهات التصميم في الرياض والإمارات.",
};

// ✅ Fetch posts
const getPosts = async (): Promise<Post[]> => {
    const res = await fetch(WORDPRESS_API_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("فشل في جلب المقالات");

    const posts: Post[] = await res.json();

    // ✅ فلتر للتأكد أن العنوان عربي فقط
    const arabicPosts = posts.filter(post => /[\u0600-\u06FF]/.test(post.title.rendered));

    return arabicPosts;
};

// ✅ Page Component
export default async function BlogPage() {
    const posts = await getPosts();

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
                            <h1>تفاصيل الأخبار</h1>
                            <span className="title">آخر المقالات من كارياني هاوس</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">الرئيسية</Link></li>
                            <li>الأخبار</li>
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
                                                    {/* رابط عربي فقط */}
                                                    <Link href={`/ar/VillaConstruction/${post.slug}`}>
                                                        <span
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.title.rendered,
                                                            }}
                                                        />
                                                    </Link>
                                                </h3>
                                                <ul className="info" style={{ marginTop: "10px" }}>
                                                    <li>{new Date(post.date).toLocaleDateString("ar-EG")}</li>
                                                    <li>
                                                        <a href="#">الكاتب #{post.author}</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">التعليقات</a>
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
        </div>
    );
}
