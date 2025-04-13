import HeroBannersWrapper from "./HeroBannersWrapper";
import PickAndDropSection from "./PickAndDropSection";

function HeroSection() {
  return (
    <section className="flex flex-col justify-between md:justify-evenly gap-10 h-[65dvh] md:h-[95dvh] mt-5 md:mt-0 px-3 md:px-7 bg-surface-secondary">
      <HeroBannersWrapper />
      <PickAndDropSection />
    </section>
  );
}

export default HeroSection;
