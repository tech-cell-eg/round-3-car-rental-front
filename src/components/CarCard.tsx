function CarCard() {
  return (
    <article className="flex flex-col justify-between text-content-dark p-6">
      {/* CAR INFO */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl text-content-dark leading-[150%] tracking-[-3%]">
            {/* car name */}
          </h3>
          {/* heart button */}
        </div>
        <h4 className="font-bold text-sm text-content-base leading-[150%] tracking-[-2%]">
          {/* car type */}
        </h4>
      </div>

      {/* CONTENT */}
      <div className="flex justify-between md:flex-col">
        {/* CAR IMAGE */}
        <div>{/* car image */}</div>

        {/* CAR DETAILS */}
        <div className="flex flex-col md:flex-row justify-between font-medium text-sm text-content-base leading-[150%] tracking-[-2%]">
          <div className="flex gap-1">
            <span className="image">{/* tank icon */}</span>
            {/*car tank capacity*/}
          </div>
          <div className="flex gap-1">
            <span className="image">{/* steering icon icon */}</span>
            {/*steering type*/}
          </div>
          <div className="flex gap-1">
            <span className="image">{/* users icon*/}</span>
            {/*car capacity*/}
          </div>
        </div>
      </div>

      {/* PRICES */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 font-bold text-xl text-content-base">
          {/* original price */}
          <div className="flex">
            <span className="text-content-dark">$ OP /</span>day
          </div>
          {/* discount price */}
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-conetnt-dark">$ SP /</span>day
            </div>
            <span className="text-sm line-though">$ old price</span>
          </div>
        </div>

        {/* RENT NOW BUTTON */}
        <button
          type="button"
          className="text-content-light bg-accent-primary py-2 px-5 rounded-sm"
        >
          Rent Now
        </button>
      </div>
    </article>
  );
}

export default CarCard;
