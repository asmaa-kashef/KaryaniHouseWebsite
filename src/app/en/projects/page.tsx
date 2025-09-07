import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import ProjectsPageClient from "../../components/ProjectsPageClient";

// === Mapping SEO Titles & Descriptions ===
const metaConfig = {
    all: {
        title: "Villa & Structural Repair Projects | Karyani House Abu Dhabi",
        description: "Explore Karyani House's latest villa construction, structural repair, and cladding projects in Abu Dhabi. View details and quality work examples.",
    },
    Repair: {
        title: "Structural Repair Projects in Abu Dhabi | Karyani House",
        description: "Browse our structural repair projects in Abu Dhabi, showcasing durability and expert engineering.",
    },
    Villa: {
        title: "Villa Construction Projects in Abu Dhabi | Karyani House",
        description: "Discover our modern and luxury villa construction projects across Abu Dhabi.",
    },
    Cladding: {
        title: "Cladding Projects in Abu Dhabi | Karyani House",
        description: "See our professional cladding projects that combine aesthetics with durability in Abu Dhabi.",
    },
};

type FilterKeys = "all" | "Repair" | "Villa" | "Cladding";

// ✅ Next.js 15: Await searchParams (it's a Promise)
export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const filter = (params.filter as string) || "all";
    const currentPage = Number(params.page) || 1;

    const filterKey = filter as FilterKeys;
    const baseTitle = metaConfig[filterKey]?.title || metaConfig.all.title;
    const title = currentPage > 1 ? `${baseTitle} (Page ${currentPage})` : baseTitle;

    const baseDescription = metaConfig[filterKey]?.description || metaConfig.all.description;
    const description = currentPage > 1 ? `${baseDescription} - Page ${currentPage}` : baseDescription;

    const baseUrl = "https://karyani-house.com/projects";
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
                    url: "https://karyani-house.com/images/project-banner.jpg",
                    alt: "Karyani House Projects",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["https://karyani-house.com/images/project-banner.jpg"],
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
        <>
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/project.jpg)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Our Projects</h1>
                            <span className="title">
                                Showcasing Villa Construction, Structural Repair & Cladding
                            </span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Projects</li>
                        </ul>
                    </div>
                </div>
            </section>

            <ProjectsPageClient />

            <Footer />
        </>
    );
}
