import { projectsData } from "@/lib/data/projects";

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

  // Dynamic portfolio project routes automatically scaled from data
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
