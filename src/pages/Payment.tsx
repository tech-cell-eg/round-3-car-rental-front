import { useState } from "react";
import { LabeledInputProps } from "../types";
import BillingSection from "../components/BillingSection";
import RentalSection from "../components/RentalSection";
import PaymentSection from "../components/PaymentSection";
import ConfirmationSection from "../components/ConfirmationSection";
import SummarySection from "../components/SummarySection";

const Payment = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [dropOffTime, setDropOffTime] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvc, setCvc] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const billingFields: LabeledInputProps[] = [
    { label: 'Name', id: 'name', value: name, onChange: (e) => setName(e.target.value), placeholder: 'Your name' },
    { label: 'Phone Number', id: 'phone', value: phone, onChange: (e) => setPhone(e.target.value), placeholder: 'Phone number' },
    { label: 'Address', id: 'address', value: address, onChange: (e) => setAddress(e.target.value), placeholder: 'Address' },
    { label: 'Town/City', id: 'city', value: city, onChange: (e) => setCity(e.target.value), placeholder: 'Town or city' },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 w-full bg-gray-100 min-h-screen p-4">
      <div className="col-span-12 md:col-span-8 order-2 md:order-1">
        <BillingSection title="Billing Info" fields={billingFields} />
        <RentalSection
          title="Rental Info"
          pickUpLocation={pickUpLocation}
          dropOffLocation={dropOffLocation}
          pickUpDate={pickUpDate}
          dropOffDate={dropOffDate}
          pickUpTime={pickUpTime}
          dropOffTime={dropOffTime}
          setPickUpLocation={setPickUpLocation}
          setDropOffLocation={setDropOffLocation}
          setPickUpDate={setPickUpDate}
          setDropOffDate={setDropOffDate}
          setPickUpTime={setPickUpTime}
          setDropOffTime={setDropOffTime}
        />
        <PaymentSection
          title="Payment Method"
          cardNumber={cardNumber}
          expiryDate={expiryDate}
          cardHolder={cardHolder}
          cvc={cvc}
          paymentMethod={paymentMethod}
          setCardNumber={setCardNumber}
          setExpiryDate={setExpiryDate}
          setCardHolder={setCardHolder}
          setCvc={setCvc}
          setPaymentMethod={setPaymentMethod}
        />
        <ConfirmationSection />
      </div>

      <div className="col-span-12 md:col-span-4 order-1 md:order-2">
        <SummarySection subtotal={100} tax={10} total={110} />
      </div>
    </div>
  );
};

export default Payment;