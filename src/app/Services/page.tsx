"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

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
};

export default function ServicesPage() {
    const [servicesData, setServicesData] = useState<Record<string, ServiceData> | null>(null);
    const [activeTab, setActiveTab] = useState("precautions");
    const searchParams = useSearchParams();
    const router = useRouter();

    const defaultService = "villaConstruction";
    const selectedService = searchParams?.get("service") || defaultService;

    useEffect(() => {
        fetch("/data/servicesData.json")
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                setServicesData(data);
            })
            .catch((error) => {
                console.error("Failed to load services data:", error);
                setServicesData(null);
            });
    }, []);

    // Redirect if invalid service after data loads
    useEffect(() => {
        if (servicesData && !(selectedService in servicesData)) {
            router.replace(`/Services?service=${defaultService}`);
        }
    }, [servicesData, selectedService, router]);

    if (!servicesData) {
        return <div>Loading services data...</div>;
    }

    if (!(selectedService in servicesData)) {
        // Show nothing while redirect happens
        return null;
    }

    const data = servicesData[selectedService];

    return (
        <>
            <Head>
                <title>{data.title} | Karyani House</title>
                <meta
                    name="description"
                    content={`Discover our specialized services in ${data.title.toLowerCase()}.`}
                />
            </Head>

            <Header />

            {/* Page Title */}
            <section className="page-title" style={{ backgroundImage: "url(/images/background/cons.jpg)" }}>
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Service Detail</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>Service Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sidebar Page Container */}
            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Sidebar */}
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar services-sidebar">
                                {/* Blog Category Widget */}
                                <div className="sidebar-widget sidebar-blog-category">
                                    <ul className="blog-cat">
                                        {Object.keys(servicesData).map((key) => (
                                            <li key={key} className={key === selectedService ? "active" : ""}>
                                                <Link href={`/Services?service=${key}`}>{servicesData[key].title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Brochures */}
                                <div className="sidebar-widget brochure-widget">
                                    <h3 className="sidebar-title">Download Brochures</h3>
                                    <div className="brochure-box">
                                        <div className="inner">
                                            <span className="icon fa fa-file-pdf-o"></span>
                                            <div className="text">Project-One .pdf</div>
                                        </div>
                                        <a href="#" className="overlay-link"></a>
                                    </div>
                                    <div className="brochure-box">
                                        <div className="inner">
                                            <span className="icon fa fa-file-word-o"></span>
                                            <div className="text">Project-One .wd</div>
                                        </div>
                                        <a href="#" className="overlay-link"></a>
                                    </div>
                                    <div className="brochure-box">
                                        <div className="inner">
                                            <span className="icon fa fa-file-powerpoint-o"></span>
                                            <div className="text">Project-One .ppt</div>
                                        </div>
                                        <a href="#" className="overlay-link"></a>
                                    </div>
                                </div>

                                {/* Help Box */}
                                <div
                                    className="help-box"
                                    style={{ backgroundImage: "url(/images/resource/brochure-bg.jpg)" }}
                                >
                                    <div className="inner">
                                        <span className="title">Quick Contact</span>
                                        <h2>Get Solution</h2>
                                        <div className="text">
                                            Contact us at the Interior office nearest to you or submit a business inquiry
                                            online.
                                        </div>
                                        <Link className="theme-btn btn-style-three" href="/contact">
                                            Contact
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* Content Side */}
                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-detail">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <img src={data.mainImage} alt={data.mainImageAlt} />
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
                                                <div className="image">
                                                    <img src={data.featureImage} alt={data.featureImageAlt} />
                                                </div>
                                            </div>
                                        </div>

                                        <blockquote>
                                            {data.quote}
                                            <cite>{data.quoteAuthor}</cite>
                                        </blockquote>
                                    </div>
                                </div>

                                {/* Product Info Tabs */}
                                <div className="product-info-tabs">
                                    <div className="prod-tabs tabs-box">
                                        <ul className="tab-btns tab-buttons clearfix">
                                            <li
                                                className={activeTab === "precautions" ? "tab-btn active-btn" : "tab-btn"}
                                                onClick={() => setActiveTab("precautions")}
                                            >
                                                Precautions
                                            </li>
                                            <li
                                                className={activeTab === "intelligence" ? "tab-btn active-btn" : "tab-btn"}
                                                onClick={() => setActiveTab("intelligence")}
                                            >
                                                Intelligence
                                            </li>
                                            <li
                                                className={activeTab === "specializations" ? "tab-btn active-btn" : "tab-btn"}
                                                onClick={() => setActiveTab("specializations")}
                                            >
                                                Specializations
                                            </li>
                                        </ul>
                                        <div className="tabs-content">
                                            <div
                                                className={activeTab === "precautions" ? "tab active-tab" : "tab"}
                                                id="prod-details"
                                            >
                                                <div className="content">
                                                    <p>{data.tabs.precautions}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={activeTab === "intelligence" ? "tab active-tab" : "tab"}
                                                id="prod-spec"
                                            >
                                                <div className="content">
                                                    <p>{data.tabs.intelligence}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={activeTab === "specializations" ? "tab active-tab" : "tab"}
                                                id="prod-reviews"
                                            >
                                                <div className="content">
                                                    <p>{data.tabs.specializations}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Product Info Tabs */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
