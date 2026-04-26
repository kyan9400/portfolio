import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ProjectDetailClient } from "@/components/ProjectDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: `${project.title} | Alhassan Alfarran` };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <ProjectDetailClient project={project} />
    </main>
  );
}
