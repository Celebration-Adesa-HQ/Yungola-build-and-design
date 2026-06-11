import { Hanken_Grotesk, Josefin_Sans, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Calendar, Phone } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { navigation, homeContent } from "@/lib/data/siteContent";
import { organizationSchema, websiteSchema } from "@/lib/seo/structured-data";
import { BASE_URL, BRAND, GLOBAL_KEYWORDS } from "@/lib/seo/metadata";

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

/**
 * Root layout metadata — applies to all pages as defaults.
 * Individual pages override title/description/ogImage via generatePageMetadata().
 */
export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Yungola Build and Design | Architecture & Luxury Construction Nigeria",
    template: "%s | Yungola Build and Design",
  },
  description:
    "Yungola Build and Design is Nigeria's premium cinematic architectural design and construction studio. We transform visions into breathtaking built realities — from photorealistic 3D designs to luxury turnkey construction in Lagos, Abuja, and beyond.",
  keywords: GLOBAL_KEYWORDS,
  authors: [{ name: BRAND.name, url: BASE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,

  openGraph: {
    type: "website",
    locale: BRAND.locale,
    url: BASE_URL,
    siteName: BRAND.name,
    title: "Yungola Build and Design | Architecture & Luxury Construction Nigeria",
    description:
      "Premium cinematic architectural design and construction studio transforming ideas into luxury built realities across Nigeria.",
    images: [
      {
        url: `${BASE_URL}/og/yungola-og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Yungola Build and Design — Architecture Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: BRAND.twitterHandle,
    creator: BRAND.twitterHandle,
    title: "Yungola Build and Design | Architecture & Luxury Construction",
    description:
      "Premium cinematic architectural design and construction studio in Lagos, Nigeria.",
    images: [`${BASE_URL}/og/yungola-og-default.jpg`],
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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // Add Google Search Console verification token when ready:
  // verification: { google: "YOUR_TOKEN_HERE" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${josefinSans.variable} ${montserrat.variable} ${oswald.variable} h-full antialiased dark`}
    >
      <head>
        {/* Global Organization + Website schemas (root-level, injected on every page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-darkBackground text-darkForeground font-body-md overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        {/* Book a Visit / CTA */}
        <section
          className="py-24 bg-surface-container border-t border-outline-variant text-center"
          aria-labelledby="book-heading"
        >
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs text-accent uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
              {homeContent.showroomTeaser.badge}
            </p>
            <h2
              id="book-heading"
              className="text-3xl lg:text-5xl font-bold uppercase tracking-wide text-darkForeground mb-6 font-montserrat"
            >
              {homeContent.showroomTeaser.title}
            </h2>
            <p className="text-darkSecondaryForeground mb-10 max-w-xl mx-auto font-hanken text-sm leading-relaxed font-light">
              {homeContent.showroomTeaser.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={navigation.footer.phoneHref}
                className="flex items-center justify-center gap-2 px-10 py-5 bg-accent text-on-primary text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-accentDark transition-colors duration-200 shadow-xl w-full sm:w-auto font-montserrat"
              >
                <Phone size={16} />
                Call to Schedule
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-10 py-5 bg-darkBackground border border-outline-variant text-darkForeground text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:border-accent transition-colors duration-200 shadow-xl w-full sm:w-auto font-montserrat"
              >
                <Calendar size={16} />
                Request a Consultation
              </Link>
            </div>
          </div>
        </section>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
