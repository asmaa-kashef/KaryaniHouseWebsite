// app/layout.tsx
import Script from "next/script";
import "../../../public/css/bootstrap.css";
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>

                {/* Load jQuery and Popper first, but safely */}
                <Script src="/js/jquery.js" strategy="afterInteractive" />
                <Script src="/js/popper.min.js" strategy="afterInteractive" />

                {/* Other legacy scripts */}
                <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
                <Script src="/js/jquery.fancybox.js" strategy="afterInteractive" />
                <Script src="/js/owl.js" strategy="afterInteractive" />
                <Script src="/js/jquery.mCustomScrollbar.concat.min.js" strategy="afterInteractive" />
                <Script src="/js/wow.js" strategy="afterInteractive" />
                <Script src="/js/appear.js" strategy="afterInteractive" />
                <Script src="/js/mixitup.js" strategy="afterInteractive" />
                <Script src="/js/script.js" strategy="afterInteractive" />
                <Script src="/js/color-settings.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
