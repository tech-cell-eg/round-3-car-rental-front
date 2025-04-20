export type CarDetails = {
  id: number;
  name: string;
  mainImage: string;
  images: string[];
  type: string;
  gasoline: number;
  seats: string;
  steering: string;
  price: number | undefined;
  transmission: string;
  sale_price: number | undefined;
  reviews: { total: number };
};
