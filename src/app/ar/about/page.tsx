'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { usePathname } from 'next/navigation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../../components/HomeHeader';
import Footer from '../../components/HomeFooter';
import Reviews from '../../components/Reviews';
import ClientsAndVideoSection from '../../components/ClientsAndVideoSection';

// All static content for both languages in a single object
const translations = {
 
    ar: {
        pageTitle: 'من نحن',
        pageSubTitle: 'الديكورات الداخلية تتحدث عن نفسها',
        homeLink: 'الرئيسية',
        aboutLink: 'عنا',
        aboutSection: {
            title: 'نبذة <br /> عنا',
            heading: 'أي مشروع <br /> بأي حجم',
            text: 'تتمتع شركة كارياني هاوس بخبرة طويلة وتتخصص في تصميم وبناء وتجديد وصيانة الفلل والمباني السكنية والمساحات التجارية. نحن نقدم خدمات متخصصة في ترميم الهياكل، التكسية، أعمال الألمنيوم والزجاج، التشطيبات الداخلية، وحلول البناء المخصصة في جميع أنحاء أبوظبي والإمارات العربية المتحدة.',
            aboutUsButton: 'من نحن',
        },
        processSection: {
            title: 'كيف نعمل',
            heading: 'عملية مثبتة',
            steps: [
                {
                    title: 'المفهوم',
                    desc: 'نبدأ بفهم رؤيتك ومساحتك، ونترجم الأفكار إلى نطاق مشروع عملي.',
                },
                {
                    title: 'التخطيط',
                    desc: 'نقوم بإعداد جداول زمنية وميزانيات وتصاريح مفصلة لضمان أن يبدأ البناء على أسس صلبة.',
                },
                {
                    title: 'التصميم',
                    desc: 'يطور مهندسونا تصاميم إبداعية وفعالة مع الالتزام الكامل بالمعايير الهيكلية والجمالية.',
                },
                {
                    title: 'التنفيذ',
                    desc: 'يقدم فريقنا ذو الخبرة خدمات البناء باستخدام مواد عالية الجودة، وبروتوكولات أمان، وحرفية ماهرة.',
                },
            ],
            readMore: 'اقرأ المزيد',
        },
        testimonialSection: {
            title: 'آراء العملاء',
            heading: 'ماذا يقول العملاء',
          
        },
        faqSection: {
            title: 'بعض الأسئلة الشائعة',
            heading: 'الأسئلة المتكررة',
            data: [
                {
                    question: 'هل تقومون بالتصميم والتنفيذ بأنفسكم؟',
                    answer: 'نقدم ضمانًا لمدة 5 سنوات ونتعهد بتصحيح أي عيب ينشأ عن سوء المصنعية على نفقتنا. ومع ذلك، لا يسري الضمان على سوء الاستخدام والقطع القابلة للكسر.',
                    active: false,
                },
                {
                    question: 'هل تقدمون ضمانًا وخدمة ما بعد البيع؟',
                    answer: 'نقدم ضمانًا لمدة 5 سنوات ونتعهد بتصحيح أي عيب ينشأ عن سوء المصنعية على نفقتنا. ومع ذلك، لا يسري الضمان على سوء الاستخدام والقطع القابلة للكسر.',
                    active: true,
                },
                {
                    question: 'هل يمكنكم تقديم عرض سعر بناءً على مخطط الأرضية؟',
                    answer: 'نقدم ضمانًا لمدة 5 سنوات ونتعهد بتصحيح أي عيب ينشأ عن سوء المصنعية على نفقتنا. ومع ذلك، لا يسري الضمان على سوء الاستخدام والقطع القابلة للكسر.',
                    active: false,
                },
                {
                    question: 'في أي مرحلة يمكن البدء في أعمال التصميم الداخلي؟',
                    answer: 'نقدم ضمانًا لمدة 5 سنوات ونتعهد بتصحيح أي عيب ينشأ عن سوء المصنعية على نفقتنا. ومع ذلك، لا يسري الضمان على سوء الاستخدام والقطع القابلة للكسر.',
                    active: false,
                },
                {
                    question: 'هل تتقاضون رسومًا مقابل تقديم عرض سعر؟',
                    answer: 'نقدم ضمانًا لمدة 5 سنوات ونتعهد بتصحيح أي عيب ينشأ عن سوء المصنعية على نفقتنا. ومع ذلك، لا يسري الضمان على سوء الاستخدام والقطع القابلة للكسر.',
                    active: false,
                },
            ],
        },
        engineerSection: {
            title: 'خدمات',
            heading: 'تعرف على مهندسينا',
            subheading: 'خبرة متفانية',
            text1: 'الدقة والابتكار يميزان فريقنا الهندسي. مع التحديات التي لا تعد ولا تحصى في البناء الحديث، يتطلب البقاء في المقدمة المهارة والإبداع.',
            text2: 'بعيدًا عن الحلول التقليدية، يصوغ مهندسونا تصاميم عملية وفعالة تصمد أمام اختبار الزمن. يجمعون بين المعرفة والشغف، مما يضمن نجاح وسلامة كل مشروع. عملهم يشكل المستقبل بالقوة والأناقة.',
            readMore: 'اقرأ المزيد',
        },
    },
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="slick-prev custom-arrow" onClick={onClick}>
        ‹
    </div>
);

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="slick-next custom-arrow" onClick={onClick}>
        ›
    </div>
);
// Define the content data here or import it from a separate file
const aboutPageContent = {
    testimonialSection: {
      
         title: 'آراء العملاء',
        heading: 'ماذا يقول العملاء',
    }
};

