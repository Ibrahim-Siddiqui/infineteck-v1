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
import { Toaster } from "@/components/ui/sonner"

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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <Toaster />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
