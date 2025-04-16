import Icon from "./Icon";

type Car = {
  id: number;
  name: string;
  image: string;
  type: string;
  gasoline: number;
  seats: string;
  steering: string;
  price: string;
  sale_price: string | null;
};

type CarCardProps = {
  car: Car;
};

function CarCard({ car }: CarCardProps) {
  return (
    <article className="flex flex-col gap-3 py-5 px-4 md:px-6 bg-surface-default border border-content-dimmed rounded-lg hover:shadow-xl cursor-pointer duration-base">
      {/* CAR INFO */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-semibold text-content-dark">{car.name}</h3>
          <div className="heart-icon text-red-500">❤</div>
        </div>
        <h4 className="font-medium text-sm text-content-base leading-[150%]">
          {car.type}
        </h4>
      </div>

      {/* CONTENT */}
      <div className="flex justify-between items-center md:flex-col gap-1 md:gap-4">
        <div className="car-image-wrapper w-3/4 md:w-full h-48 bg-slate-200 rounded-lg overflow-hidden">
          {car.image ? (
            <img
              src={car.image}
              alt={`${car.name} image`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-center text-sm text-content-base">
              No Image Available
            </div>
          )}
        </div>

        {/* CAR DETAILS */}
        <div className="flex flex-col md:flex-row justify-between gap-3 w-fit md:w-full font-medium text-xs md:text-sm text-content-base leading-[150%]">
          <div className="flex items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" />
            </span>
            <p className="w-full">{car.gasoline}L</p>
          </div>

          <div className="flex items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" />
            </span>
            <p className="w-full">{car.steering}</p>
          </div>

          <div className="flex justify-between items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" />
            </span>
            <p className="w-full">{car.seats} People</p>
          </div>
        </div>
      </div>

      {/* PRICES */}
      <div className="flex justify-between items-center">
        <div className="font-semibold text-content-dark">
          ${car.sale_price ?? car.price}{" "}
          <span className="font-medium text-xs text-content-base">/ day</span>
        </div>

        {/* RENT NOW BUTTON */}
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
