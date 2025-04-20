import React from 'react';
import useFetchCarDetails from '../hooks/useFetchCarDetails';
import CarPrice from './CarPrice';

interface SummarySectionProps {
    id: number;
}

const SummarySection: React.FC<SummarySectionProps> = ({ id }) => {
    const { carDetails, loading } = useFetchCarDetails(id);

    const calculateTotal = (price: number | undefined, salePrice?: number): { tax: string, total: string } => {
        const finalPrice = (salePrice && salePrice > 0 ? salePrice : price) || 0;
        const tax = finalPrice * 0.14;
        const total = finalPrice + tax;
        return {
            tax: tax.toFixed(2),
            total: total.toFixed(2)
        };
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!carDetails) {
        return <div>Error: Car details not found</div>;
    }

    const { tax, total } = calculateTotal(carDetails.price, carDetails.sale_price);

    return (
        <div className="bg-white p-5 rounded-md shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Rental Summary</h2>
            <p className="text-sm text-gray-500 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex items-center">
                <div>
                    <img
                        src={carDetails.mainImage}
                        alt={carDetails.name}
                        className="w- h-32 object-fit-cover rounded-md mr-4"
                    />
                </div>
                <div className="flex flex-col px-4">
                    <h1 className="text-lg font-semibold">{carDetails.name}</h1>
                    <p className="text-sm text-gray-500">+{carDetails.reviews.total} Reviewer</p>
                </div>
            </div>
            <div className="flex justify-between mb-2 mt-3">
                <span className="text-sm text-gray-500">Subtotal</span>
                <span className="text-sm font-medium">
                    <CarPrice price={carDetails.price} salePrice={carDetails.sale_price} />
                </span>
            </div>
            <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-500">Tax (14%)</span>
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