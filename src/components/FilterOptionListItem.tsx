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

interface FilterOptionListItemProps {
  item: Option;
}

function FilterOptionListItem({ item }: FilterOptionListItemProps) {
  const inputId =
    "label" in item ? `${item.label}` : `capacity-${item.capacity}`;

  const labelText =
    "label" in item
      ? item.label
      : `${item.capacity} ${item.capacity <= 7 ? "Person" : "or More"}`;

  return (
    <li className="flex items-center gap-2">
      <input type="checkbox" name="" id={inputId} />
      <label
        htmlFor={inputId}
        className="font-medium text-content-secondary leading-[150%]"
      >
        {labelText}{" "}
        <span className="text-sm text-content-base">({item.count})</span>
      </label>
    </li>
  );
}

export default FilterOptionListItem;
