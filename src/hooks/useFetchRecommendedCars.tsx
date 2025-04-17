import axios from "axios";
import { useEffect, useState } from "react";
import apiEndpoints from "../constants/apiEndpoints";

const useFetchRecommendedCars = () => {
  const [recommendedCars, setRecommenededCars] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const url = apiEndpoints.cars.recommended;

  const fetchCarsList = () => {
    axios
      .get(url)
      .then((response) => {
        setRecommenededCars(response.data.data);
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
    fetchCarsList();
  }, [url]);

  return { recommendedCars, error };
};

export default useFetchRecommendedCars;
