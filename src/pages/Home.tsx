import { ProductCard } from "../components/ProductCard";
import { type Product } from "../context/CartContext";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Preta Básica",
    price: 59.9,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 2,
    name: "Camisa Social Branca",
    price: 129.9,
    image: "https://via.placeholder.com/300x300",
  },
  {
    id: 3,
    name: "Camisa Xadrez Flanela",
    price: 89.9,
    image: "https://via.placeholder.com/300x300",
  },
];

export function Home() {
  return (
    <section>
      <h2 className="mb-4">Catálogo de Camisas</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {mockProducts.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
