// components/Sidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type SidebarProps = {
    recentPosts: any[];
};

const Sidebar: React.FC<SidebarProps> = ({ recentPosts }) => {
    return (
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

                {/* Consultation */}
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

                {/* Partner */}
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

                {/* Custom Quote */}
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
    );
};

export default Sidebar;
