import HeroBannersWrapper from "./HeroBannersWrapper";
import PickAndDropSection from "./PickAndDropSection";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-between md:justify-evenly h-[65dvh] md:h-[95dvh] px-3 md:px-7 bg-surface-secondary">
      <HeroBannersWrapper />
      <PickAndDropSection />
    </section>
  );
}

export default HeroSection;
