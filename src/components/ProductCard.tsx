import { Link } from "react-router-dom";
import { type Product, useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold">R$ {product.price.toFixed(2)}</p>
        <div className="mt-auto d-flex justify-content-between">
          <Link
            to={`/produto/${product.id}`}
            className="btn btn-outline-secondary btn-sm"
          >
            Ver Detalhes
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary btn-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
