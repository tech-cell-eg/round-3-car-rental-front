import FilterCategoryGroup from "./FilterCategoryGroup";
import FilterPriceSlider from "./FilterPriceSlider";

function FilterPanel() {
  return (
    <section className="flex flex-col gap-7 w-fit p-8">
      <FilterCategoryGroup />
      <FilterPriceSlider />
    </section>
  );
}

export default FilterPanel;
