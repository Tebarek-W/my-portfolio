import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

async function getGitHubRepoCount(): Promise<number | null> {
  try {
    const token = process.env.GITHUB_TOKEN;

    if (token) {
      const authenticatedResponse = await fetch(
        "https://api.github.com/user/repos?affiliation=owner,collaborator,organization_member&visibility=all&per_page=1",
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28",
          },
          signal: AbortSignal.timeout(5000),
          next: { revalidate: 3600 },
        }
      );

      if (authenticatedResponse.ok) {
        const repositories = (await authenticatedResponse.json()) as unknown[];
        const linkHeader = authenticatedResponse.headers.get("link");
        const lastPage = linkHeader?.match(/[?&]page=(\d+)[^>]*>;\s*rel="last"/)?.[1];

        return lastPage ? Number(lastPage) : repositories.length;
      }
    }

    // Public fallback when no token is configured or authenticated access fails.
    const response = await fetch("https://api.github.com/users/Tebarek-W", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const data = (await response.json()) as { public_repos?: number };
    return typeof data.public_repos === "number" ? data.public_repos : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const githubRepoCount = await getGitHubRepoCount();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection githubRepoCount={githubRepoCount} />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
