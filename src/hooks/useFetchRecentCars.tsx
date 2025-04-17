import { useEffect, useState } from "react";
import apiEndpoints from "../constants/apiEndpoints";
import axios from "axios";
import { Car } from "../types/car";

const useFetchRecentCars = () => {
  const [recentCars, setRecentCars] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const url = apiEndpoints.cars.recent;

  const fetchRecentCars = () => {
    axios
      .get(url)
      .then((response) => {
        setRecentCars(response.data.data);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      });
  };

  useEffect(() => {
    fetchRecentCars();
  }, [url]);

  return { recentCars, error };
};

export default useFetchRecentCars;
