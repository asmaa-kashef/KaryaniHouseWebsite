'use client';

import React, { useEffect, useState } from 'react';

interface Project {
    img: string;
    name: string;
    title: string;
    text: string;
}

export default function ProjectsComponent() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error loading projects:', err));
    }, []);

    return (
        <section className="projects-section-two">
            <div className="auto-container">
                <div className="upper-box clearfix">
                    <div className="sec-title">
                        <span className="float-text">Project</span>
                        <h2>Our Best Work</h2>
                    </div>
                    <div className="link-box">
                        <a href="projects.html">
                            All Project <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="projects-carousel-two owl-carousel owl-theme">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-block-two">
                            <div className="image-box">
                                <figure className="image">
                                    <img src={project.img} alt={project.name} />
                                </figure>
                            </div>
                            <div className="info-box">
                                <div className="inner-box">
                                    <span className="title">{project.title}</span>
                                    <h3>{project.name}</h3>
                                    <div className="text">{project.text}</div>
                                    <div className="link-box">
                                        <a href="project-detail.html">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
