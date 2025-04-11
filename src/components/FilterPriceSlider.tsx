import { useState } from "react";
import FilterGroupHeading from "./FilterGroupHeading";

function FilterPriceSlider() {
  const [maxPrice, setMaxPrice] = useState(100);

  const handleOnPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-3">
      <FilterGroupHeading value="price" />

      <label
        htmlFor="price"
        className="flex flex-col gap-1 font-semibold text-content-secondary"
      >
        <input
          type="range"
          name="price"
          id="price"
          min="50"
          max="200"
          step="5"
          onChange={handleOnPriceChange}
        />
        Max. ${maxPrice.toFixed(2)}
      </label>
    </div>
  );
}

export default FilterPriceSlider;
