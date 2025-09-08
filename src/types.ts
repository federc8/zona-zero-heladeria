export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: string[];
  images: {
    thumb: string;
    image: string;
  }[];
  available: boolean;
}