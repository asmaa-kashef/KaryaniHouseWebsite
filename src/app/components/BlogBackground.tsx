"use client";

import React from "react";
import Link from "next/link";

interface BlogBackgroundProps { // تم تغيير الاسم هنا
    title: string;
    category: string;
}

const BlogBackground: React.FC<BlogBackgroundProps> = ({ title, category }) => { // تم تغيير الاسم هنا
    return (
        <section
            className="page-title"
            style={{ backgroundImage: "url(/images/background/construction.webp)" }}
        >
            <div className="auto-container">
                <div className="inner-container clearfix">
                    <div className="title-box">
                        <h1
                            dangerouslySetInnerHTML={{ __html: title }}
                            style={{ fontFamily: "system-ui, math", color: "black" }}
                        />
                        <span className="title">{category}</span>
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
    );
};

export default BlogBackground; // تم تغيير الاسم هنا