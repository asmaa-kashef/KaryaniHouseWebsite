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

// This function runs on the server and sets the dynamic metadata.
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const filter = searchParams.filter as string || "all";
    const currentPage = Number(searchParams.page) || 1;

    const baseTitle = metaConfig[filter]?.title || metaConfig.all.title;
    const title = currentPage > 1 ? `${baseTitle} (Page ${currentPage})` : baseTitle;

    const baseDescription = metaConfig[filter]?.description || metaConfig.all.description;
    const description = currentPage > 1 ? `${baseDescription} - Page ${currentPage}` : baseDescription;

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
                    alt: "Karyani House Projects",
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
            // Prev/Next links for pagination SEO
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
            {/* This section can remain a server component */}
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