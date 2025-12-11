import BannerSlider from "./BannerSlider"; // Client Component

const translations = {
    en: {
        buttonText: "Get a Free Quote",
        h1Keyword: "Construction Companies in Abu Dhabi",
        services: ["Villa Construction", "Structure Repair", "Cladding"],
    },
    ar: {
        buttonText: "احصل على عرض سعر مجاني",
        h1Keyword: "شركات مقاولات في ابوظبي",
        services: ["بناء الفلل", "ترميم الهياكل", "التكسية"],
    },
};

const slides = [
    { bg: "/images/main-slider/VillaConstruction.webp", alt: "Construction Companies in Abu Dhabi", video: "https://www.youtube.com/watch?v=8HBZdEbywE4" },
    { bg: "/images/main-slider/structure.webp", alt: "Structure Repair Services", video: "https://www.youtube.com/watch?v=00_cHMGz5aE" },
    { bg: "/images/main-slider/cladding.webp", alt: "Cladding Services", video: "https://www.youtube.com/watch?v=ngxg4FNq2Sg" },
];

export default function BannerSection({ lang = "en" }: { lang?: "en" | "ar" }) {
    const content = translations[lang];

    return (
        <section className="w-full h-screen min-h-screen relative">
            <BannerSlider slides={slides} content={content} />
        </section>
    );
}
