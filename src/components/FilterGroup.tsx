import FilterGroupHeading from "./FilterGroupHeading";
import FilterOptionList from "./FilterOptionList";

type TypeOption = {
  id: number;
  label: string;
  count: number;
};

type CapacityOption = {
  id: number;
  capacity: number;
  count: number;
};

type FilterCategory =
  | {
      id: number;
      title: "type";
      options: TypeOption[];
    }
  | {
      id: number;
      title: "capacity";
      options: CapacityOption[];
    };

interface FilterGroupProps {
  category: FilterCategory;
}

function FilterGroup({ category }: FilterGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <FilterGroupHeading value={category.title} />
      <FilterOptionList options={category.options} />
    </div>
  );
}

export default FilterGroup;
