import { projectsData, getProjectDetails } from "@/lib/data/projects";

// Generate static params for all projects at build time to maximize SEO indexing speed
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

// Dynamically generate metadata tailored for each specific project
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return {
      title: "Project Not Found | Yungola Build and Design",
    };
  }

  const details = getProjectDetails(project);
  
  return {
    title: `${project.title} | ${project.type} | Yungola Portfolio`,
    description: project.desc || details.overview.mission,
    openGraph: {
      title: `${project.title} | Yungola Build and Design`,
      description: project.desc || details.overview.mission,
      url: `https://www.yungolabuildanddesign.com/projects/${project.id}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.alt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.desc || details.overview.mission,
      images: [project.image],
    },
  };
}

export default function ProjectLayout({ children }) {
  return <>{children}</>;
}
