import { Dropdown } from 'primereact/dropdown';
import { TimePickerProps } from '../types';

const TimePicker: React.FC<TimePickerProps> = ({
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
            <label htmlFor="time-picker" className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <Dropdown
                id="time-picker"
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

export default TimePicker;