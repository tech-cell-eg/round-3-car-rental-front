const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;

interface CarApiEndpoints {
  all: string;
  recent: string;
  recommended: string;
  carDetails: string;
  reviewCar: string;
}

interface PaymentApiEndpoints {
  payment: string;
}

interface ApiEndpoints {
  cars: CarApiEndpoints;
  payment: PaymentApiEndpoints;
}

const apiEndpoints: ApiEndpoints = {
  cars: {
    all: `${API_BASE_URL}/cars`,
    recent: `${API_BASE_URL}/recent-cars`,
    recommended: `${API_BASE_URL}/recommended-cars`,
    carDetails: `${API_BASE_URL}/car-details/{id}`,
    reviewCar: `${API_BASE_URL}/car-reviews/{id}`,
  },
  payment: {
    payment: `${API_BASE_URL}/rent/checkout`,
  },
};

export default apiEndpoints;
