import { Cinzel, Josefin_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Yungola Build and Design | Architecture, Construction & Design",
    template: "%s | Yungola Build and Design",
  },
  description:
    "Premium architecture, design and construction company transforming ideas into built realities. From concept drawings to completed homes and commercial spaces across Nigeria.",
  keywords: [
    "architecture Nigeria",
    "construction company Lagos",
    "interior design Nigeria",
    "building design",
    "residential construction",
    "commercial construction",
    "Yungola Build and Design",
  ],
  authors: [{ name: "Yungola Build and Design" }],
  creator: "Yungola Build and Design",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.yungolabuildanddesign.com",
    siteName: "Yungola Build and Design",
    title: "Yungola Build and Design | Architecture, Construction & Design",
    description:
      "Premium architecture, design and construction company transforming ideas into built realities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yungola Build and Design",
    description: "Premium architecture, design and construction company.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${josefinSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F9F7] text-[#0D0D0D]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
