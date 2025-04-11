type FilterGroupHeadingProps = {
  value: string;
};

function FilterGroupHeading({ value }: FilterGroupHeadingProps) {
  return (
    <h3 className="font-medium text-xs text-content-base tracking-[3px] uppercase">
      {value}
    </h3>
  );
}

export default FilterGroupHeading;
