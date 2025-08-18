"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    const isArabic = pathname.startsWith("/ar");

    const toggleLanguage = () => {
        const newPath = isArabic ? pathname.replace("/ar", "/en") : pathname.replace("/en", "/ar");
        router.push(newPath);
    };

    return (
        <button onClick={toggleLanguage}>
            {isArabic ? "English" : "عربي"}
        </button>
    );
}
