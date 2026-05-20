import { showroomContent } from "@/lib/data/siteContent";

export default function sitemap() {
  const baseUrl = "https://www.yungolabuildanddesign.com";

  // Base core pages
  const routes = [
    "",
    "/gallery",
    "/showroom",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/gallery" ? 0.9 : 0.8,
  }));

  // Dynamic gallery category routes
  const galleryRoutes = showroomContent.servicesGrid.map((service) => ({
    url: `${baseUrl}/gallery/${service.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...galleryRoutes];
}
