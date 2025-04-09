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


export interface LocationPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}
export interface TimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}
export interface TimePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}


export interface RadioButtonPickerProps {
  value: string;
  onChange: (value: string) => void;
  checked: boolean;
  id: string;
  label: string;
  name: string;
  icon: string;
}

export interface RentalSectionProps{
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


export interface PickAndDropProps {
  title: string;
} 

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


export interface CheckboxProps {
    label: string; 
    onChange: (checked: boolean ) => void;
    checked: boolean;
    id: string; 
}



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