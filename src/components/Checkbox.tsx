// src/components/Checkbox.tsx
import React from 'react';
import { Checkbox as PrimeCheckbox } from 'primereact/checkbox';
import { CheckboxProps } from "../types"


const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked, id }) => {
    return (
        <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-md">
            <PrimeCheckbox
                inputId={id}
                onChange={(e) => onChange(e.checked ?? false)} 
                checked={checked}
            />
            <label htmlFor={id} className="text-sm text-gray-700">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;