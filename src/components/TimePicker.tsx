import { Dropdown } from "primereact/dropdown"
import { TimePickerProps } from "../types"

const TimePicker: React.FC<TimePickerProps> = ({label,options, value, onChange, placeholder, className}) => {
    return <>
        <div className="flex flex-col gap-2 ">
            <label htmlFor="location" className="text-sm font-medium text-gray-700 ">{label}</label>
            <Dropdown id="location" value={value} onChange={(e) => onChange(e.value)} options={options} placeholder={placeholder} className={`text-gray-500 shadow-none border-none focus:border-none focus:ring-0 ${className}`} />      
        </div>
    </> 
}

export default TimePicker