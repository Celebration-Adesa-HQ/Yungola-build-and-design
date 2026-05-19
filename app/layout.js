import { Hanken_Grotesk, Josefin_Sans, Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { navigation, homeContent } from "@/lib/data/siteContent";

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
  metadataBase: new URL("https://www.yungolabuildanddesign.com"),
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    name: "Yungola Build and Design",
    url: "https://www.yungolabuildanddesign.com",
    logo: "https://www.yungolabuildanddesign.com/logo.png",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
    description: "Premium architecture, design and construction company transforming ideas into built realities. From concept drawings to completed homes and commercial spaces across Nigeria.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lekki Phase 1",
      addressLocality: "Lagos",
      addressCountry: "NG"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348000000000",
      contactType: "customer service"
    },
    sameAs: [
      "https://instagram.com",
      "https://linkedin.com"
    ]
  };

  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${josefinSans.variable} ${montserrat.variable} ${oswald.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
      </body>
    </html>
  );
}
