import React, { Suspense } from "react";
import Link from "next/link";
import Header from "../../components/HomeHeader";
import Footer from "../../components/HomeFooter";
import ProjectsPageClient from "../../components/arProjectsPageClient";

// === Mapping SEO Titles & Descriptions ===
const metaConfig = {
    all: {
        title: "مشاريع الفيلات وإصلاح الهياكل | كريانى هاوس أبوظبي",
        description:
            "استعرض أحدث مشاريع كريانى هاوس للبناء وإصلاح الهياكل وتكسية الواجهات في أبوظبي. عرض التفاصيل وأمثلة على جودة العمل.",
    },
    Repair: {
        title: "مشاريع إصلاح الهياكل في أبوظبي | كريانى هاوس",
        description:
            "تصفح مشاريع إصلاح الهياكل في أبوظبي، مع التركيز على المتانة والهندسة الاحترافية.",
    },
    Villa: {
        title: "مشاريع بناء الفيلات في أبوظبي | كريانى هاوس",
        description:
            "اكتشف مشاريع الفيلات الحديثة والفاخرة في جميع أنحاء أبوظبي.",
    },
    Cladding: {
        title: "مشاريع تكسية الواجهات في أبوظبي | كريانى هاوس",
        description:
            "شاهد مشاريع التكسية الاحترافية التي تجمع بين الجمال والمتانة في أبوظبي.",
    },
};

// === Dynamic Metadata ===
type FilterKeys = "all" | "Repair" | "Villa" | "Cladding";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;

    const filter = (params?.filter as string) || "all";
    const filterKey: FilterKeys = filter as FilterKeys; // ✅ تعيين النوع الصحيح
    const currentPage = Number(params?.page) || 1;

    const baseTitle = metaConfig[filterKey]?.title || metaConfig.all.title;
    const title =
        currentPage > 1 ? `${baseTitle} (الصفحة ${currentPage})` : baseTitle;

    const baseDescription =
        metaConfig[filterKey]?.description || metaConfig.all.description;
    const description =
        currentPage > 1
            ? `${baseDescription} - الصفحة ${currentPage}`
            : baseDescription;

    const baseUrl = "https://yourwebsite.com/projects";
    const currentUrl = `${baseUrl}?filter=${filter}&page=${currentPage}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
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
            title,
            description,
            images: ["https://yourwebsite.com/images/project-banner.jpg"],
        },
        alternates: {
            canonical: currentUrl,
            prev:
                currentPage > 1
                    ? `${baseUrl}?filter=${filter}&page=${currentPage - 1}`
                    : undefined,
            next: `${baseUrl}?filter=${filter}&page=${currentPage + 1}`,
        },
    };
}

// === Main Page Component ===
export default function ProjectsPage() {
    return (
        <div className="rtl">
            <Header />
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

            {/* ✅ حطينا ProjectsPageClient داخل Suspense */}
            <Suspense fallback={<div>جاري التحميل...</div>}>
                <ProjectsPageClient />
            </Suspense>

            <Footer />
        </div>
    );
}
