import FilterCategoryGroup from "./FilterCategoryGroup";
import FilterPriceSlider from "./FilterPriceSlider";

function FilterPanel() {
  return (
    <section className="hidden md:flex flex-col gap-7 w-fit p-8 bg-surface-default">
      <FilterCategoryGroup />
      <FilterPriceSlider />
    </section>
  );
}

export default FilterPanel;
