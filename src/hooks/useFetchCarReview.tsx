import { useEffect, useState } from "react";
import { Review } from "../types/review";
import apiEndpoints from "../constants/apiEndpoints";
import axios from "axios";

const useFetchCarReview = (id:number) => {
    const [carReview, setCarReview] = useState<Review[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const url = apiEndpoints.cars.reviewCar.replace("{id}", id.toString());

    useEffect(() => {
        const fetchCarReview = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setCarReview(response.data.data);
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

        fetchCarReview();
    }, [url])

        return { carReview, error, loading };
}

export default useFetchCarReview