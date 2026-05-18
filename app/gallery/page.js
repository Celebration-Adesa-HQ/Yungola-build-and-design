import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryProjects from "@/components/sections/gallery/GalleryProjects";

export const metadata = {
  title: "Our Projects | YUNGOLA",
  description: "Explore our cinematic architectural portfolio.",
};

export default function GalleryPage() {
  return (
    <main className="bg-darkBackground text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
      {/* Projects Section */}
      <section
        className="py-24 relative overflow-hidden"
        aria-labelledby="projects-heading"
        data-purpose="projects-section"
      >
        {/* Background Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-outline-variant, #514532) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <GalleryHero />
          <GalleryProjects />
        </div>
      </section>
    </main>
  );
}
