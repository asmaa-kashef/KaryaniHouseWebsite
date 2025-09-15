// app/layout.tsx
import Script from "next/script";
import "../../../public/css/bootstrap.css";
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* هنا كل الـ link والميتادات */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body>
                <main>{children}</main>

                {/* JS Libraries */}
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

                {/* ✅ Script لنقل أي <link> من body لـ head تلقائي */}
                <Script id="move-links-to-head" strategy="afterInteractive">
                    {`
            document.querySelectorAll('body link[rel="icon"], body link[rel="apple-touch-icon"]').forEach(el => {
              document.head.appendChild(el);
            });
          `}
                </Script>
            </body>
        </html>
    );
}
