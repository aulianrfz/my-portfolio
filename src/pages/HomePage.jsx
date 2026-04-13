// pages/HomePage.jsx
import HeroSection from "../features/home/components/HeroSection";
import ExperiencePreview from "../features/home/components/ExperiencePreview";
import ProjectsPreview from "../features/home/components/ProjectsPreview";
import SkillsPreview from "../features/home/components/SkillsPreview";
import EducationPreview from "../features/home/components/EducationPreview";
import FooterCTA from "../features/home/components/FooterCTA";

const Divider = () => <div className="h-px bg-surface-border/40" />;

export default function HomePage() {
  return (
    <div className="bg-surface">
      <div className="noise" />
      <HeroSection />
      <Divider />
      <ExperiencePreview />
      <Divider />
      <ProjectsPreview />
      <Divider />
      <SkillsPreview />
      <Divider />
      <EducationPreview />
      <FooterCTA />
    </div>
  );
}