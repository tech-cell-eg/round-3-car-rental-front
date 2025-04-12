import HeroSection from "../components/HeroSection";
import TitledCarsSetion from "../components/TitledCarsSection";

function Home() {
  return (
    <section className="bg-surface-secondary">
      <HeroSection />
      <TitledCarsSetion
        count={4}
        headingTitle="Popular Cars"
        gridCols="md:grid-cols-3"
      />
      <TitledCarsSetion
        count={12}
        headingTitle="Recommendation Cars"
        gridCols="md:grid-cols-4"
      />
    </section>
  );
}

export default Home;
