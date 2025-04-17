const API_BASE_URL: string = import.meta.env.VITE_BASE_URL;

interface CarApiEndpoints {
  all: string;
  recent: string;
  recommended: string;
}

interface ApiEndpoints {
  cars: CarApiEndpoints;
}

const apiEndpoints: ApiEndpoints = {
  cars: {
    all: `${API_BASE_URL}/cars`,
    recent: `${API_BASE_URL}/recent-cars`,
    recommended: `${API_BASE_URL}/recommended-cars`,
  },
};

export default apiEndpoints;
