import CarsDisplayPanel from "../components/CarsDisplayPanel";
import FilterPanel from "../components/FilterPanel";
import PickAndDropSection from "../components/PickAndDropSection";

function Category() {
  return (
    <section className="flex bg-surface-secondary">
      <FilterPanel />
      <section className="flex flex-col gap-8 pt-8 px-6">
        <PickAndDropSection />
        <CarsDisplayPanel count={9} />
      </section>
    </section>
  );
}

export default Category;
