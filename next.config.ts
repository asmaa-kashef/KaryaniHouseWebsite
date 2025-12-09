const nextConfig = {
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

    // تعطيل sourcemaps بدون Webpack
    productionBrowserSourceMaps: false,

    // منع الخطأ الخاص بتوربو باك
    turbopack: {},
};

export default nextConfig;
