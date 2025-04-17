import { useEffect, useState } from "react";
import CarsDisplayPanel from "../components/CarsDisplayPanel";
import FilterPanel from "../components/FilterPanel";
import PickAndDropSection from "../components/PickAndDropSection";
import { Car } from "../types/car";

function Category() {
  const [carList, setCarList] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch(
        "https://round-3-car-rental-web-api.digital-vision-solutions.com/api/v1/cars"
      );
      const data = await res.json();
      setCarList(data.data);
    };

    fetchCars();
  }, []);

  return (
    <section className="flex bg-surface-secondary">
      <FilterPanel />
      <section className="flex flex-col gap-8 pt-8 px-6">
        <PickAndDropSection />
        <CarsDisplayPanel carList={carList} count={9} />
      </section>
    </section>
  );
}

export default Category;
