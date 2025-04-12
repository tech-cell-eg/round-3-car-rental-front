import Icon from "./Icon";

function CarCard() {
  return (
    <article className="flex flex-col gap-3 py-5 px-4 md:px-6 bg-surface-default border border-content-dimmed rounded-lg hover:shadow-xl cursor-pointer duration-base">
      {/* CAR INFO */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-semibold text-content-dark">
            {/* car name */}
            Koenigsegg
          </h3>
          <div className="heart-icon text-red-500">{/*hert icon*/}❤</div>
        </div>
        <h4 className="font-medium text-sm text-content-base leading-[150%]">
          Sport{/* car type */}
        </h4>
      </div>

      {/* CONTENT */}
      <div className="flex justify-between items-center md:flex-col gap-1 md:gap-4">
        <div className="car-image-wrapper w-3/4 md:w-full h-48 bg-slate-200 rounded-lg">
          {/* CAR IMAGE */}
        </div>

        {/* CAR DETAILS */}
        <div className="flex flex-col md:flex-row justify-between gap-3  w-fit md:w-full font-medium text-xs md:text-sm text-content-base leading-[150%]">
          <div className="flex items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" /> {/* tank icon */}
            </span>
            <p className="w-full">90L</p> {/*car tank capacity*/}
          </div>

          <div className="flex items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" /> {/* steering icon */}
            </span>
            <p className="w-full">Manual</p> {/* sttering type*/}
          </div>

          <div className="flex justify-between items-center gap-1 w-full md:w-fit">
            <span className="image">
              <Icon name="filter" /> {/* users icon */}
            </span>
            <p className="w-full">2 People</p> {/* seats number */}
          </div>
        </div>
      </div>

      {/* PRICES */}
      <div className="flex justify-between items-center">
        {/* <div className="flex flex-col gap-1 font-bold text-xl text-content-base">
          original price
          <div className="flex">
            <span className="text-content-dark">$ OP /</span>day
          </div>
          discount price
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-conetnt-dark">$ SP /</span>day
            </div>
            <span className="text-sm line-though">$ old price</span>
          </div>
        </div> */}
        <div className="font-semibold text-content-dark">
          $ 99.00 /{" "}
          <span className="font-medium text-xs text-content-base">day</span>
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
