import { Metadata } from "next";
import Link from "next/link";
import path from "path";
import { promises as fs } from "fs";
import ImageGalleryClient from "../../../components/ImageGalleryClient";
import ContactLink from "../../../components/ContactLink";
import Header from "../../../components/Header";
import Footer from "../../../components/HomeFooter";

interface Project {
    id: number;
    slug: string;
    category?: string;
    title: string;
    projectName: string;
    location: string;
    zone: string;
    permitNumber?: string;
    firstIssueDate?: string;
    sector?: string;
    plotNumber?: string;
    landUse?: string;
    plotArea?: string;
    designerAndSupervisor?: string;
    contractor?: string;
    villaDescription: string;
    images?: string[];
    architectImages?: string[];
    mapEmbedUrl?: string;
    metaTitle?: string;
    metaDescription?: string;
    seoKeyword?: string;
    h1?: string;
    h2Sections?: string[];
}

async function getProjectBySlug(slug: string): Promise<Project | null> {
    try {
        const jsonDirectory = path.join(process.cwd(), 'public', 'data');
        const fileContents = await fs.readFile(jsonDirectory + '/arconstructionproject.json', 'utf8');
        const data: Project[] = JSON.parse(fileContents);
        return data.find(p => p.slug === slug) || null;
    } catch (error) {
        console.error("فشل في قراءة بيانات المشروع:", error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);
    const canonicalUrl = `https://karyani-house.com/projects/${params.slug}`;

    if (!project) {
        return {
            title: "المشروع غير موجود",
            description: "المشروع المطلوب غير موجود.",
            openGraph: {
                url: canonicalUrl,
            },
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    const metaTitle = project.metaTitle || `${project.title} | كريانى هاوس – أبوظبي`;
    const metaDescription = project.metaDescription || `اكتشف ${project.title} في ${project.location}. خبراء بناء الفلل، إصلاح الهياكل، التكسية الداخلية والخارجية، وتصميم الديكور الداخلي بواسطة كريانى هاوس.`;
    const metaKeywords = project.seoKeyword || `${project.title}, ${project.projectName}, بناء فلل أبوظبي, إصلاح هياكل, تكسية, تصميم داخلي, كريانى هاوس`;
    const ogImage = project.images?.[0] || "/images/logo.png";

    return {
        title: metaTitle,
        description: metaDescription,
        keywords: metaKeywords,
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: canonicalUrl,
            images: [ogImage],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDescription,
            images: [ogImage],
        },
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return <p style={{ textAlign: "center", marginTop: 30 }}>المشروع غير موجود.</p>;
    }

    return (
        <div className="rtl">
            <Header />
            <section
                className="page-title"
                style={{ backgroundImage: "url(/images/background/project.jpg)" }}
            >
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>{project.title}</h1>
                            <span className="title">الديكور الداخلي يتحدث عن نفسه</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/">الرئيسية</Link>
                            </li>
                            <li>{project.title}</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section
                className="project-details-section"
                style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}
            >
                <div className="auto-container" style={{ maxWidth: 1200, margin: "auto" }}>
                    <div className="upper-box" style={{ marginBottom: 50 }}>
                        {project.images && project.images.length > 0 && (
                            <ImageGalleryClient
                                images={project.images}
                                title={project.title}
                            />
                        )}
                    </div>

                    <div className="lower-content" style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                        <div
                            className="content-column"
                            style={{
                                flex: "1 1 60%",
                                minWidth: 300,
                                backgroundColor: "#fff",
                                padding: 25,
                                borderRadius: 12,
                                boxShadow: "0 0 12px rgb(0 0 0 / 0.1)",
                            }}
                        >
                            <h2 style={{ marginBottom: 20 }}>وصف المشروع</h2>
                            <p style={{ lineHeight: 1.6 }}>{project.villaDescription}</p>

                            <h4 style={{ marginTop: 30 }}>تحديات المشروع</h4>
                            <p>
                                تطلب هذا المشروع البناء الكامل من الصفر مع الالتزام بالمواعيد النهائية، وتنفيذ أنظمة ذكية متقدمة.
                            </p>
                            <ul style={{ marginTop: 15, paddingLeft: 20 }}>
                                <li>البناء الكامل من الأساسات حتى التشطيب</li>
                                <li>تركيب أنظمة ذكية</li>
                                <li>أعمال الألمنيوم والسيراميك المتقدمة</li>
                                <li>الدرج الداخلي والخارجي</li>
                            </ul>

                            <h4 style={{ marginTop: 30 }}>ما قمنا به</h4>
                            <p>
                                إدارة جميع مراحل البناء بما في ذلك التصاريح، الأساسات، الهيكل، الأعمال الداخلية، وتركيب الأنظمة الذكية.
                            </p>

                            <h4 style={{ marginTop: 30 }}>النتيجة</h4>
                            <p>
                                تسليم فيلا حديثة وفق الجدول الزمني مع أنظمة ذكية وتشطيبات عالية الجودة.
                            </p>

                            {project.architectImages && project.architectImages.length > 0 && (
                                <div className="architect-gallery" style={{ marginTop: 50 }}>
                                    <h3 style={{ marginBottom: 20 }}>مخططات المهندس المعماري</h3>
                                    <ImageGalleryClient
                                        images={project.architectImages}
                                        title={`${project.title} مخططات المهندس`}
                                        isArchitectGallery={true}
                                    />
                                </div>
                            )}
                        </div>

                        <aside
                            className="info-column"
                            style={{
                                flex: "1 1 35%",
                                minWidth: 280,
                                backgroundColor: "#fff",
                                padding: 25,
                                borderRadius: 12,
                                boxShadow: "0 0 12px rgb(0 0 0 / 0.1)",
                                height: "fit-content",
                            }}
                        >
                            <h3 style={{ marginBottom: 20 }}>معلومات المشروع</h3>
                            <p style={{ marginBottom: 15, color: "#555" }}>
                                تفاصيل مشروع البناء الذي قامت به كريانى هاوس.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, color: "#333", lineHeight: 1.7 }}>
                                <li>
                                    <strong>المنطقة:</strong> {project.zone}
                                </li>
                                <li>
                                    <strong>الموقع:</strong>{" "}
                                    {project.mapEmbedUrl ? (
                                        <a
                                            href={project.mapEmbedUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ color: "#0077cc", textDecoration: "underline" }}
                                        >
                                            {project.location}
                                        </a>
                                    ) : (
                                        project.location
                                    )}
                                </li>
                                <li>
                                    <strong>اسم المشروع:</strong> {project.projectName}
                                </li>
                                <li>
                                    <strong>رقم التصريح:</strong> {project.permitNumber}
                                </li>
                                <li>
                                    <strong>تاريخ الإصدار الأول:</strong> {project.firstIssueDate}
                                </li>
                                <li>
                                    <strong>القطاع:</strong> {project.sector}
                                </li>
                                <li>
                                    <strong>رقم القطعة:</strong> {project.plotNumber}
                                </li>
                                <li>
                                    <strong>استخدام الأرض:</strong> {project.landUse}
                                </li>
                                <li>
                                    <strong>مساحة الأرض (م²):</strong> {project.plotArea}
                                </li>
                                <li>
                                    <strong>المصمم والمشرف:</strong> {project.designerAndSupervisor}
                                </li>
                                <li>
                                    <strong>المقاول:</strong> {project.contractor}
                                </li>
                            </ul>

                            {project.mapEmbedUrl && (
                                <iframe
                                    src={project.mapEmbedUrl}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, marginTop: 20, borderRadius: 8 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            )}

                            <div
                                className="help-box-two"
                                style={{
                                    marginTop: 40,
                                    padding: 20,
                                    backgroundColor: "#f2f2f2",
                                    borderRadius: 8,
                                    textAlign: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "700",
                                        fontSize: 18,
                                        display: "block",
                                        marginBottom: 10,
                                    }}
                                >
                                    تواصل سريع
                                </span>
                                <h2 style={{ marginBottom: 10 }}>احصل على الحل</h2>
                                <p style={{ marginBottom: 15 }}>
                                    اتصل بأقرب مكتب لنا أو أرسل طلبك عبر الإنترنت.
                                </p>
                                <ContactLink />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
