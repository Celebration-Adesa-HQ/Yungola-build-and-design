import { Hanken_Grotesk, Josefin_Sans, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600"],
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

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${hankenGrotesk.variable} ${josefinSans.variable} ${montserrat.variable} ${oswald.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background font-body-md overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        {/* Book a Visit / CTA */}
        <section
          className="py-24 bg-[#161719] border-t border-gray-800 text-center"
          aria-labelledby="book-heading"
        >
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs text-[#a68a68] uppercase tracking-[0.2em] mb-3 font-montserrat">
              Come See Us
            </p>
            <h2
              id="book-heading"
              className="text-3xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-6 font-oswald"
            >
              Book a Showroom Visit
            </h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto font-hanken text-sm leading-relaxed">
              Experience our designs in person. Walk through completed room
              setups, touch real materials, and meet our design consultants to
              discuss your upcoming project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+2348000000000"
                className="flex items-center justify-center gap-2 px-10 py-5 bg-[#a68a68] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-opacity-90 transition-colors duration-200 shadow-xl w-full sm:w-auto"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <Phone size={16} />
                Call to Schedule
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-10 py-5 bg-[#27292d] border border-gray-700 text-white text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:border-[#a68a68] transition-colors duration-200 shadow-xl w-full sm:w-auto"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <Calendar size={16} />
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
