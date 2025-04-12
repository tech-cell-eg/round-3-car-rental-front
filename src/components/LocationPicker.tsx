import { Dropdown } from 'primereact/dropdown';
import { LocationPickerProps } from '../types';

const LocationPicker: React.FC<LocationPickerProps> = ({

    label,
    options,
    value,
    onChange,
    placeholder,
    className,
    error,
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="location-picker" className="text-sm font-medium text-gray-900">
                {label}
            </label>
            <Dropdown
                id="location-picker"
                value={value}
                onChange={(e) => onChange(e.value)}
                options={options}
                placeholder={placeholder}
                className={`text-gray-500 shadow-none border border-gray-200 focus:ring-0 ${className} ${error ? 'border-red-500' : ''}`}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default LocationPicker;


