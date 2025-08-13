import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "karyaniconstruction.karyani-house.com",
                port: "",
                pathname: "/**", // adjust path if you want to restrict, e.g. "/wp-content/uploads/**"
            },
        ],
    },
};

export default nextConfig;
