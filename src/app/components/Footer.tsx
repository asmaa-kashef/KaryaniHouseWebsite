"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isArabic = pathname.startsWith("/ar");
    const lang = isArabic ? "ar" : "en";

    const socialIcons = [
        { name: 'facebook', path: '#' },
        { name: 'twitter', path: '#' },
        { name: 'google-plus', path: '#' },
        { name: 'instagram', path: '#' },
        { name: 'whatsapp', path: '#' },
    ];

    const menuLinks = [
        { label: isArabic ? "من نحن" : "About", href: `/${lang}/about` },
        { label: isArabic ? "خدماتنا" : "Services", href: `/${lang}/services` },
        { label: isArabic ? "مشاريعنا" : "Projects", href: `/${lang}/projects` },
        { label: isArabic ? "الأخبار" : "News", href: `/${lang}/blog-classic` },
        { label: isArabic ? "اتصل بنا" : "Contact Us", href: `/${lang}/contact` },
    ];

    const recentWorks = [1, 2, 3, 4, 5, 6];

    return (
        <footer
            style={{
                backgroundImage: "url(/images/background/5.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px 0 0",
                position: "relative",
                color: "#f3f3f3",
                fontSize: "15px",
                lineHeight: "1.7",
            }}
        >
            {/* Overlay for background image */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    zIndex: 1,
                }}
            />
            {/* Footer content */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "0 15px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Widgets Section */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingBottom: "40px",
                    }}
                >
                    {/* Big Column */}
                    <div
                        style={{
                            flex: "1 1 55%",
                            marginBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Footer Column - About */}
                            <div
                                style={{
                                    flex: "1 1 45%",
                                    marginBottom: "30px",
                                }}
                            >
                                <div style={{ marginBottom: "20px" }}>
                                    <Link href={`/${lang}`}>
                                        <Image
                                            src="/images/logo.png"
                                            alt="Footer Logo"
                                            width={150}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <div
                                    style={{
                                        color: "#b0b0b0",
                                        lineHeight: "1.8",
                                    }}
                                >
                                    {isArabic
                                        ? "نص تجريبي يوضح شكل المحتوى باللغة العربية."
                                        : "Contra and layouts, in content of dummy text is nonsensical."}
                                </div>
                            </div>

                            {/* Footer Column - Recent Posts */}
                            <div
                                style={{
                                    flex: "1 1 45%",
                                    marginBottom: "30px",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        color: "#fff",
                                        marginBottom: "25px",
                                        position: "relative",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    {isArabic ? "آخر الأخبار" : "Recent Posts"}
                                </h2>
                                <div>
                                    {[1, 2].map((post, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                marginBottom: "15px",
                                            }}
                                        >
                                            <div style={{ flexShrink: 0, marginRight: "15px" }}>
                                                <Link href={`/${lang}/blog-detail`}>
                                                    <Image
                                                        src={`/images/resource/post-thumb-${post}.jpg`}
                                                        alt={`Post ${post}`}
                                                        width={80}
                                                        height={80}
                                                        style={{ borderRadius: "5px" }}
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <h4
                                                    style={{
                                                        margin: 0,
                                                        fontSize: "16px",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    <Link
                                                        href={`/${lang}/blog-detail`}
                                                        style={{
                                                            color: "#fff",
                                                            textDecoration: "none",
                                                        }}
                                                    >
                                                        {post === 1
                                                            ? isArabic
                                                                ? "منزل ثلاثي الخرسانة على البحيرة"
                                                                : "Triangle Concrete House on lake"
                                                            : isArabic
                                                                ? "الديكور الداخلي المذهل للفندق"
                                                                : "The Amazing Interior for the Hotel art"}
                                                    </Link>
                                                </h4>
                                                <ul
                                                    style={{
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: "5px 0 0",
                                                        color: "#b0b0b0",
                                                        fontSize: "12px",
                                                        display: "flex",
                                                        gap: "10px",
                                                    }}
                                                >
                                                    <li>26 Aug</li>
                                                    <li>3 Comments</li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Big Column 2 */}
                    <div
                        style={{
                            flex: "1 1 45%",
                            marginBottom: "30px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >
                            {/* Useful Links */}
                            <div
                                style={{
                                    flex: "1 1 45%",
                                    marginBottom: "30px",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        color: "#fff",
                                        marginBottom: "25px",
                                        position: "relative",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    {isArabic ? "روابط مفيدة" : "Useful links"}
                                </h2>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    {menuLinks.map((link, index) => (
                                        <li key={index} style={{ marginBottom: "10px" }}>
                                            <Link
                                                href={link.href}
                                                style={{
                                                    color: "#b0b0b0",
                                                    textDecoration: "none",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Recent Works Gallery */}
                            <div
                                style={{
                                    flex: "1 1 45%",
                                    marginBottom: "30px",
                                }}
                            >
                                <h2
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        color: "#fff",
                                        marginBottom: "25px",
                                        position: "relative",
                                        paddingBottom: "10px",
                                    }}
                                >
                                    {isArabic ? "أحدث الأعمال" : "Recent Works"}
                                </h2>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "10px",
                                    }}
                                >
                                    {recentWorks.map((img, index) => (
                                        <figure key={index} style={{ margin: 0, flex: "1 1 70px" }}>
                                            <a
                                                href={`/images/gallery/${img}.jpg`}
                                                style={{ display: "block" }}
                                            >
                                                <Image
                                                    src={`/images/resource/work-thumb-${img}.jpg`}
                                                    alt={`Work ${img}`}
                                                    width={70}
                                                    height={70}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        objectFit: "cover",
                                                        borderRadius: "5px",
                                                    }}
                                                />
                                            </a>
                                        </figure>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div
                style={{
                    backgroundColor: "#1c1c1c",
                    padding: "20px 0",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        padding: "0 15px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        textAlign: "center",
                    }}
                >
                    <div style={{ flex: "1 1 auto", marginBottom: "10px" }}>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                display: "flex",
                                justifyContent: "center",
                                gap: "15px",
                            }}
                        >
                            {socialIcons.map((icon, index) => (
                                <li key={index}>
                                    <a href={icon.path} style={{ color: "#fff" }}>
                                        {/* Dynamic SVG icons can be added here if needed */}
                                        {icon.name === 'facebook' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                        )}
                                        {icon.name === 'twitter' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                                                <path d="M22 4s-1.5 1-2.5 1.5c0 0-1.5 2.5-3 2.5s-2 0-3 0c0 0-1-1.5 0-3s2-2 3-2.5c0 0-1 1-2.5 1.5c-2 1-3 2-4 3c-1 1-1 2-1 3.5s0 2.5 1 3c1 1 2 2 3.5 2.5c2 1 3 1.5 4 1.5c1 0 2 0 3-1c0 0 1-1 1-2c0-1 0-2-1-3c-1-1-2-1.5-3-1.5c-1 0-1.5 0-2 0c-1 0-1 0.5-1 1c0 0.5 0 1 0 1.5s0 1 1 1.5c1 0.5 2 1 3 1s2.5-0.5 3-1c1 0 1.5-0.5 2-1c0-0.5 0-1 0-1.5s0-1.5-1-2c-0.5-0.5-1-1-1.5-1.5c-1-0.5-1.5-1-2-1.5c0-0.5-0.5-1-1-1.5c0-0.5-1-1-1-1.5s0.5-1 1-1.5c0.5-0.5 1-0.5 1.5-0.5s1 0 1.5 0.5c0.5 0.5 1 1 1.5 1.5s1 1 1.5 1.5c1-0.5 1.5-1 2-1.5c0.5-0.5 1-1 1.5-1.5s1.5-2 1-3c0-0.5 0-1 0-1.5z"></path>
                                            </svg>
                                        )}
                                        {icon.name === 'google-plus' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                                                <path d="M19.017 3.535a2.531 2.531 0 0 0-3.578 0c-.82.82-1.282 2.15-1.282 3.485c0 1.335.462 2.665 1.282 3.485c.82.82 2.15.462 3.485 1.282c1.335-.82 2.665-1.282 3.485-1.282a2.531 2.531 0 0 0 0-3.578a2.531 2.531 0 0 0-3.578 0zM12.017 12.035a2.531 2.531 0 0 0-3.578 0c-.82.82-1.282 2.15-1.282 3.485c0 1.335.462 2.665 1.282 3.485c.82.82 2.15.462 3.485 1.282c1.335-.82 2.665-1.282 3.485-1.282a2.531 2.531 0 0 0 0-3.578a2.531 2.531 0 0 0-3.578 0zM5.017 19.535a2.531 2.531 0 0 0-3.578 0c-.82.82-1.282 2.15-1.282 3.485c0 1.335.462 2.665 1.282 3.485c.82.82 2.15.462 3.485 1.282c1.335-.82 2.665-1.282 3.485-1.282a2.531 2.531 0 0 0 0-3.578a2.531 2.531 0 0 0-3.578 0z"></path>
                                            </svg>
                                        )}
                                        {icon.name === 'instagram' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        )}
                                        {icon.name === 'whatsapp' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }}>
                                                <path d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12c0 2.21.8 4.23 2.1 5.86L3 21l3.14-2.1c1.63 1.3 3.65 2.1 5.86 2.1 4.97 0 9-4.03 9-9z"></path>
                                                <path d="M12 16.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM12 11c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2zM12 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                                            </svg>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ flex: "1 1 auto", marginBottom: "10px" }}>
                        <a
                            href="https://www.templateshub.net"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#fff", textDecoration: "none" }}
                        >
                            Templates Hub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
