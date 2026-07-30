import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import Testimonials from "@/components/sections/home/Testimonials";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generatePageMetadata } from "@/lib/seo/metadata";
import {
  webPageSchema,
  breadcrumbSchema,
  reviewSchema,
  faqSchema,
} from "@/lib/seo/structured-data";
import { BASE_URL } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata("home");

const HOME_FAQS = [
  {
    question: "What services does Yungola Build and Design offer?",
    answer:
      "Yungola Build and Design offers three core services: hyper-realistic 3D architectural visualization, master construction (full project lifecycle from foundation to handover), and precision architectural drawing. We also provide turnkey solutions, luxury interior curation, and project management.",
  },
  {
    question: "Where is Yungola Build and Design located?",
    answer:
      "Our headquarters is at Plot 75, Block 3B, Ogunnusi Road, Grammar School Bus Stop, Ojodu, Lagos State, Nigeria. We serve clients in Lagos, Abuja, Port Harcourt, and other major cities across Nigeria.",
  },
  {
    question: "How much does it cost to build a luxury house with Yungola?",
    answer:
      "Our project costs vary based on scope, materials, and design complexity. We offer free initial consultations to understand your vision and budget. Contact us at +2349071518988 or info@yungolabuildanddesign.com to get a tailored project estimate.",
  },
  {
    question: "Is Yungola Build and Design NIA certified?",
    answer:
      "Yes. Yungola Build and Design received full corporate certification from the Nigerian Institute of Architects (NIA) in 2018, confirming our professional standards and design authority.",
  },
  {
    question: "How long does a typical construction project take?",
    answer:
      "Timelines depend on the project scope. A standard residential build typically ranges from 6 to 18 months. We provide detailed milestone tracking from day one, ensuring full transparency throughout the build lifecycle.",
  },
];

const HOME_REVIEWS = [
  {
    author: "Engr. Tunde Adeleke",
    reviewBody:
      "Working with Yungola Build and Design was a masterclass in architectural execution. They took our vague concepts and transformed them into a breathtaking, cinematic reality. Every space feels intentional, luxurious, and perfectly aligned with our vision.",
    ratingValue: 5,
    datePublished: "2024-03-15",
  },
  {
    author: "Amina Aliko",
    reviewBody:
      "Yungola's attention to structural precision and modern editorial aesthetics is unmatched in Nigeria. From the initial 3D models to the final bespoke furniture curation, they delivered an absolute masterpiece.",
    ratingValue: 5,
    datePublished: "2024-05-10",
  },
  {
    author: "Chinedu Okafor",
    reviewBody:
      "The level of professionalism, transparency, and design authority Yungola brought to our commercial project was extraordinary. They don't just build structures; they curate timeless environments.",
    ratingValue: 5,
    datePublished: "2024-07-22",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: BASE_URL,
            name: "Yungola Build and Design | Cinematic Architecture & Luxury Construction Nigeria",
            description:
              "Yungola Build and Design is Nigeria's premium cinematic architectural design and construction studio. We transform visions into breathtaking built realities.",
            image: `${BASE_URL}/og/yungola-og-home.jpg`,
          }),
          breadcrumbSchema([{ name: "Home", url: BASE_URL }]),
          faqSchema(HOME_FAQS),
          reviewSchema(HOME_REVIEWS),
        ]}
      />
      <div className="flex flex-col w-full bg-surface-bright/40 min-h-screen">
        <Hero />
        <About />
        <ServicesOverview />
        <FeaturedProjects />
      </div>
    </>
  );
}
