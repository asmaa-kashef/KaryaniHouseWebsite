import { Metadata } from "next";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";
import ImageGalleryClient from "../../../components/ImageGalleryClient";
import ContactLink from "../../../components/ContactLink";
import Header from "../../../components/Header";
import Footer from "../../../components/HomeFooter";
interface Project {
    id: number;
    slug: string;
    category?: string;
    title: string;
    projectName: string;
    location: string;
    zone: string;
    permitNumber?: string;
    firstIssueDate?: string;
    sector?: string;
    plotNumber?: string;
    landUse?: string;
    plotArea?: string;
    designerAndSupervisor?: string;
    contractor?: string;
    villaDescription: string;
    images?: string[];
    architectImages?: string[];
    mapEmbedUrl?: string;
    metaTitle?: string;
    metaDescription?: string;
    seoKeyword?: string;
    h1?: string;
    h2Sections?: string[];
}

// Function to read project data from the local JSON file on the server.
async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const jsonDirectory = path.join(process.cwd(), 'public', 'data');
        const fileContents = await fs.readFile(jsonDirectory + '/constructionproject.json', 'utf8');
        const data: Project[] = JSON.parse(fileContents);
        return data.find(p => p.slug === slug) || null;
    } catch (error) {
        console.error("Failed to read project data:", error);
        return null;
    }
}

// This function generates dynamic metadata for the page.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
    const canonicalUrl = `https://karyani-house.com/projects/${params.slug}`;

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
            openGraph: {
                url: canonicalUrl,
            },
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    const metaTitle = project.metaTitle || `${project.title} | Karyani House – Abu Dhabi`;
    const metaDescription = project.metaDescription || `Discover ${project.title} in ${project.location}. Expert villa construction, structural repair, cladding, and interior design by Karyani House.`;
    const metaKeywords = project.seoKeyword || `${project.title}, ${project.projectName}, villa construction Abu Dhabi, structural repair, cladding, interior design, Karyani House`;
    const ogImage = project.images?.[0] || "/images/logo.png";

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: metaKeywords,
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: canonicalUrl,
            images: [ogImage],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [ogImage],
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return <p style={{ textAlign: "center", marginTop: 30 }}>Project not found.</p>;
    }

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
                            <h1>{project.title}</h1>
                            <span className="title">The Interior speaks for itself</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>{project.title}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section
                className="project-details-section"
                style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}
            >
                <div className="auto-container" style={{ maxWidth: 1200, margin: "auto" }}>
                    <div className="upper-box" style={{ marginBottom: 50 }}>
                        {project.images && project.images.length > 0 && (
                            <ImageGalleryClient
                                images={project.images}
                                title={project.title}
                            />
                        )}
                    </div>

                    <div className="lower-content" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                        <div
                            className="content-column"
                            style={{
                                flex: "1 1 60%",
                                minWidth: 300,
                                backgroundColor: "#fff",
                                padding: 25,
                                borderRadius: 12,
                                boxShadow: "0 0 12px rgb(0 0 0 / 0.1)",
                            }}
                        >
                            <h2 style={{ marginBottom: 20 }}>Project Description</h2>
                            <p style={{ lineHeight: 1.6 }}>{project.villaDescription}</p>

                            <h4 style={{ marginTop: 30 }}>Project Challenge</h4>
                            <p>
                                This project required full construction from scratch, meeting tight deadlines, and
                                implementing smart systems integration.
                            </p>
                            <ul style={{ marginTop: 15, paddingLeft: 20 }}>
                                <li>Full construction from foundation to finish</li>
                                <li>Installation of smart systems</li>
                                <li>Advanced aluminum and ceramic work</li>
                                <li>Interior and exterior stairs</li>
                            </ul>

                            <h4 style={{ marginTop: 30 }}>What We Did</h4>
                            <p>
                                Managed end-to-end construction including permits, foundation, structure, interior
                                work, and smart home installations.
                            </p>

                            <h4 style={{ marginTop: 30 }}>Result</h4>
                            <p>
                                Successfully delivered a modern villa on schedule with smart integrations and premium
                                finishing.
                            </p>

                            {project.architectImages && project.architectImages.length > 0 && (
                                <div className="architect-gallery" style={{ marginTop: 50 }}>
                                    <h3 style={{ marginBottom: 20 }}>Architect Plans</h3>
                                    <ImageGalleryClient
                                        images={project.architectImages}
                                        title={`${project.title} Architect Plans`}
                                        isArchitectGallery={true}
                                    />
                                </div>
                            )}
                        </div>

                        <aside
                            className="info-column"
                            style={{
                                flex: "1 1 35%",
                                minWidth: 280,
                                backgroundColor: "#fff",
                                padding: 25,
                                borderRadius: 12,
                                boxShadow: "0 0 12px rgb(0 0 0 / 0.1)",
                                height: "fit-content",
                            }}
                        >
                            <h3 style={{ marginBottom: 20 }}>Project Information</h3>
                            <p style={{ marginBottom: 15, color: "#555" }}>
                                Details of the construction project handled by Karyani House.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, color: "#333", lineHeight: 1.7 }}>
                                <li>
                                    <strong>Zone:</strong> {project.zone}
                                </li>
                                <li>
                                    <strong>Location:</strong>{" "}
                                    {project.mapEmbedUrl ? (
                                        <a
                                            href={project.mapEmbedUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#0077cc", textDecoration: "underline" }}
                                        >
                                            {project.location}
                                        </a>
                                    ) : (
                                        project.location
                                    )}
                                </li>
                                <li>
                                    <strong>Project Name:</strong> {project.projectName}
                                </li>
                                <li>
                                    <strong>Permit Number:</strong> {project.permitNumber}
                                </li>
                                <li>
                                    <strong>First Issue Date:</strong> {project.firstIssueDate}
                                </li>
                                <li>
                                    <strong>Sector:</strong> {project.sector}
                                </li>
                                <li>
                                    <strong>Plot Number:</strong> {project.plotNumber}
                                </li>
                                <li>
                                    <strong>Land Use:</strong> {project.landUse}
                                </li>
                                <li>
                                    <strong>Plot Area (m²):</strong> {project.plotArea}
                                </li>
                                <li>
                                    <strong>Designer and Supervisor:</strong> {project.designerAndSupervisor}
                                </li>
                                <li>
                                    <strong>Contractor:</strong> {project.contractor}
                                </li>
                            </ul>

                            {project.mapEmbedUrl && (
                                <iframe
                                    src={project.mapEmbedUrl}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, marginTop: 20, borderRadius: 8 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            )}

                            <div
                                className="help-box-two"
                                style={{
                                    marginTop: 40,
                                    padding: 20,
                                    backgroundColor: "#f2f2f2",
                                    borderRadius: 8,
                                    textAlign: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "700",
                                        fontSize: 18,
                                        display: "block",
                                        marginBottom: 10,
                                    }}
                                >
                                    Quick Contact
                                </span>
                                <h2 style={{ marginBottom: 10 }}>Get Solution</h2>
                                <p style={{ marginBottom: 15 }}>
                                    Contact us at the nearest office or submit a request online.
                                </p>
                                <ContactLink />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </>
           
    );
}