export default function AboutPage() {
    const pathname = usePathname();
    const currentLang = pathname.startsWith('/ar') ? 'ar' : 'en';
    const content = translations[currentLang];

    const processSteps = content.processSection.steps;
    const faqData = content.faqSection.data;

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
    };

    return (
        <div className={currentLang === 'ar' ? 'rtl' : ''}>
            <Header />
            <main>
                {/* Page Title */}
                <section
                    className="page-title"
                    style={{ backgroundImage: "url(/images/background/10.webp)" }}
                >
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="title-box">
                                <h1>{content.pageTitle}</h1>
                                <span className="title">{content.pageSubTitle}</span>
                                
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li>{content.aboutLink}</li>
                                <li>
                                    <Link href={`/${currentLang === 'ar' ? 'ar' : ''}`}>{content.homeLink}</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
                {/* About Section */}
                <section
                    className="about-section"
                    style={{ backgroundImage: "url(/images/background/1.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="row no-gutters">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div
                                        className="title-box wow fadeInLeft"
                                        data-wow-delay="1200ms"
                                    >
                                        <h2 dangerouslySetInnerHTML={{ __html: content.aboutSection.title }} />
                                    </div>
                                    <div className="image-box">
                                        <figure className="alphabet-img wow fadeInRight">
                                            <Image
                                                src="/images/resource/alphabet-image.png"
                                                alt="Alphabet"
                                                width={600}
                                                height={700}
                                            />
                                        </figure>
                                        <figure
                                            className="image wow fadeInRight"
                                            data-wow-delay="600ms"
                                        >
                                            <Image
                                                src="/images/resource/image-2.png"
                                                alt="About Image"
                                                width={444}
                                                height={448}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <div className="content-box">
                                        <div className="title">
                                            <h2 dangerouslySetInnerHTML={{ __html: content.aboutSection.heading }} />
                                        </div>
                                        <div className="text">
                                            {content.aboutSection.text}
                                        </div>
                                        <div className="link-box">
                                            <Link href={`/${currentLang}/about`} className="theme-btn btn-style-one">
                                                {content.aboutSection.aboutUsButton}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Process Section */}
                <section
                    className="process-section"
                    style={{ backgroundImage: "url(/images/background/8.jpg)" }}
                >
                    <div className="auto-container">
                        <div className="sec-title light">
                            <span className="float-text">{content.processSection.title}</span>
                            <h2>{content.processSection.heading}</h2>
                        </div>
                        <div className="row">
                            {processSteps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className="process-block col-lg-3 col-md-6 col-sm-12"
                                >
                                    <div className="inner-box">
                                        <span className="count">{`0${idx + 1}`}</span>
                                        <h4>
                                            {step.title}
                                        </h4>
                                        <div className="text">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pass the content prop to the Reviews component */}
                <Reviews content={aboutPageContent} />

                {/* Clients & Video Section */}
                <ClientsAndVideoSection />
                {/* FAQ Section */}
                <section className="faq-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Image
                                                src="/images/resource/faq-img.png"
                                                alt="FAQ Image"
                                                width={560}
                                                height={524}
                                            />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">{content.faqSection.title}</span>
                                        <h2>{content.faqSection.heading}</h2>
                                    </div>
                                    <ul className="accordion-box">
                                        {faqData.map(({ question, answer, active }, idx) => (
                                            <li
                                                key={idx}
                                                className={`accordion block${active ? " active-block" : ""}`}
                                            >
                                                <div className={`acc-btn${active ? " active" : ""}`}>
                                                    {question}
                                                    <div className="icon fa fa-plus-square"></div>
                                                </div>
                                                <div className={`acc-content${active ? " current" : ""}`}>
                                                    <div className="content">
                                                        <div className="text">{answer}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Engineer / Specialize Section */}
                <section className="specialize-section-two">
                    <div className="auto-container">
                        <div className="row">
                            <div className="title-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="float-text">{content.engineerSection.title}</span>
                                        <h2>{content.engineerSection.heading}</h2>
                                    </div>
                                    <div className="text-box">
                                        <h4>{content.engineerSection.subheading}</h4>
                                        <p>{content.engineerSection.text1}</p>
                                        <p>{content.engineerSection.text2}</p>
                                    </div>
                                    <div className="link-box">
                                        <Link href={`/${currentLang}/service-detail`}>
                                            {content.engineerSection.readMore} <i className="fa fa-angle-double-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="carousel-outer">
                                        <ul className="image-carousel owl-carousel owl-theme">
                                            <li>
                                                <Link href="/images/resource/ENGG12.png" className="lightbox-image" title="Image Caption Here">
                                                    <Image src="/images/resource/ENGG12.png" alt="Engineering Image 1" width={670} height={420} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/images/resource/Eng1.png" className="lightbox-image" title="Image Caption Here">
                                                    <Image src="/images/resource/Eng1.png" alt="Engineering Image 2" width={670} height={420} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/images/resource/ENGG122.png" className="lightbox-image" title="Image Caption Here">
                                                    <Image src="/images/resource/ENGG12.png" alt="Engineering Image 3" width={670} height={420} />
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="thumbs-carousel owl-carousel owl-theme">
                                            <li className="thumb-box">
                                                <figure>
                                                    <Image src="/images/resource/Eng12.png" alt="Thumbnail 1" width={150} height={150} />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                            <li className="thumb-box">
                                                <figure>
                                                    <Image src="/images/resource/ENG.png" alt="Thumbnail 2" width={150} height={150} />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                            <li className="thumb-box">
                                                <figure>
                                                    <Image src="/images/resource/Eng12.png" alt="Thumbnail 3" width={150} height={150} />
                                                </figure>
                                                <div className="overlay">
                                                    <span className="icon fa fa-arrows-alt"></span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}