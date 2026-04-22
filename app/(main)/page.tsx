import { HeroSection } from '@/components/home/hero-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { LatestMcqsSection } from '@/components/home/latest-mcqs-section';
import { LeaderboardPreview } from '@/components/home/leaderboard-preview';
import { LearningModesSection } from '@/components/home/learning-modes-section';
import { PricingSection } from '@/components/home/pricing-section';
import { SubjectCoverageSection } from '@/components/home/subject-coverage-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LatestMcqsSection />
      <SubjectCoverageSection />
      <HowItWorksSection />
      <LearningModesSection />
      <PricingSection />
      <LeaderboardPreview />
    </>
  );
}
