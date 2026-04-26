"use client";

import { useEffect, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { copyByLocale } from "@/lib/copy";
import type { GithubRepo } from "@/lib/github";
import type { Project } from "@/lib/projects";
import { usePortfolioStore } from "@/store/portfolioStore";
import { AuroraBackground } from "./AuroraBackground";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { ProofStrip } from "./ProofStrip";
import { AboutSection } from "./AboutSection";
import { ServicesSection } from "./ServicesSection";
import { SystemMap } from "./SystemMap";
import { ProjectsSection } from "./ProjectsSection";
import { GithubReposSection } from "./GithubReposSection";
import { SignatureCase } from "./SignatureCase";
import { SkillsSection } from "./SkillsSection";
import { HowIWork } from "./HowIWork";
import { CredibilitySection } from "./CredibilitySection";
import { ExperienceSection } from "./ExperienceSection";
import { AvailableCta } from "./AvailableCta";
import { ContactSection } from "./ContactSection";

type Props = {
  projects: Project[];
  githubRepos: GithubRepo[] | null;
};

export function PortfolioExperience({ projects, githubRepos }: Props) {
  const { locale, setLocale } = usePortfolioStore();
  const [activeSection, setActiveSection] = useState("hero");
  const copy = copyByLocale[locale];

  const cvFile = useMemo(
    () => copy.cvDownloads.find((cv) => cv.code.toLowerCase() === locale)?.file ?? copy.cvDownloads[0].file,
    [copy.cvDownloads, locale]
  );

  const sections = useMemo(
    () => [
      { id: "hero", label: copy.navHome },
      { id: "about", label: copy.nav[0] },
      { id: "systems", label: copy.nav[1] },
      { id: "projects", label: copy.nav[2] },
      { id: "github-repos", label: copy.nav[3] },
      { id: "skills", label: copy.nav[4] },
      { id: "experience", label: copy.nav[5] },
      { id: "contact", label: copy.navContact }
    ],
    [copy.nav, copy.navHome, copy.navContact]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = copy.dir;
  }, [locale, copy.dir]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        {copy.skipToContent}
      </a>
      <main id="main" className="relative min-h-screen text-text antialiased" dir={copy.dir}>
        <AuroraBackground />

        <div className="portfolio-shell relative z-10 px-3 pt-4 sm:px-4">
          <Navbar
            sections={sections}
            activeSection={activeSection}
            locale={locale}
            setLocale={setLocale}
            brandMonogram={copy.brandMonogram}
            brandName={copy.brandName}
            cvLabel={copy.navCvLabel}
            cvFile={cvFile}
          />

          <Hero
            eyebrow={copy.heroEyebrow}
            title={copy.heroTitle}
            statement={copy.heroStatement}
            primaryCta={copy.heroPrimaryCta}
            secondaryCta={copy.heroSecondaryCta}
            availability={copy.heroAvailability}
            responseTime={copy.heroResponseTime}
            headlineTop={copy.heroHeadlineTop}
            headlineFocus={copy.heroHeadlineFocus}
            headlineBottom={copy.heroHeadlineBottom}
            githubLabel={copy.githubLabel}
            cvLabel={copy.availableBtnCv}
            cvFile={cvFile}
            stats={copy.heroStats}
          />

          <AvailableCta
            title={copy.availableTitle}
            body={copy.availableBody}
            btnContact={copy.availableBtnContact}
            btnCv={copy.availableBtnCv}
            btnProjects={copy.availableBtnProjects}
            cvFile={cvFile}
            variant="hero"
          />

          <ProofStrip label={copy.proofStripLabel} items={copy.proofStripItems} />

          <div className="section-divider mx-auto max-w-6xl" />

          <AboutSection
            eyebrow={copy.aboutEyebrow}
            title={copy.aboutTitle}
            body={copy.aboutBody}
            highlights={copy.aboutHighlights}
            focusTitle={copy.aboutFocusTitle}
            focusItems={copy.aboutFocusItems}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <ServicesSection
            eyebrow={copy.servicesEyebrow}
            title={copy.servicesTitle}
            items={copy.servicesItems}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <SystemMap
            eyebrow={copy.systemMapEyebrow}
            title={copy.systemMapTitle}
            description={copy.systemMapDescription}
            layers={copy.mapLayers}
            layerPrefix={copy.layerPrefix}
            activeLabel={copy.activeLabel}
            idleLabel={copy.idleLabel}
            flowLabel={copy.flowLabel}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <ProjectsSection
            eyebrow={copy.projectsEyebrow}
            title={copy.projectsTitle}
            description={copy.projectsSubtitle}
            projects={projects}
            badgeLabel={copy.projectsBadge}
            emptyLabel={copy.projectsEmpty}
            problemLabel={copy.projectProblemLabel}
            solutionLabel={copy.projectSolutionLabel}
            resultLabel={copy.projectResultLabel}
            viewCaseStudy={copy.projectViewCaseStudy}
            liveDemo={copy.projectLiveDemo}
            viewGithub={copy.projectViewGithubLabel}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <GithubReposSection
            repos={githubRepos}
            eyebrow={copy.githubReposEyebrow}
            title={copy.githubReposTitle}
            description={copy.githubReposDescription}
            viewMoreLabel={copy.githubReposViewMore}
            viewGithubLabel={copy.githubReposViewGithub}
            errorLabel={copy.githubReposError}
            emptyLabel={copy.githubReposEmpty}
            searchPlaceholder={copy.githubSearchPlaceholder}
            filterCategories={copy.githubFilterCategories}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <SignatureCase
            eyebrow={copy.signature.eyebrow}
            title={copy.signature.title}
            summary={copy.signature.summary}
            problemTitle={copy.signature.problemTitle}
            problem={copy.signature.problem}
            constraintsTitle={copy.signature.constraintsTitle}
            constraints={copy.signature.constraints}
            solutionTitle={copy.signature.solutionTitle}
            solution={copy.signature.solution}
            architectureTitle={copy.signature.architectureTitle}
            architecture={copy.signature.architecture}
            metricsTitle={copy.signature.metricsTitle}
            metrics={copy.signature.metrics}
            lessonsTitle={copy.signature.lessonsTitle}
            lessons={copy.signature.lessons}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <SkillsSection
            eyebrow={copy.skillsEyebrow}
            title={copy.skillsTitle}
            description={copy.skillsDescription}
            groups={copy.skillsGroups}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <HowIWork
            eyebrow={copy.howIWork.eyebrow}
            title={copy.howIWork.title}
            description={copy.howIWork.description}
            items={copy.howIWork.items}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <CredibilitySection
            eyebrow={copy.credibilityEyebrow}
            title={copy.credibilityTitle}
            items={copy.credibilityItems}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <ExperienceSection
            eyebrow={copy.experienceEyebrow}
            title={copy.experienceTitle}
            description={copy.experienceDescription}
            items={copy.experienceItems}
          />

          <div className="section-divider mx-auto max-w-6xl" />

          <AvailableCta
            title={copy.availableTitle}
            body={copy.availableBody}
            btnContact={copy.availableBtnContact}
            btnCv={copy.availableBtnCv}
            btnProjects={copy.availableBtnProjects}
            cvFile={cvFile}
            variant="pre-contact"
          />

          <ContactSection
            eyebrow={copy.contactEyebrow}
            title={copy.contactTitle}
            description={copy.contactDescription}
            emailLabel={copy.contactEmailLabel}
            cvLabel={copy.contactCvLabel}
            cvDownloads={copy.cvDownloads}
            githubLabel={copy.githubLabel}
            linkedinLabel={copy.linkedinLabel}
            footerBuiltWith={copy.footerBuiltWith}
            heroName={copy.heroTitle}
            responseTime={copy.heroResponseTime}
            location={copy.contactLocation}
            availableText={copy.contactAvailableText}
            formTitle={copy.contactFormTitle}
            formName={copy.contactFormName}
            formEmail={copy.contactFormEmail}
            formProjectType={copy.contactFormProjectType}
            formMessage={copy.contactFormMessage}
            formSend={copy.contactFormSend}
          />
        </div>
      </main>
    </MotionConfig>
  );
}
