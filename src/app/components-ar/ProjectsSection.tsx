"use client";
import React, { useState } from "react";

const TeamWithVideos = () => {
    const [category, setCategory] = useState("villa");

    const videosByCategory: Record<string, {  video: string }[]> = {
        villa: [
            {video: "/video/final.mp4" },
            {  video: "/video/final2.mp4" },
            { video: "/video/final3.mp4" },
        ],
        repair: [
            {  video: "/video/repair1.mp4" },
            {  video: "/video/repair2.mp4" },
            {  video: "/video/repair3.mp4" },
        ],
        cladding: [
            {  video: "/video/cladding1.mp4" },
            { video: "/video/cladding2.mp4" },
            {video: "/video/cladding3.mp4" },
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

                                    {/* Social Links */}
                                    <ul className="social-links">
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
