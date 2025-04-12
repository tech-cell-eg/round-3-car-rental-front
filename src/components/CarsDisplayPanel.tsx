import CarCard from "./CarCard";

interface CarsDisplayPanelProps {
  count: number;
  gridCols?: string;
}

function CarsDisplayPanel({
  count,
  gridCols = "md:grid-cols-4",
}: CarsDisplayPanelProps) {
  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
      {Array.from({ length: count }).map((_, index) => (
        <CarCard key={index} />
      ))}
    </div>
  );
}

export default CarsDisplayPanel;
