import { InputText } from 'primereact/inputtext';
import { LabeledInputProps } from '../types';

const LabeledInput: React.FC<LabeledInputProps> = ({ label, error, name, id, value, onChange, placeholder = "", disabled = false, className = "" }) => {
  return (
    <div className={`flex flex-col gap-2 p-3 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-900">{label}</label>
      <InputText
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="shadow-none border-none focus:border-none focus:ring-0 w-full rounded-md bg-gray-100 border border-gray-200 text-gray-500 p-3"
      />
      {error && <p className="text-sm text-red-500">{error}</p>} {/* الخطأ تحت الحقل */}
    </div>
  );
};

export default LabeledInput;