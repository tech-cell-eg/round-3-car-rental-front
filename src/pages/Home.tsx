import HeroSection from "../components/HeroSection";
import TitledCarsSection from "../components/TitledCarsSection";
import useFetchCarsList from "../hooks/useFetchCarsList";
import useFetchRecommendedCars from "../hooks/useFetchRecommendedCars";

function Home() {
  const { carsList, error: errorOfCars } = useFetchCarsList();
  const { recommendedCars, error: errorOfRecommended } =
    useFetchRecommendedCars();

  if (errorOfCars || errorOfRecommended)
    return <p>Error: {errorOfCars || errorOfRecommended}</p>;

  return (
    <section className="bg-surface-secondary">
      <HeroSection />

      <TitledCarsSection
        carList={carsList.slice(0, 6)}
        headingTitle="Popular Cars"
        gridCols="md:grid-cols-3"
      />

      <TitledCarsSection
        carList={recommendedCars}
        headingTitle="Recommendation Cars"
        gridCols="md:grid-cols-4"
      />
    </section>
  );
}

export default Home;
