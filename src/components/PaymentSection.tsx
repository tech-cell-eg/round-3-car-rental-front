import React from 'react';
import RadioButtonPicker from './RadioButtonPicker';
import { PaymentSectionProps } from '../types';
import LabeledInput from './LabeledInput';
import Paypal from '../assets/PayPal.png';
import Bitcoin from '../assets/Bitcoin.png';

const PaymentSection: React.FC<PaymentSectionProps> = ({
    title,
    cardNumber,
    expiryDate,
    cardHolder,
    cvc,
    paymentMethod,
    setCardNumber,
    setExpiryDate,
    setCardHolder,
    setCvc,
    setPaymentMethod,
    errors, 
}) => {
    return (
        <div className="bg-white p-5 rounded-md mb-7 shadow-sm">
            <div className="mb-5 px-3 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-500">Please enter your payment method</p>
                </div>
                <span className="text-sm text-gray-500">Step 3 of 4</span>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 px-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="text-base font-semibold">Credit Card</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LabeledInput
                        label="Card Number"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card number"
                        error={errors?.cardNumber} 
                    />
                    <LabeledInput
                        label="Expiration Date"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        error={errors?.expiryDate} 
                    />
                    <LabeledInput
                        label="Card Holder"
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        placeholder="Card holder"
                        error={errors?.cardHolder} 
                    />
                    <LabeledInput
                        label="CVC"
                        id="cvc"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder="CVC"
                        error={errors?.cvc}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 px-3">
                <RadioButtonPicker
                    label="Credit Card"
                    value="creditCard"
                    id="creditCard"
                    name="paymentMethod"
                    checked={paymentMethod === 'creditCard'}
                    onChange={setPaymentMethod}
                    icon={Paypal}
                />
                <RadioButtonPicker
                    label="PayPal"
                    value="paypal"
                    id="paypal"
                    name="paymentMethod"
                    checked={paymentMethod === 'paypal'}
                    onChange={setPaymentMethod}
                    icon={Bitcoin}
                />
                {errors?.paymentMethod && <p className="text-sm text-red-500">{errors.paymentMethod}</p>}
            </div>
        </div>
    );
};

export default PaymentSection;