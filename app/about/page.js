import AboutHero from "@/components/sections/about/AboutHero";
import MissionVision from "@/components/sections/about/MissionVision";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import LeadershipTeam from "@/components/sections/about/LeadershipTeam";
import Milestones from "@/components/sections/about/Milestones";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo/structured-data";
import { BASE_URL } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: `${BASE_URL}/about`,
            name: "About Yungola | Our Story, Team & Mission | Luxury Architecture Nigeria",
            description:
              "Meet the Yungola Build and Design team — NIA-certified architects and master builders with 10+ years delivering luxury residential and commercial masterpieces across Nigeria.",
            image: `${BASE_URL}/og/yungola-og-about.jpg`,
          }),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "About", url: `${BASE_URL}/about` },
          ]),
        ]}
      />
      <div className="bg-surface-bright/40 text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
        <AboutHero />
        <MissionVision />
        <WhyChooseUs />
        <LeadershipTeam />
        <Milestones />
      </div>
    </>
  );
}
