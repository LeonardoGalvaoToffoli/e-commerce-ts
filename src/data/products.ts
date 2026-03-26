import { type Product } from "../context/CartContext";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Preta Básica",
    price: 59.9,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Camisa Social Azul",
    price: 129.9,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Camisa Social Branca",
    price: 89.9,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80",
  },
];
