import { RadioButton } from "primereact/radiobutton"
import { RadioButtonPickerProps } from "../types"


const RadioButtonPicker: React.FC<RadioButtonPickerProps> = ({ value, onChange, checked,icon ,id, name }) => {
    return (
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
            <RadioButton   inputId={id} name={name} value={value} onChange={(e) => onChange(e.value)} checked={checked} />
            <img src={icon} alt="Bitcoin" className="" />
        </div>
    )
}

export default RadioButtonPicker