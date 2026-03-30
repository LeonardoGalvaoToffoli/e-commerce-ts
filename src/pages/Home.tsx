import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

export function Home() {

  const { products } = useProducts();

  return (
    <div className="row">
      <aside className="col-12 col-md-3 col-lg-2 mb-4">
        <div className="p-3 bg-light rounded border shadow-sm">
          <h5>Filtros</h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Camisas Lisas
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none text-secondary">
                Camisas Estampadas
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-secondary">
                Promoções
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <main className="col-12 col-md-9 col-lg-10">
        <h2 className="mb-4">Catálogo de Camisas</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
