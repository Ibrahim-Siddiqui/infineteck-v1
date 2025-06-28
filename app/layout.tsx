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

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const mont = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});
// const hevdig = Hedvig_Letters_Sans({ subsets: ["latin"], weight: ["400"] });
import Script from "next/script";

export const metadata: Metadata = {
  title: "Infineteck",
  description: "Infineteck's Landing Page and Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="zCC_O2GN7tu6YjjwU5UJZQPoZejvgn1SbZvy8quCGv8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Script id="facebook-pixel" strategy="afterInteractive">
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
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1135041898668208&ev=PageView&noscript=1"
          />
        </noscript>
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
