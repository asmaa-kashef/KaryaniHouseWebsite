// src/app/layout.tsx
import Script from "next/script";
import { BenchNine } from "next/font/google";

const benchNine = BenchNine({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const GTM_ID = "GTM-WWD2X2H4";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* CSS */}
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />

                {/* Lite YouTube Embed */}
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/lite-youtube-embed/src/lite-yt-embed.css"
                />

                {/* REMOVE Google Fonts – because next/font already loads it efficiently */}
            </head>

            <body className={benchNine.className}>

                {/* ========================================== */}
                {/* 1) Lazy Load Google Tag Manager            */}
                {/* ========================================== */}
                <Script id="gtm-lazy" strategy="lazyOnload">
                    {`
                        function loadGTM() {
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${GTM_ID}');
                        }
                        window.addEventListener("scroll", loadGTM, { once: true });
                        window.addEventListener("click", loadGTM, { once: true });
                    `}
                </Script>

                {/* GTM Fallback */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>

                {/* ========================================== */}
                {/* 2) Lazy Load Facebook Pixel (first click)  */}
                {/* ========================================== */}
                <Script id="fb-pixel-lazy" strategy="lazyOnload">
                    {`
                        function loadFBPixel(){
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');

                            fbq('init', '1254073446082094');
                            fbq('track', 'PageView');
                        }

                        window.addEventListener("click", loadFBPixel, { once: true });
                        window.addEventListener("scroll", loadFBPixel, { once: true });
                    `}
                </Script>

                {/* ========================================== */}
                {/*  Lite YouTube Embed Script  (lazy)         */}
                {/* ========================================== */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/lite-youtube-embed/src/lite-yt-embed.js"
                    strategy="lazyOnload"
                />

                <main>{children}</main>

                {/* ========================================== */}
                {/* 3) Local JS – all lazy load                */}
                {/* ========================================== */}

                {/* Remove jQuery if you don’t need it */}
                <Script src="/js/jquery.js" strategy="lazyOnload" />
                <Script src="/js/popper.min.js" strategy="lazyOnload" />
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
