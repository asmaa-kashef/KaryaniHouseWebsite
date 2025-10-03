import Script from "next/script";
import "../../../public/css/bootstrap.css";
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";

// تعريف نظام الخطوط القياسي
const systemFontStack = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';

// **هذا هو الرقم التعريفي الوحيد لجوجل الذي يجب وضعه في الموقع**
const GTM_ID = 'GTM-WWD2X2H4';

export const metadata = {
    title: 'My Next.js App',
    description: 'A responsive website built with Next.js.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* ---------------------------------------------------- */}
                {/* 1. GOOGLE TAG MANAGER (GTM) - الجزء الأول في الـ <HEAD> */}
                {/* هذا الكود مسؤول عن تشغيل كل من Google Ads و Google Analytics من خلال GTM */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');
                    `}
                </Script>
                {/* ---------------------------------------------------- */}

                {/* 2. Meta Pixel Code - كود فيسبوك (لا يزال موجوداً) */}
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
                {/* **تنبيه:** أكواد Google Ads أو Google Analytics لم تعد موجودة في هذا الملف. */}

            </head>

            {/* هنا نطبق نظام الخطوط على وسم <body> */}
            <body style={{ fontFamily: systemFontStack }}>
                {/* ---------------------------------------------------- */}
                {/* 3. GOOGLE TAG MANAGER (GTM) - الجزء الثاني في بداية الـ <BODY> */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
                {/* ---------------------------------------------------- */}

                <main>{children}</main>

                {/* This section loads all the necessary JavaScript files. */}
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
