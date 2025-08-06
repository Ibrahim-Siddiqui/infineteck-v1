import type { Metadata } from "next";
import {
  Inter,
  Raleway,
  Roboto,
  Poppins,
  Montserrat,
  Lato,
  Open_Sans,
  Hedvig_Letters_Sans,
} from "next/font/google";

import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner";

// const inter = Inter({ subsets: ["latin"] });
// const raleway = Raleway({ subsets: ["latin"] });
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});
// const mont = Montserrat({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });
// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "700", "900"],
// });
// const open_sans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "800"],
// });
// const hevdig = Hedvig_Letters_Sans({ subsets: ["latin"], weight: ["400"] });
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Infineteck | Marketing, E-commerce & AI Development Experts",
  description:
    "Infineteck delivers expert web and app development, AI automation, digital marketing, and e-commerce solutions to help startups and enterprises grow online in the UK, USA, UAE, and globally.",
  openGraph: {
    title: "Infineteck | Marketing, E-commerce & AI Development Experts",
    description: "Digital Marketing, E-commerce & AI Development Experts",
    url: "https://www.infineteck.com/",
    siteName: "Infineteck",
    images: [
      {
        url: "https://www.infineteck.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Infineteck Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Your Twitter Title',
  //   description: 'Your Twitter description',
  //   images: ['https://yourdomain.com/twitter-image.jpg'],
  //   site: '@yourTwitterHandle',
  //   creator: '@yourTwitterHandle',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="zCC_O2GN7tu6YjjwU5UJZQPoZejvgn1SbZvy8quCGv8"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://www.infineteck.com/" />

        <Script id="facebook-pixel" strategy="afterInteractive" defer>
          {`
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1135041898668208');
fbq('track', 'PageView');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Infineteck",
              url: "https://www.infineteck.com",
              logo: "https://www.infineteck.com/logo.png",
              sameAs: [
                "https://www.facebook.com/people/Infineteck/61569356296437",
                "https://www.instagram.com/infineteck/",
                "https://www.linkedin.com/company/infineteck",
                "https://www.youtube.com/@infineteck",
                "https://www.tiktok.com/@infineteck?_t=ZN-8xpxbxIaFMc&_r=1",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+44-7463-836-597",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className={poppins.className}>
        {/* <NewNavbar /> */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1135041898668208&ev=PageView&noscript=1"
            alt="facebook-icon"
          />
        </noscript>
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
