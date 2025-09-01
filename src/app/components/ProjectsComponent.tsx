
'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Project {
    img: string;
    name: string;
    title: string;
    text: string;
}

const componentContent = {
    en: {
        heading: "Our Best Work",
        subheading: "Project",
        allProjectsLink: "All Projects",
        viewProjectLink: "View Project"
    },
    ar: {
        heading: "أفضل أعمالنا",
        subheading: "المشاريع",
        allProjectsLink: "جميع المشاريع",
        viewProjectLink: "عرض المشروع"
    }
};

export default function ProjectsComponent() {
    const [projects, setProjects] = useState<Project[]>([]);
    const pathname = usePathname();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = componentContent[currentLang];

    useEffect(() => {
        fetch('/data/projects.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then((data) => setProjects(data))
            .catch((err) => console.error('Error loading projects:', err));
    }, [currentLang]);

    return (
        <section className="projects-section-two" dir={currentLang === "ar" ? "rtl" : "ltr"}>
            <div className="auto-container">
                <div className="upper-box clearfix">
                    <div className="sec-title">
                        <span className="float-text">{content.subheading}</span>
                        <h2>{content.heading}</h2>
                    </div>
                    <div className="link-box">
                        <Link href={`/${currentLang}/projects`}>
                            {content.allProjectsLink} <i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <div className="projects-carousel-two owl-carousel owl-theme">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-block-two">
                            <div className="image-box">
                                <figure className="image">
                                    <Image
                                        src={project.img || "/images/placeholder.jpg"}
                                        alt={project.name}
                                        width={400}
                                        height={250}
                                        style={{ objectFit: "cover" }}
                                    />
                                </figure>
                            </div>

                            <div className="info-box">
                                <div className="inner-box">
                                    <span className="title">{project.title}</span>
                                    <h3>{project.name}</h3>
                                    <div className="text">{project.text}</div>
                                    <div className="link-box">
                                        <Link href={`/${currentLang}/projects`}>
                                            {content.viewProjectLink}
                                        </Link>
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
