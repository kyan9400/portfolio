import { getGithubRepos } from "@/lib/github";
import { projects } from "@/lib/projects";
import { PortfolioExperience } from "@/components/PortfolioExperience";

export default async function HomePage() {
  const github = await getGithubRepos();
  const githubRepos = github.ok ? github.repos : null;

  return <PortfolioExperience projects={projects} githubRepos={githubRepos} />;
}
