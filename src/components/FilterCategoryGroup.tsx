import FilterGroup from "./FilterGroup";

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

const filterCategories: FilterCategory[] = [
  {
    id: 1,
    title: "type",
    options: [
      { id: 1, label: "Sport", count: 10 },
      { id: 2, label: "SUV", count: 12 },
      { id: 3, label: "MPV", count: 16 },
      { id: 4, label: "Sedan", count: 20 },
      { id: 5, label: "Coupe", count: 14 },
      { id: 6, label: "Hatchback", count: 14 },
    ],
  },
  {
    id: 2,
    title: "capacity",
    options: [
      { id: 1, capacity: 2, count: 10 },
      { id: 2, capacity: 4, count: 14 },
      { id: 3, capacity: 6, count: 12 },
      { id: 4, capacity: 8, count: 16 },
    ],
  },
];

function FilterCategoryGroup() {
  return (
    <div className="flex flex-col gap-7">
      {filterCategories.map((category) => (
        <FilterGroup key={category.id} category={category} />
      ))}
    </div>
  );
}

export default FilterCategoryGroup;
