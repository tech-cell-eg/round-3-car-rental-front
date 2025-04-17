import { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "../types/car";

const useFetchCarsList = () => {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const url =
    "https://round-3-car-rental-web-api.digital-vision-solutions.com/api/v1/cars";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCarsList(response.data.data);
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      });
  }, []);

  return { carsList, error };
};

export default useFetchCarsList;
