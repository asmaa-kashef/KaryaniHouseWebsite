// app/layout.tsx
import Script from "next/script";

import "../../../public/css/bootstrap.css";
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>

            {/* جافاسكريبت الموقع */}
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

            {/* Meta Pixel */}
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
          fbq('track', 'Lead');
          fbq('track', 'AddToCart');
          fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
        `}
            </Script>

        </>
    );
}
