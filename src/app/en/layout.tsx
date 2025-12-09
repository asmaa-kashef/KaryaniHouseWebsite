// src/app/layout.tsx
import Script from "next/script";
import { BenchNine } from "next/font/google";

const benchNine = BenchNine({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
});

const systemFontStack =
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

const GTM_ID = "GTM-WWD2X2H4";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* ================= Critical CSS ================= */}
                <link rel="stylesheet" href="/css/bootstrap.css" />
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/responsive.css" />

                {/* ================= Non-critical CSS (preload + async) ================= */}
                <link
                    rel="preload"
                    href="/css/jquery.fancybox.min.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/jquery-ui.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/animate.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/owl.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/font-awesome.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/jquery.mCustomScrollbar.min.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/jquery.bootstrap-touchspin.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                <link
                    rel="preload"
                    href="/css/flaticon.css"
                    as="style"
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />

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
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
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
                <Script src="/js/jquery.js" strategy="afterInteractive" />
                <Script src="/js/popper.min.js" strategy="afterInteractive" />
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
