export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  sold: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Preta Básica",
    price: 59.9,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    sold: 5,
  },
  {
    id: 2,
    name: "Camisa Social Azul",
    price: 129.9,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    sold: 2,
  },
  {
    id: 3,
    name: "Camisa Branca Básica",
    price: 59.9,
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?auto=format&fit=crop&w=600&q=80",
    stock: 8,
    sold: 12,
  },
];