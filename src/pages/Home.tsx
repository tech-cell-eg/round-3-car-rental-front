import HeroSection from "../components/HeroSection";
import PopularCarsSection from "../components/PopularCarsSection";

function Home() {
  return (
    <section className="bg-surface-secondary">
      <HeroSection />
      <PopularCarsSection count={4} headingValue="Popular Cars" />
      <PopularCarsSection count={12} headingValue="Recommendation Cars" />
    </section>
  );
}

export default Home;
