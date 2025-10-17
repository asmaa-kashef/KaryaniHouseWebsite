import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // This is your existing images configuration, leave it as is.
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "blog.karyani-house.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
                pathname: "/**",
            },
        ],
    },

    // This is the new part you need to add for languages.
    i18n: {
        // A list of all supported languages
        locales: ["en", "ar"],
        // The default language to use when no language is specified in the URL
        defaultLocale: "en",
    },
};

export default nextConfig;