// src/app/layout.tsx
import Script from "next/script";
import { BenchNine } from "next/font/google";
import AsyncCSS from "../components/AsyncCSS";

const benchNine = BenchNine({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const systemFontStack =
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

const GTM_ID = "GTM-WWD2X2H4";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const nonCriticalCSS = [
        "jquery.fancybox.min.css",
        "jquery-ui.css",
        "animate.css",
        "owl.css",
        "font-awesome.css",
        "jquery.mCustomScrollbar.min.css",
        "jquery.bootstrap-touchspin.css",
        "flaticon.css",
    ];

    const jsAfterInteractive = ["jquery.js", "popper.min.js"];
    const jsLazy = [
        "bootstrap.min.js",
        "jquery.fancybox.js",
        "owl.js",
        "jquery.mCustomScrollbar.concat.min.js",
        "wow.js",
        "appear.js",
        "mixitup.js",
        "script.js",
        "color-settings.js",
    ];

    return (
        <html lang="en">
            <head>
                {/* ================= Critical CSS ================= */}
                <link rel="stylesheet" href="/css/bootstrap.css" media="all" />
                <link rel="stylesheet" href="/css/style.css" media="all" />
                <link rel="stylesheet" href="/css/responsive.css" media="all" />

                {/* ================= Non-critical CSS ================= */}
                {nonCriticalCSS.map((file) => (
                    <AsyncCSS key={file} href={`/css/${file}`} />
                ))}

                {/* ================= Google Fonts ================= */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />

                {/* ================= Google Tag Manager ================= */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
                </Script>

                {/* ================= Meta Pixel ================= */}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1254073446082094');
            fbq('track', 'PageView');
          `}
                </Script>
            </head>

            <body className={benchNine.className} style={{ fontFamily: systemFontStack }}>
                {/* GTM NoScript */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>

                <main>{children}</main>

                {/* ================= JavaScript ================= */}
                {jsAfterInteractive.map((file) => (
                    <Script key={file} src={`/js/${file}`} strategy="afterInteractive" />
                ))}

                {jsLazy.map((file) => (
                    <Script key={file} src={`/js/${file}`} strategy="lazyOnload" />
                ))}
            </body>
        </html>
    );
}
