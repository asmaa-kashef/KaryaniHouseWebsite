// app/layout.tsx

import Script from "next/script";

// Remove the static metadata export.
// It will override the dynamic metadata from your pages.
// export const metadata = {
//     title: "karyani House construction",
//     description: "Luxury Modern Villas and Construction",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* CSS links */}
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />
            </head>
            <body>
                <main>{children}</main>
                {/* JavaScript files */}
                <Script src="/js/jquery.js" strategy="beforeInteractive" />
                <Script src="/js/popper.min.js" strategy="beforeInteractive" />
                <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
                <Script src="/js/jquery.fancybox.js" strategy="lazyOnload" />
                <Script src="/js/owl.js" strategy="lazyOnload" />
                <Script src="/js/jquery.mCustomScrollbar.concat.min.js" strategy="lazyOnload" />
                <Script src="/js/wow.js" strategy="lazyOnload" />
                <Script src="/js/appear.js" strategy="lazyOnload" />
                <Script src="/js/mixitup.js" strategy="lazyOnload" />
                <Script src="/js/script.js" strategy="lazyOnload" />
                <Script src="/js/color-settings.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}