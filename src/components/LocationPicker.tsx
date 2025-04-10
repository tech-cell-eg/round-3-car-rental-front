import { Dropdown } from "primereact/dropdown";
import { LocationPickerProps } from "../types";

const LocationPicker: React.FC<LocationPickerProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <label
          htmlFor="location"
          className="text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
        <Dropdown
          id="location"
          value={value}
          onChange={(e) => onChange(e.value)}
          options={options}
          placeholder={placeholder}
          className="rounded-md bg-gray-100 border text-gray-500 shadow-none  border-none focus:border-none focus:ring-0"
        />
      </div>
    </>
  );
};

export default LocationPicker;
