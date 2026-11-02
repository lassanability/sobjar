import { Toaster } from "sonner";
import "@/app/styles/global.css";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/app/lib/site";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
});

export const viewport = {
  themeColor: "#0b4d2c",
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
    "Somali Bantu Edmonton",
    "Somali Bantu Canada",
    "Jareer Weyne Society of Alberta",
    "Edmonton non-profit",
    "Edmonton charity",
    "Alberta youth soccer",
    "Edmonton youth programs",
    "newcomer support Alberta",
    "refugee family support Edmonton",
    "African community Edmonton",
    "donate",
  ],
  category: "nonprofit",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
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
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <Toaster position="top-center" richColors toastOptions={{ className: "toast" }} />
        <div className="app">
          <Navbar />
          <main id="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
