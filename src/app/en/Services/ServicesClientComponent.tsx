"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

type ServiceData = {
    title: string;
    mainImage: string;
    mainImageAlt: string;
    introStrong: string;
    introParagraph: string;
    strategyTitle: string;
    strategyParagraph: string;
    featuresTitle: string;
    featuresList: string[];
    featureImage: string;
    featureImageAlt: string;
    quote: string;
    quoteAuthor: string;
    tabs: {
        precautions: string;
        intelligence: string;
        specializations: string;
    };
    seo: {
        metaTitle: string;
        metaDescription: string;
    };
};

export default function ServicesClientComponent() {
    const [servicesData, setServicesData] = useState<Record<string, ServiceData> | null>(null);
    const [activeTab, setActiveTab] = useState("precautions");
    const searchParams = useSearchParams();
    const router = useRouter();

    const defaultServiceKey = "villaConstruction";
    const selectedServiceKey = searchParams?.get("service") || defaultServiceKey;

    useEffect(() => {
        fetch("/data/servicesData.json")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => setServicesData(data))
            .catch((error) => {
                console.error("Failed to load services data:", error);
                setServicesData(null);
            });
    }, []);

    useEffect(() => {
        if (servicesData && !(selectedServiceKey in servicesData)) {
            router.replace(`/en/Services?service=${defaultServiceKey}`);
        }
    }, [servicesData, selectedServiceKey, router]);

    // New useEffect to handle meta tag updates
    useEffect(() => {
        if (servicesData && selectedServiceKey in servicesData) {
            const currentService = servicesData[selectedServiceKey];
            document.title = currentService.seo.metaTitle;

            const metaDescriptionTag = document.querySelector('meta[name="description"]');
            if (metaDescriptionTag) {
                metaDescriptionTag.setAttribute("content", currentService.seo.metaDescription);
            } else {
                const newMetaTag = document.createElement("meta");
                newMetaTag.name = "description";
                newMetaTag.content = currentService.seo.metaDescription;
                document.head.appendChild(newMetaTag);
            }
        }
    }, [servicesData, selectedServiceKey]);

    if (!servicesData) return <div>Loading services data...</div>;
    if (!(selectedServiceKey in servicesData)) return null;

    const data = servicesData[selectedServiceKey];

    const tabNames = {
        precautions: "Precautions",
        intelligence: "Intelligence",
        specializations: "Specializations",
    };

    return (
        <div className="sidebar-page-container">
            {/* Using Next.js's Head component for dynamic meta tags */}
            <Head>
                <title>{data.seo.metaTitle}</title>
                <meta name="description" content={data.seo.metaDescription} />
            </Head>

            <div className="auto-container">
                <div className="row clearfix">
                    {/* Sidebar */}
                    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                        <aside className="sidebar services-sidebar">
                            <div className="sidebar-widget sidebar-blog-category">
                                <ul className="blog-cat space-y-2">
                                    {Object.keys(servicesData).map((key) => (
                                        <li
                                            key={key}
                                            className={
                                                key === selectedServiceKey
                                                    ? "active bg-orange-500 text-white font-semibold rounded-md shadow-lg px-3 py-2 transition"
                                                    : "px-3 py-2 rounded-md hover:bg-gray-100 transition"
                                            }
                                        >
                                            <Link href={`/en/Services?service=${key}`}>
                                                {servicesData[key].title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-widget brochure-widget shadow-lg rounded-md p-4">
                                <h3 className="sidebar-title">Download Brochures</h3>
                                {["pdf", "word", "ppt"].map((type) => (
                                    <div key={type} className="brochure-box">
                                        <div className="inner">
                                            <span className={`icon fa fa-file-${type}-o`}></span>
                                            <div className="text">Project-One .{type}</div>
                                        </div>
                                        <a href="#" className="overlay-link"></a>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="help-box shadow-lg rounded-md"
                                style={{ backgroundImage: "url(/images/resource/brochure-bg.jpg)" }}
                            >
                                <div className="inner p-4">
                                    <span className="title">Quick Contact</span>
                                    <h2>Get Solution</h2>
                                    <div className="text">
                                        Contact us at the Interior office nearest to you or submit a business inquiry online.
                                    </div>
                                    <Link className="theme-btn btn-style-three" href={`/en/contact`}>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* Content */}
                    <div className="content-side col-lg-8 col-md-12 col-sm-12">
                        <div className="service-detail">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image shadow-2xl rounded-2xl overflow-hidden">
                                        <Image
                                            src={data.mainImage}
                                            alt={data.mainImageAlt}
                                            width={800}
                                            height={500}
                                            priority
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </figure>
                                </div>

                                <h2>{data.title}</h2>
                                <div className="text">
                                    <strong>{data.introStrong}</strong>
                                    <p>{data.introParagraph}</p>
                                    <h3>{data.strategyTitle}</h3>
                                    <p>{data.strategyParagraph}</p>

                                    <div className="two-column row">
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <h3>{data.featuresTitle}</h3>
                                            <ul>
                                                {data.featuresList.map((feature, idx) => (
                                                    <li key={idx}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="column col-lg-6 col-md-6 col-sm-12">
                                            <div className="image" style={{ borderRadius: "15px", overflow: "hidden", boxShadow: "0 8px 25px rgba(0,0,0,0.4)" }}>
                                                <Image
                                                    src={data.featureImage}
                                                    alt={data.featureImageAlt}
                                                    width={500}
                                                    height={300}
                                                    style={{ width: "100%", height: "auto", display: "block" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <blockquote
                                        style={{
                                            color: "white",
                                            fontStyle: "italic",
                                            borderLeft: "4px solid #fff",
                                            padding: "1rem 1.5rem",
                                            margin: "1.5rem 0",
                                            backgroundColor: "chocolate",
                                            borderRadius: "20px",
                                            boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                                        }}
                                    >
                                        {data.quote}
                                        <cite
                                            style={{
                                                display: "block",
                                                marginTop: "0.5rem",
                                                color: "#fff",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {data.quoteAuthor}
                                        </cite>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="product-info-tabs">
                                <div className="prod-tabs tabs-box">
                                    <ul className="tab-btns flex gap-3 mb-4">
                                        {["precautions", "intelligence", "specializations"].map((tab) => (
                                            <li
                                                key={tab}
                                                className={
                                                    activeTab === tab
                                                        ? "tab-btn active-btn bg-chocolate text-white font-semibold rounded-md shadow-lg px-4 py-2 transition"
                                                        : "tab-btn bg-gray-100 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-200 transition"
                                                }
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {tabNames[tab as keyof typeof tabNames]}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="tabs-content">
                                        {["precautions", "intelligence", "specializations"].map((tab) => (
                                            <div
                                                key={tab}
                                                className={activeTab === tab ? "tab active-tab" : "hidden"}
                                            >
                                                <div className="content">
                                                    <p>{data.tabs[tab as keyof typeof data.tabs]}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}