import { useState, useEffect } from "react";
import axios from "axios";
import apiEndpoints from "../constants/apiEndpoints";
import { CarDetails } from "../types/cardetails";

const useFetchCarDetails = (id: number) => {
    const [carDetails, setCarDetails] = useState<CarDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const url = apiEndpoints.cars.carDetails.replace("{id}", id.toString());

    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                const data = response.data.data;
                setCarDetails({
                    ...data,
                    price: data.price ? parseFloat(data.price) : undefined,
                    sale_price: data.sale_price ? parseFloat(data.sale_price) : undefined,
                });
                setError(null);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Something went wrong!");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCarDetails();
    }, [url]);

    return { carDetails, error, loading };
};

export default useFetchCarDetails;