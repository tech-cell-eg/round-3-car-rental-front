import { BillingSectionProps } from "../types"
import LabeledInput from "./LabeledInput"

const BillingSection: React.FC<BillingSectionProps> = ({title, fields} ) => {
    return <>
        <div className="bg-white p-5 rounded-md mb-7 shaddow-sm">
            <div className="mb-5 px-3">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm text-gray-500">Please enter your billing info</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {fields.map((field) => (
                    <LabeledInput key={field.id} label={field.label} name={field.id} id={field.id} value={field.value} onChange={field.onChange} placeholder={field.placeholder} />
                ))}
            </div>
        </div>
    </>
}

export default BillingSection