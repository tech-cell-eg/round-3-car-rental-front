import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import TitledCarsSection from "../components/TitledCarsSection";
import { Car } from "../types/car";

function Home() {
  const [carList, setCarList] = useState<Car[]>([]);

  const fetchCarList = async () => {
    const url =
      "https://round-3-car-rental-web-api.digital-vision-solutions.com/api/v1";
    const response = await fetch(`${url}/cars`);
    const data = await response.json();
    setCarList(data.data);
    console.log(carList);
  };

  useEffect(() => {
    fetchCarList();
  }, []);

  return (
    <section className="bg-surface-secondary">
      <HeroSection />

      <TitledCarsSection
        carList={carList.slice(0, 3)}
        headingTitle="Popular Cars"
        gridCols="md:grid-cols-3"
      />

      <TitledCarsSection
        carList={carList.slice(4, 11)}
        headingTitle="Recommendation Cars"
        gridCols="md:grid-cols-4"
      />
    </section>
  );
}

export default Home;
