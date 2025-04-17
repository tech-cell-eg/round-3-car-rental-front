import Icon from "./Icon";

type CarDetailsProps = {
  tankCapacity: number;
  steering: string;
  seats: string | number;
};

function CarDetails({ tankCapacity, steering, seats }: CarDetailsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-3 w-fit md:w-full font-medium text-xs md:text-sm text-content-base leading-[150%]">
      <div className="flex items-center gap-1 w-full md:w-fit">
        <span className="image">
          <Icon name="filter" />
        </span>
        <p className="w-full">{tankCapacity}L</p>
      </div>

      <div className="flex items-center gap-1 w-full md:w-fit">
        <span className="image">
          <Icon name="filter" />
        </span>
        <p className="w-full">
          {steering.charAt(0).toUpperCase() + steering.slice(1).toLowerCase()}
        </p>
      </div>

      <div className="flex justify-between items-center gap-1 w-full md:w-fit">
        <span className="image">
          <Icon name="filter" />
        </span>
        <p className="w-full">{seats} People</p>
      </div>
    </div>
  );
}

export default CarDetails;
