import FilterOptionListItem from "./FilterOptionListItem";

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

type Option = TypeOption | CapacityOption;

interface FilterOptionListProps {
  options: Option[];
}

function FilterOptionList({ options }: FilterOptionListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {options.map((item) => (
        <FilterOptionListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default FilterOptionList;
