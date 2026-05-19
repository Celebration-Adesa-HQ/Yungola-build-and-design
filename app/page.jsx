import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import Testimonials from "@/components/sections/home/Testimonials";

export const metadata = {
  title: "YUNGOLA | Cinematic Architectural Design",
  description: "Yungola merges structural precision with cinematic aesthetics to create residences that transcend mere living spaces. We build the exceptional.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-surface-bright/40 min-h-screen">
      <Hero />
      <About />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
    </div>
  );
}
