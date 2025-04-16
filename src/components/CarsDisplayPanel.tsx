import CarCard from "./CarCard";
import { Car } from "../types/car";

interface CarsDisplayPanelProps {
  carList: Car[];
  gridCols?: string;
  count?: number;
}

function CarsDisplayPanel({
  carList,
  gridCols = "md:grid-cols-4",
  count,
}: CarsDisplayPanelProps) {
  const displayedCars = count ? carList.slice(0, count) : carList;

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
      {displayedCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarsDisplayPanel;
