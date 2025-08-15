"use client";
import React, { useState } from "react";
import Image from "next/image";

type Member = {
    name: string;
    role: string;
    video: string;
    image?: string; // optional image for the member
};

const TeamWithVideos = () => {
    const [category, setCategory] = useState("villa");

    const videosByCategory: Record<string, Member[]> = {
        villa: [
            { name: "John Doe", role: "Project Manager", video: "/video/final.mp4", image: "/images/team1.jpg" },
            { name: "Jane Smith", role: "Designer", video: "/video/final2.mp4", image: "/images/team2.jpg" },
            { name: "Mike Johnson", role: "Engineer", video: "/video/final3.mp4", image: "/images/team3.jpg" },
        ],
        repair: [
            { name: "Alice Brown", role: "Structural Engineer", video: "/video/repair1.mp4", image: "/images/repair1.jpg" },
            { name: "Bob White", role: "Technician", video: "/video/repair2.mp4", image: "/images/repair2.jpg" },
            { name: "Charlie Green", role: "Supervisor", video: "/video/repair3.mp4", image: "/images/repair3.jpg" },
        ],
        cladding: [
            { name: "David Lee", role: "Project Lead", video: "/video/cladding1.mp4", image: "/images/cladding1.jpg" },
            { name: "Emma Wilson", role: "Architect", video: "/video/cladding2.mp4", image: "/images/cladding2.jpg" },
            { name: "Frank Harris", role: "Designer", video: "/video/cladding3.mp4", image: "/images/cladding3.jpg" },
        ],
    };

    const members = videosByCategory[category] || [];

    return (
        <section className="team-section py-5">
            <div className="auto-container">
                {/* Section Title */}
                <div className="sec-title text-center mb-4">
                    <span className="title"></span>
                    <h2>Exclusive Tour of Our Selected Projects</h2>
                </div>

                {/* Category Buttons */}
                <div className="text-center mb-5">
                    {["villa", "repair", "cladding"].map((cat) => (
                        <button
                            key={cat}
                            className={`theme-btn btn-style-one mx-2 ${category === cat ? "active" : ""}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat === "villa"
                                ? "VILLA Construction"
                                : cat === "repair"
                                    ? "Structure Repair"
                                    : "Cladding Project"}
                        </button>
                    ))}
                </div>

                {/* Team Members with Videos */}
                <div className="row clearfix">
                    {members.map((member, idx) => (
                        <div key={idx} className="team-block col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="inner-box">
                                <div className="image-box">
                                    <div className="image" style={{ height: "370px", overflow: "hidden" }}>
                                        <video
                                            src={member.video}
                                            controls
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </div>

                                    {/* Optional Image using Next.js Image */}
                                    {member.image && (
                                        <div className="member-image mt-2" style={{ textAlign: "center" }}>
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={150}
                                                height={150}
                                                className="rounded-circle"
                                            />
                                        </div>
                                    )}

                                    {/* Social Links */}
                                    <ul className="social-links mt-2">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
                                    </ul>

                                    {/* Member Name */}
                                    <h3 className="name">{member.name}</h3>
                                </div>

                                {/* Member Role */}
                                <span className="designation">{member.role}</span>
                            </div>
                        </div>
                    ))}

                    {/* No Videos Fallback */}
                    {members.length === 0 && (
                        <div className="col-12 text-center">
                            <p>No videos available for this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamWithVideos;
