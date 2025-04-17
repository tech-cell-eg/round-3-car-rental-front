import CarPrice from "./CarPrice";
import { Car } from "../types/car";

import CarInfo from "./CarInfo";
import CarContent from "./CarContent";

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
  return (
    <article className="flex flex-col gap-3 py-5 px-4 md:px-6 bg-surface-default border border-content-dimmed rounded-lg hover:shadow-xl cursor-pointer duration-base">
      <CarInfo carName={car.name} carType={car.type} />

      <CarContent
        carImage={car.image}
        carName={car.name}
        tankCapacity={car.gasoline}
        steering={car.steering}
        seats={car.seats}
      />

      <div className="flex justify-between items-center">
        <CarPrice
          salePrice={
            car.sale_price !== null ? Number(car.sale_price) : undefined
          }
          price={Number(car.price)}
        />

        <button
          type="button"
          className="py-2 px-5 text-content-light bg-accent-primary hover:bg-accent-secondary border border-transparent hover:border-accent-secondary rounded-lg hover:shadow-md duration-medium"
        >
          Rent Now
        </button>
      </div>
    </article>
  );
}

export default CarCard;
