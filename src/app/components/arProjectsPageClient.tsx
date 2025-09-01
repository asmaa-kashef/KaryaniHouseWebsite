'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

interface Project {
    img: string;
    classes: string;
    slug: string;
}

export default function ProjectsPageClient() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialFilter = searchParams.get("filter") || "all";
    const initialPage = Number(searchParams.get("page")) || 1;

    const [projects, setProjects] = useState<Project[]>([]);
    const [filter, setFilter] = useState<string>(initialFilter);
    const [currentPage, setCurrentPage] = useState<number>(initialPage);

    const itemsPerPage = 6;

    useEffect(() => {
        fetch("/data/Categories.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("filter", filter);
        newSearchParams.set("page", String(currentPage));
        router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, [filter, currentPage, router, searchParams]);

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
        <section style={{ padding: "40px 20px", maxWidth: "1200px", margin: "auto" }}>
            {/* Filter Buttons */}
            <div style={{ textAlign: "center", marginBottom: 30 }}>
                {[
                    { label: "الكل", value: "all" },
                    { label: "إصلاح الهياكل", value: "Repair" },
                    { label: "بناء الفيلات", value: "Villa" },
                    { label: "تكسية الواجهات", value: "Cladding" },
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
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        }}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {paginatedProjects.length === 0 ? (
                    <p style={{ width: "100%", textAlign: "center", fontSize: 18 }}>
                        لا توجد مشاريع للفئة المحددة.
                    </p>
                ) : (
                    paginatedProjects.map(({ img, slug }, index) => (
                        <Link
                            key={index}
                            href={`project/${slug}`}
                            style={{
                                flex: "1 1 calc(33.333% - 24px)",
                                maxWidth: "calc(33.333% - 24px)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                borderRadius: 10,
                                overflow: "hidden",
                                position: "relative",
                                cursor: "pointer",
                                backgroundColor: "#fff",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            role="link"
                        >
                            <Image
                                src={img}
                                alt={`${slug} مشروع من كريانى هاوس في أبوظبي`}
                                width={400}
                                height={220}
                                style={{ width: "100%", height: 220, objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    padding: "15px",
                                    fontWeight: "600",
                                    fontSize: "1.1rem",
                                    color: "chocolate",
                                    textAlign: "center",
                                    backgroundColor: "#f9f9f9",
                                }}
                            >
                                مشروع {slug}
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
                                <p>عرض التفاصيل</p>
                            </div>
                        </Link>
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
                        onClick={() =>
                            currentPage > 1 && handlePageChange(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                    >
                        السابق
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            aria-current={currentPage === i + 1 ? "page" : undefined}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() =>
                            currentPage < totalPages && handlePageChange(currentPage + 1)
                        }
                        disabled={currentPage === totalPages}
                    >
                        التالي
                    </button>
                </div>
            )}

            <style>{`
        [role="link"]:hover,
        [role="link"]:focus {
          transform: translateY(-5px);
          box-shadow: 12px 25px rgba(0,0,0,0.2);
        }
        [role="link"]:hover .overlay,
        [role="link"]:focus .overlay {
          opacity: 1;
        }
        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }
        button {
          padding: 8px 14px;
          border-radius: 5px;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        button:disabled {
          background: #eee;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .projects-grid {
            flex-direction: column;
          }
          .projects-grid > a {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
        </section>
    );
}
