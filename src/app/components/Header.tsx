'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Centralized translation object
const translations = {
    en: {
        phone: "PHONE",
        email: "EMAIL",
        searchPlaceholder: "Search Here",
        home: "Home",
        about: "About",
        aboutUs: "About Us",
        ourTeam: "Our Team",
        comingSoon: "Coming Soon",
        services: "Services",
        projects: "Projects",
        projectDetail: "Project Detail",
        blog: "Blog",
        contact: "Contact",
    },
    ar: {
        phone: "هاتف",
        email: "بريد إلكتروني",
        searchPlaceholder: "ابحث هنا",
        home: "الرئيسية",
        about: "عنا",
        aboutUs: "من نحن",
        ourTeam: "فريقنا",
        comingSoon: "قريباً",
        services: "الخدمات",
        projects: "المشاريع",
        projectDetail: "تفاصيل المشروع",
        blog: "المدونة",
        contact: "اتصل بنا",
    }
};

export default function Header() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';
    const content = translations[currentLang];

    // Helper function to handle dynamic links
    const getLinkHref = (path: string) => {
        // Handle the root path differently
        if (path === '/') {
            return currentLang === 'ar' ? '/ar' : '/';
        }
        return `/${currentLang}${path}`;
    };

    return (
        <header className="main-header header-style-four">
            <div className="header-top">
                <div className="auto-container clearfix">
                    <div className="top-right">
                        <ul className="contact-info">
                            <li><span>{content.phone} :</span> (+971) 050-660-71593</li>
                            <li>
                                <span>{content.email} :</span>
                                <a href="mailto:info@karyani-house.com">info@karyani-house.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-lower">
                <div className="auto-container">
                    <div className="main-box clearfix">

                        {/* Logo Box */}
                        <div className="logo-box">
                            <div className="logo">
                                <Link href={getLinkHref('/')}>
                                    <Image src="/images/logo.png" alt="Logo" width={150} height={80} />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer">
                            <nav className="main-menu navbar-expand-md">
                                <div className="navbar-header">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon flaticon-menu-button"></span>
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix">
                                        <li><Link href={getLinkHref('/')}>{content.home}</Link></li>

                                        <li>
                                            <Link href={getLinkHref('/about')}>{content.about}</Link>
                                            <ul>
                                                <li><Link href={getLinkHref('/about')}>{content.aboutUs}</Link></li>
                                                <li><Link href={getLinkHref('/team')}>{content.ourTeam}</Link></li>
                                                <li><Link href={getLinkHref('/coming-soon')}>{content.comingSoon}</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link href={getLinkHref('/Services')}>{content.services}</Link></li>

                                        <li>
                                            <Link href={getLinkHref('/projects')}>{content.projects}</Link>
                                            <ul>
                                                <li><Link href={getLinkHref('/projects')}>{content.projects}</Link></li>
                                                <li><Link href={getLinkHref('/project-detail')}>{content.projectDetail}</Link></li>
                                            </ul>
                                        </li>

                                        <li><Link href={getLinkHref('/VillaConstruction')}>{content.blog}</Link></li>
                                        <li><Link href={getLinkHref('/contact')}>{content.contact}</Link></li>
                                    </ul>
                                </div>
                            </nav>

                            {/* Search Button */}
                            <div className="outer-box">
                                <div className="search-box-outer">
                                    <div className="dropdown">
                                        <ul className="dropdown-menu pull-right search-panel">
                                            <li className="panel-outer">
                                                <div className="form-container">
                                                    <form method="post" action="#">
                                                        <div className="form-group">
                                                            <input type="search" name="field-name" placeholder={content.searchPlaceholder} required />
                                                            <button type="submit" className="search-btn">
                                                                <span className="fa fa-search"></span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div> {/* end nav outer */}
                    </div>
                </div>
            </div>
        </header>
    );
}