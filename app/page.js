import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ShowroomTeaser from "@/components/sections/ShowroomTeaser";
import Testimonials from "@/components/sections/Testimonials";
import QuoteCTABand from "@/components/sections/QuoteCTABand";

export const metadata = {
  title: "Yungola Build and Design | Architecture, Construction & Design Nigeria",
  description:
    "Premium architecture, design and construction company. From concept drawings to completed homes and commercial spaces across Nigeria.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <ServicesOverview />
      <ShowroomTeaser />
      <Testimonials />
      <QuoteCTABand />
    </>
  );
}
