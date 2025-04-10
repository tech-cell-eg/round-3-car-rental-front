
// BillingSection
export interface BillingSectionProps {
    title: string;
    fields: {
        label: string;
        id: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        placeholder: string;
    }[];
}

// RentalSection
export interface LocationPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  className?: string
}

export interface TimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  className?: string;
}
export interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
  className?: string;
}
// RentalSection
export interface RentalSectionProps {
  title: string;
  pickUpLocation: string;
  dropOffLocation: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpTime: string;
  dropOffTime: string;
  setPickUpLocation: (value: string) => void;
  setDropOffLocation: (value: string) => void;
  setPickUpDate: (value: string) => void;
  setDropOffDate: (value: string) => void;
  setPickUpTime: (value: string) => void;
  setDropOffTime: (value: string) => void;
}

// RadioButtonPicker
export interface RadioButtonPickerProps {
  value: string;
  onChange: (value: string) => void;
  checked: boolean;
  id: string;
  label: string;
  name: string;
  icon: string;
}

// PickAndDrop
export interface PickAndDropProps {
  title: string;
} 

// PaymentSection
export interface PaymentSectionProps {
  title: string;
  cardNumber: string;
  expiryDate: string;
  cardHolder: string;
  cvc: string;
  paymentMethod: string;
  setCardNumber: (value: string) => void;
  setExpiryDate: (value: string) => void;
  setCardHolder: (value: string) => void;
  setCvc: (value: string) => void;
  setPaymentMethod: (value: string) => void;
}

// Checkbox
export interface CheckboxProps {
    label: string; 
    onChange: (checked: boolean ) => void;
    checked: boolean;
    id: string; 
}
// LabeledInput
export interface LabeledInputProps {
        label: string,
        name?: string,
        id: string,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder: string,
        disabled?: boolean,
        className?: string  
    }

