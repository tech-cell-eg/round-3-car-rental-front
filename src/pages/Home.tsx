import HeroSection from "../components/HeroSection";
import TitledCarsSection from "../components/TitledCarsSection";
import useFetchCarsList from "../hooks/useFetchCarsList";

function Home() {
  const { carsList, error } = useFetchCarsList();

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="bg-surface-secondary">
      <HeroSection />

      <TitledCarsSection
        carList={carsList.slice(0, 6)}
        headingTitle="Popular Cars"
        gridCols="md:grid-cols-3"
      />

      <TitledCarsSection
        carList={carsList.slice(4, 11)}
        headingTitle="Recommendation Cars"
        gridCols="md:grid-cols-4"
      />
    </section>
  );
}

export default Home;
