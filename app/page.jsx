import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "YUNGOLA | Cinematic Architectural Design",
  description: "Yungola merges structural precision with cinematic aesthetics to create residences that transcend mere living spaces. We build the exceptional.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-darkBackground min-h-screen">
      <Hero />
      <About />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
    </div>
  );
}
