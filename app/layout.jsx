import { Toaster } from "sonner";
import "@/app/styles/global.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { BANNER_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/site";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport = {
  themeColor: "#009077",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Somali Bantu Community Support in Alberta`,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  keywords: [
    "Sobjar",
    "Sobjar Star FC",
    "Somali Bantu",
    "Jareer Weyne",
    "Edmonton non-profit",
    "Alberta youth soccer",
    "newcomer support Alberta",
    "donate",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: BANNER_URL, width: 1200, height: 630, alt: `${SITE_NAME} banner` }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [BANNER_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <body className={inter.variable}>
        <Toaster position="top-center" richColors toastOptions={{ className: "toast" }} />
        <main className="app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
