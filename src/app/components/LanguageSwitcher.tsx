'use client';

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const isArabic = pathname.startsWith("/ar");

    const switchToEnglish = () => {
        const newPath = isArabic ? pathname.replace("/ar", "") : pathname;
        router.push(newPath);
    };

    const switchToArabic = () => {
        const newPath = !isArabic ? "/ar" + pathname : pathname;
        router.push(newPath);
    };

    return (
        <div className="language-switcher flex gap-2">
            <button
                className={`px-4 py-2 rounded ${!isArabic ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={switchToEnglish}
            >
                English
            </button>
            <button
                className={`px-4 py-2 rounded ${isArabic ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                onClick={switchToArabic}
            >
                عربي
            </button>
        </div>
    );
}
