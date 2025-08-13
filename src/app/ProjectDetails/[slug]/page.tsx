'use client';

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/HomeFooter";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProjectDetail() {
    const [project, setProject] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/constructionproject.json")
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data) => {
                setProject(data[0]); // Adjust if selecting by slug
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load project data.");
                setLoading(false);
            });
    }, []);

    if (error) {
        return <p style={{ textAlign: "center", color: "red", marginTop: 30 }}>{error}</p>;
    }

    if (loading) {
        return (
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 18, marginTop: 30 }}>
                Loading project...
            </p>
        );
    }

    const mainImages = (project.images || []).map((img: string) => ({
        original: img,
        thumbnail: img,
    }));

    const architectImages = (project.architectImages || []).map((img: string) => ({
        original: img,
        thumbnail: img,
    }));

    const renderImageItem = (item: any) => (
        <Image
            src={item.original}
            alt={item.originalAlt || project.title || "Project Image"}
            width={800}
            height={500}
            style={{
                objectFit: "contain",
                width: "70%",
                margin: "auto",
                display: "block",
                borderRadius: 8,
            }}
        />
    );

    return (
        <>
            <Head>
                <title>{project.title} | Karyani House</title>
            </Head>

            <Header />

            {/* Page Title Section */}
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/project.jpg)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Project Detail</h1>
                            <span className="title">The Interior speaks for itself</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Project Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <section
                className="project-details-section"
                style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}
            >
                <div className="auto-container" style={{ maxWidth: 1200, margin: "auto" }}>
                    {/* Image Gallery */}
                    <div className="upper-box" style={{ marginBottom: 50 }}>
                        <ImageGallery
                            items={mainImages}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showNav={true}
                            slideOnThumbnailOver={true}
                            thumbnailPosition="left"
                            renderItem={renderImageItem}
                        />
                    </div>

                    <div
                        className="lower-content"
                        style={{ display: "flex", gap: 40, flexWrap: "wrap" }}
                    >
                        {/* Left Content */}
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
                                This project required full construction from scratch, meeting tight
                                deadlines, and implementing smart systems integration.
                            </p>

                            <ul
                                className="list-style-one"
                                style={{ marginTop: 15, paddingLeft: 20 }}
                            >
                                <li>Full construction from foundation to finish</li>
                                <li>Installation of smart systems</li>
                                <li>Advanced aluminum and ceramic work</li>
                                <li>Interior and exterior stairs</li>
                            </ul>

                            <h4 style={{ marginTop: 30 }}>What We Did</h4>
                            <p>
                                Managed end-to-end construction including permits, foundation,
                                structure, interior work, and smart home installations.
                            </p>

                            <h4 style={{ marginTop: 30 }}>Result</h4>
                            <p>
                                Successfully delivered a modern villa on schedule with smart
                                integrations and premium finishing.
                            </p>

                            {/* Architect Plans Gallery */}
                            {architectImages.length > 0 && (
                                <div className="architect-gallery" style={{ marginTop: 50 }}>
                                    <h3 style={{ marginBottom: 20 }}>Architect Plans</h3>
                                    <ImageGallery
                                        items={architectImages}
                                        showPlayButton={false}
                                        showFullscreenButton={false}
                                        showNav={true}
                                        slideOnThumbnailOver={true}
                                        thumbnailPosition="bottom"
                                        renderItem={renderImageItem}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar */}
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
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    color: "#333",
                                    lineHeight: 1.7,
                                }}
                            >
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
                                            style={{
                                                color: "#0077cc",
                                                textDecoration: "underline",
                                            }}
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
                                    <strong>Designer and Supervisor:</strong>{" "}
                                    {project.designerAndSupervisor}
                                </li>
                                <li>
                                    <strong>Contractor:</strong> {project.contractor}
                                </li>
                            </ul>

                            {/* Contact Box */}
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
                                <Link
                                    href="/contact"
                                    style={{
                                        display: "inline-block",
                                        backgroundColor: "#007bff",
                                        color: "#fff",
                                        padding: "10px 25px",
                                        borderRadius: 5,
                                        fontWeight: "600",
                                        textDecoration: "none",
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#0056b3")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#007bff")
                                    }
                                >
                                    Contact
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
