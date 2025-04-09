import React from 'react';

interface SummarySectionProps {
    subtotal: number;
    tax: number;
    total: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ subtotal, tax, total }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Subtotal</span>
                <span className="text-sm font-medium">${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Tax</span>
                <span className="text-sm font-medium">${tax}</span>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-semibold">${total}</span>
            </div>
        </div>
    );
};

export default SummarySection;