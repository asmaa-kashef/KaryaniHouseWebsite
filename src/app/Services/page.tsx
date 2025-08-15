"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/HomeFooter";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";

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
        fetch("/data/servicesData.json") // تأكد إن الملف موجود في public/data/
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
        if (servicesData && !(selectedService in servicesData)) {
            router.replace(`/Services?service=${defaultService}`);
        }
    }, [servicesData, selectedService, router]);

    if (!servicesData) return <div>Loading services data...</div>;
    if (!(selectedService in servicesData)) return null;

    const data = servicesData[selectedService];

    return (
        <>
            <Head>
                <title>{data.title} | Karyani House</title>
                <meta name="description" content={`Discover our specialized services in ${data.title.toLowerCase()}.`} />
            </Head>

            <Header />

            <section className="page-title" style={{ backgroundImage: "url(/images/background/cons.jpg)" }}>
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Service Detail</h1>
                            <span className="title">The Interior speak for themselves</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>Service Detail</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="sidebar-page-container">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                            <aside className="sidebar services-sidebar">
                                <div className="sidebar-widget sidebar-blog-category">
                                    <ul className="blog-cat">
                                        {Object.keys(servicesData).map((key) => (
                                            <li key={key} className={key === selectedService ? "active" : ""}>
                                                <Link href={`/Services?service=${key}`}>{servicesData[key].title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </div>

                        <div className="content-side col-lg-8 col-md-12 col-sm-12">
                            <div className="service-detail">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Image
                                                src={data.mainImage}
                                                alt={data.mainImageAlt}
                                                width={800}
                                                height={500}
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
                                                    {data.featuresList.map((feature, idx) => <li key={idx}>{feature}</li>)}
                                                </ul>
                                            </div>
                                            <div className="column col-lg-6 col-md-6 col-sm-12">
                                                <div className="image">
                                                    <Image
                                                        src={data.featureImage}
                                                        alt={data.featureImageAlt}
                                                        width={500}
                                                        height={300}
                                                        style={{ width: "100%", height: "auto" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <blockquote>
                                            {data.quote}
                                            <cite>{data.quoteAuthor}</cite>
                                        </blockquote>
                                    </div>
                                </div>

                                <div className="product-info-tabs">
                                    <div className="prod-tabs tabs-box">
                                        <ul className="tab-btns tab-buttons clearfix">
                                            {["precautions", "intelligence", "specializations"].map((tab) => (
                                                <li
                                                    key={tab}
                                                    className={activeTab === tab ? "tab-btn active-btn" : "tab-btn"}
                                                    onClick={() => setActiveTab(tab)}
                                                >
                                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="tabs-content">
                                            {["precautions", "intelligence", "specializations"].map((tab) => (
                                                <div key={tab} className={activeTab === tab ? "tab active-tab" : "tab"}>
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

            <Footer />
        </>
    );
}
