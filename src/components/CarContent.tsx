import CarDetails from "./CarDetails";
import CarImage from "./CarImage";

type CarContentProps = {
  carImage: string;
  carName: string;
  tankCapacity: number;
  steering: string;
  seats: string;
};

function CarContent({
  carImage,
  carName,
  tankCapacity,
  steering,
  seats,
}: CarContentProps) {
  return (
    <div className="flex justify-between items-center md:flex-col gap-1 md:gap-4">
      <CarImage carImage={carImage} carName={carName} />

      <CarDetails
        tankCapacity={tankCapacity}
        steering={steering}
        seats={seats}
      />
    </div>
  );
}

export default CarContent;
