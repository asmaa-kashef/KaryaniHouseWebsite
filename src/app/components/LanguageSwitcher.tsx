// src/app/components/LanguageSwitcher.tsx
"use client"; // This needs to be a client component

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    // Determine current language
    const isArabic = pathname.startsWith('/ar');

    const toggleLanguage = () => {
        if (isArabic) {
            // Switch to English
            const newPath = pathname.replace('/ar', '/en');
            router.push(newPath);
        } else {
            // Switch to Arabic
            const newPath = pathname.replace('/en', '/ar');
            router.push(newPath);
        }
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            {isArabic ? "English" : "عربي"}
        </button>
    );
}
