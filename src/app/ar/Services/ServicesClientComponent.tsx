// src/app/Services/ServicesClientComponent.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function ServicesClientComponent() {
    const [servicesData, setServicesData] = useState<Record<string, ServiceData> | null>(null);
    const [activeTab, setActiveTab] = useState("precautions");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

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
                console.error("فشل تحميل بيانات الخدمات:", error);
                setServicesData(null);
            });
    }, []);

    useEffect(() => {
        if (servicesData && !(selectedServiceKey in servicesData)) {
            router.replace(`/ar/Services?service=${defaultServiceKey}`);
        }
    }, [servicesData, selectedServiceKey, router]);

    if (!servicesData) return <div>جاري تحميل بيانات الخدمات...</div>;
    if (!(selectedServiceKey in servicesData)) return null;

    const data = servicesData[selectedServiceKey];

    const tabNames = {
        precautions: "الاحتياطات",
        intelligence: "الذكاء",
        specializations: "التخصصات",
    };

    const serviceKeysToAr = {
        villaConstruction: "بناء الفلل",
        structureRepair: "ترميم الهياكل",
        cladding: "التكسية",
        aluminumAndGlass: "الألومنيوم والزجاج",
        interiorDesign: "التصميم الداخلي",
    };

    return (
        <div className="sidebar-page-container">
            <div className="auto-container">
                <div className="row clearfix">
                    {/* Sidebar */}
                    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                        <aside className="sidebar services-sidebar">
                            <div className="sidebar-widget sidebar-blog-category">
                                <ul className="blog-cat">
                                    {Object.keys(servicesData).map((key) => (
                                        <li key={key} className={key === selectedServiceKey ? "active" : ""}>
                                            <Link href={`/ar/Services?service=${key}`}>
                                                {serviceKeysToAr[key as keyof typeof serviceKeysToAr] || servicesData[key].title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-widget brochure-widget">
                                <h3 className="sidebar-title">تحميل الكتيبات</h3>
                                {["pdf", "word", "ppt"].map((type) => (
                                    <div key={type} className="brochure-box">
                                        <div className="inner">
                                            <span className={`icon fa fa-file-${type}-o`}></span>
                                            <div className="text">مشروع-واحد .{type}</div>
                                        </div>
                                        <a href="#" className="overlay-link"></a>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="help-box"
                                style={{ backgroundImage: "url(/images/resource/brochure-bg.jpg)" }}
                            >
                                <div className="inner">
                                    <span className="title">تواصل سريع</span>
                                    <h2>احصل على حلول</h2>
                                    <div className="text">
                                        تواصل معنا في أقرب مكتب لك أو أرسل استفسارًا عبر الإنترنت.
                                    </div>
                                    <Link className="theme-btn btn-style-three" href={`/ar/contact`}>
                                        اتصل بنا
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
                                    <figure className="image">
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

                            {/* Tabs */}
                            <div className="product-info-tabs">
                                <div className="prod-tabs tabs-box">
                                    <ul className="tab-btns tab-buttons clearfix">
                                        {["precautions", "intelligence", "specializations"].map((tab) => (
                                            <li
                                                key={tab}
                                                className={activeTab === tab ? "tab-btn active-btn" : "tab-btn"}
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
                                                className={activeTab === tab ? "tab active-tab" : "tab"}
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
