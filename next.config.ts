import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "karyaniconstruction.karyani-house.com",
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

    async redirects() {
        return [
            {
                source: "/VillaConstruction/-contracting-companies-in-abu-dhabi-top-firms-and-industry-insights",
                destination: "/", // الصفحة الرئيسية
                permanent: true,
            },
            {
                source: "/VillaConstruction",
                destination: "/", // الصفحة الرئيسية
                permanent: true,
            },
            {
                source: "/building-maintenance-companies-in-abu-dhabi",
                destination: "/", // الصفحة الرئيسية
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
