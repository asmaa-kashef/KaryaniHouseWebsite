import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import ProjectsPageClient from "../../components/arProjectsPageClient";

// === Mapping SEO Titles & Descriptions ===
const metaConfig = {
    all: {
        title: "مشاريع الفيلات وإصلاح الهياكل | كريانى هاوس أبوظبي",
        description: "استعرض أحدث مشاريع كريانى هاوس للبناء وإصلاح الهياكل وتكسية الواجهات في أبوظبي. عرض التفاصيل وأمثلة على جودة العمل.",
    },
    Repair: {
        title: "مشاريع إصلاح الهياكل في أبوظبي | كريانى هاوس",
        description: "تصفح مشاريع إصلاح الهياكل في أبوظبي، مع التركيز على المتانة والهندسة الاحترافية.",
    },
    Villa: {
        title: "مشاريع بناء الفيلات في أبوظبي | كريانى هاوس",
        description: "اكتشف مشاريع الفيلات الحديثة والفاخرة في جميع أنحاء أبوظبي.",
    },
    Cladding: {
        title: "مشاريع تكسية الواجهات في أبوظبي | كريانى هاوس",
        description: "شاهد مشاريع التكسية الاحترافية التي تجمع بين الجمال والمتانة في أبوظبي.",
    },
};

// This function runs on the server and sets the dynamic metadata.
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const filter = searchParams.filter as string || "all";
    const currentPage = Number(searchParams.page) || 1;

    const baseTitle = metaConfig[filter]?.title || metaConfig.all.title;
    const title = currentPage > 1 ? `${baseTitle} (الصفحة ${currentPage})` : baseTitle;

    const baseDescription = metaConfig[filter]?.description || metaConfig.all.description;
    const description = currentPage > 1 ? `${baseDescription} - الصفحة ${currentPage}` : baseDescription;

    const baseUrl = "https://yourwebsite.com/projects";
    const currentUrl = `${baseUrl}?filter=${filter}&page=${currentPage}`;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            url: currentUrl,
            type: "website",
            images: [
                {
                    url: "https://yourwebsite.com/images/project-banner.jpg",
                    alt: "مشاريع كريانى هاوس",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: ["https://yourwebsite.com/images/project-banner.jpg"],
        },
        alternates: {
            canonical: currentUrl,
            prev: currentPage > 1 ? `${baseUrl}?filter=${filter}&page=${currentPage - 1}` : undefined,
            next: `${baseUrl}?filter=${filter}&page=${currentPage + 1}`,
        },
    };
}

// The main page component
export default function ProjectsPage() {
    return (
        <div className="rtl">
            <Header />
            {/* This section can remain a server component */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/project.jpg)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>مشاريعنا</h1>
                            <span className="title">
                                عرض مشاريع بناء الفيلات، إصلاح الهياكل وتكسية الواجهات
                            </span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">الرئيسية</Link>
                            </li>
                            <li>المشاريع</li>
                        </ul>
                    </div>
                </div>
            </section>

            <ProjectsPageClient />

            <Footer />
        </div>
    );
}
