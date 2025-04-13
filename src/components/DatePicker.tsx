import { Dropdown } from 'primereact/dropdown';
import { DatePickerProps } from '../types';

const DatePicker: React.FC<DatePickerProps> = ({
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
            <label htmlFor="date-picker" className="text-sm font-medium text-gray-900">
                {label}
            </label>
            <Dropdown
                id="date-picker"
                value={value}
                onChange={(e) => onChange(e.value)}
                options={options}
                placeholder={placeholder}
                className={`text-gray-500 shadow-none border-0 focus:ring-0 ${className} `}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default DatePicker;