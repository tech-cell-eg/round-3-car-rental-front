import HeroBannersWrapper from "./HeroBannersWrapper";
import PickAndDropSection from "./PickAndDropSection";

function HeroSection() {
  return (
    <section className="relative h-dvh bg-slate-200">
      <HeroBannersWrapper />
      <PickAndDropSection />
    </section>
  );
}

export default HeroSection;
