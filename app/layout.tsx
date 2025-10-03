import type { Metadata } from "next";
import { Inter , Lalezar } from "next/font/google";
import "./globals.css";
import BarCouncilNavbar from "@/components/BarCouncilNavbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NewsTicker from "@/components/NewsTicker";
import LoadingAnimation from "@/components/LoadingAnimation";

// const inter = Inter({ subsets: ["latin"] });

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],

  variable: "--font-lalezar",
});

export const metadata: Metadata = {
  title: "District Bar Association Tando Muhammad Khan | DBA TMK",
  description: "Official website of District Bar Association Tando Muhammad Khan. Find lawyers, download circulars, generate E-cards, and access legal resources. Serving the legal community with dedication.",
  keywords: "District Bar Association, Tando Muhammad Khan, DBA TMK, Lawyers, Advocates, Legal Services, Bar Council, Sindh Bar, Pakistan Bar Council, Find Lawyer, E-Card, Legal Directory",
  authors: [{ name: "District Bar Association TMK" }],
  creator: "SohMin",
  publisher: "District Bar Association TMK",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dbatmk.org",
    title: "District Bar Association Tando Muhammad Khan",
    description: "Official website of District Bar Association Tando Muhammad Khan. Serving the legal community with dedication.",
    siteName: "DBA TMK",
  },
  twitter: {
    card: "summary_large_image",
    title: "District Bar Association Tando Muhammad Khan",
    description: "Official website of District Bar Association Tando Muhammad Khan",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={lalezar.variable}>
        <LanguageProvider>
          <LoadingAnimation />
          <NewsTicker news="تازہ ترین خبر: بار کونسل ٹنڈو محمد خان کی اہم اطلاع - نئے اراکین کی رجسٹریشن جاری ہے" />
          <BarCouncilNavbar/>
          <main>
            {children}
          </main>
           <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
