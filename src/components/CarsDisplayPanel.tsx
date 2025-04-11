interface CarsDisplayPanelProps {
  count: number;
}

function CarsDisplayPanel({ count }: CarsDisplayPanelProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        // THE CAR CARD COMPONENT SHOULD BE REPLACED WITH THE ARTICLE ELEMENT BELOW
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
            <img src="" alt="Car" className="car-image" />
          </div>

          <div className="car-details flex justify-between items-center text-sm text-content-base">
            <span>90L</span>
            <span>Manual</span>
            <span>2 People</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="font-semibold text-content-dark">
              $ 99.00 /{" "}
              <span className="font-medium text-xs text-content-base">day</span>
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
  );
}

export default CarsDisplayPanel;
