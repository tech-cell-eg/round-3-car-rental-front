import { useState, useEffect } from "react";
import axios from "axios";
import { Car } from "../types/car";
import apiEndpoints from "../constants/apiEndpoints";

const useFetchCarsList = () => {
  const [carsList, setCarsList] = useState<Car[]>([]);
  const [error, setError] = useState<string | null>(null);
  const url: string = apiEndpoints.cars.all;

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
  }, [url]);

  return { carsList, error };
};

export default useFetchCarsList;
