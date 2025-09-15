// app/layout.tsx

import Script from "next/script";

/// Corrected and recommended code
import "../../public/css/bootstrap.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <main>{children}</main>
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