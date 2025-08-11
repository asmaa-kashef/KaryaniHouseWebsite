'use client';
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";

interface Project {
    img: string;
    classes: string;
    slug: string;
}

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch("/data/Categories.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    // Filter projects by category
    const filteredProjects = projects.filter((p) =>
        filter === "all" ? true : p.classes.includes(filter)
    );

    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Head>
                <title>Our Projects | Karyani House</title>
                <meta
                    name="description"
                    content="Explore our latest projects in villa construction, structural repair, and cladding."
                />
            </Head>

            <Header />

            <section className="page-title" style={{ backgroundImage: 'url(/images/background/project.jpg)' }}>
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Project Detail</h1>
                            <span className="title">The Interior speaks for itself</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            <li>Project Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section style={{ padding: "40px 20px", maxWidth: '1200px', margin: 'auto' }}>
                {/* Filter Buttons */}
                <div style={{ textAlign: "center", marginBottom: 30 }}>
                    {[
                        { label: "All", value: "all" },
                        { label: "Structural Repair", value: "Repair" },
                        { label: "Villa Construction", value: "Villa" },
                        { label: "Cladding", value: "Cladding" },
                    ].map(({ label, value }) => (
                        <button
                            key={value}
                            onClick={() => handleFilterChange(value)}
                            style={{
                                cursor: "pointer",
                                margin: "0 8px",
                                padding: "10px 18px",
                                borderRadius: 25,
                                border: filter === value ? "2px solid #007bff" : "2px solid #ccc",
                                backgroundColor: filter === value ? "#007bff" : "#fff",
                                color: filter === value ? "#fff" : "#333",
                                fontWeight: filter === value ? "600" : "400",
                                transition: "all 0.3s",
                                minWidth: 150,
                            }}
                            aria-pressed={filter === value}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "24px",
                        justifyContent: "center",
                    }}
                >
                    {paginatedProjects.length === 0 ? (
                        <p style={{ width: '100%', textAlign: 'center', fontSize: 18 }}>
                            No projects found for selected category.
                        </p>
                    ) : (
                        paginatedProjects.map(({ img, classes, slug }, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: "1 1 calc(33.333% - 24px)",
                                    maxWidth: "calc(33.333% - 24px)",
                                    boxShadow: "0 4px 8px rgb(0 0 0 / 0.1)",
                                    borderRadius: 10,
                                    overflow: "hidden",
                                    position: "relative",
                                    cursor: "pointer",
                                    backgroundColor: "#fff",
                                    transition: "transform 0.3s",
                                }}
                                onClick={() => window.location.href = `/projectdetails/${slug}`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') window.location.href = `/projectdetails/${slug}`;
                                }}
                                role="link"
                                tabIndex={0}
                                aria-label={`View details for project ${index + 1}`}
                            >
                                <img
                                    src={img}
                                    alt={`Project ${index + 1}`}
                                    style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                                />
                                <div
                                    style={{
                                        padding: "15px",
                                        fontWeight: "600",
                                        fontSize: "1.1rem",
                                        color: "chocolate",  // <-- Changed here to chocolate color
                                        textAlign: "center",
                                        backgroundColor: "#f9f9f9",
                                    }}
                                >
                                    {slug} Project
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0,0,0,0.5)",
                                        opacity: 0,
                                        color: "#fff",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: 18,
                                        fontWeight: "bold",
                                        transition: "opacity 0.3s",
                                    }}
                                    className="overlay"
                                >
                                    <p>View Details</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div
                        style={{
                            marginTop: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 10,
                            flexWrap: "wrap",
                        }}
                    >
                        <button
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            style={{
                                padding: "8px 14px",
                                borderRadius: 5,
                                border: "1px solid #ccc",
                                backgroundColor: currentPage === 1 ? "#eee" : "#fff",
                                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                            }}
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                aria-current={currentPage === i + 1 ? "page" : undefined}
                                style={{
                                    padding: "8px 14px",
                                    borderRadius: 5,
                                    border: currentPage === i + 1 ? "2px solid #007bff" : "1px solid #ccc",
                                    backgroundColor: currentPage === i + 1 ? "#007bff" : "#fff",
                                    color: currentPage === i + 1 ? "#fff" : "#000",
                                    cursor: "pointer",
                                    minWidth: 36,
                                }}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                currentPage < totalPages && handlePageChange(currentPage + 1)
                            }
                            disabled={currentPage === totalPages}
                            style={{
                                padding: "8px 14px",
                                borderRadius: 5,
                                border: "1px solid #ccc",
                                backgroundColor: currentPage === totalPages ? "#eee" : "#fff",
                                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                            }}
                        >
                            Next
                        </button>
                    </div>
                )}
            </section>

            <Footer />

            {/* Extra style for overlay hover */}
            <style>{`
                div[role="link"]:hover .overlay,
                div[role="link"]:focus .overlay {
                  opacity: 1;
                }
            `}</style>
        </>
    );
}
