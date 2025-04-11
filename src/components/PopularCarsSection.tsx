interface PopularCarsSectionProps {
  count: number;
  headingValue: string;
}

function PopularCarsSection({ count, headingValue }: PopularCarsSectionProps) {
  return (
    <section className="flex flex-col gap-4 mt-12 py-5 px-8 bg-surface-secondary">
      <h3 className="ms-2 font-medium text-content-soft">{headingValue}</h3>
      <div className="grid grid-cols-4 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <article
            key={index}
            className="flex flex-col gap-3 py-5 px-6 bg-surface-default border border-content-dimmed rounded-lg hover:shadow-xl cursor-pointer duration-base"
          >
            <div className="car-info flex flex-col">
              <div className="flex justify-between">
                <div className="car-name font-semibold text-content-dark">
                  Koenigsegg
                </div>
                <div className="heart-icon text-red-500">❤</div>
              </div>
              <div className="car-type text-content-base">Sport</div>
            </div>

            <div className="car-image-wrapper h-48">
              <img src="" alt="" className="car-image" />
            </div>

            <div className="car-details flex justify-between items-center text-sm text-content-base">
              <span className="">90L</span>
              <span className="">Manual</span>
              <span className="">2 People</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="font-semibold text-content-dark">
                $ 99.00 /{" "}
                <span className="font-medium text-xs text-content-base">
                  day
                </span>
              </div>
              <button
                type="button"
                className="py-2 px-2 text-content-light bg-accent-primary rounded-lg"
              >
                Rent Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PopularCarsSection;
