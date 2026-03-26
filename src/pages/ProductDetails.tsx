import { useParams, Link } from "react-router-dom";
import { mockProducts } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Produto não encontrado.</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div className="row mt-4 w-100" style={{ maxWidth: "1000px" }}>
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="display-5">{product.name}</h2>
          <p className="fs-3 fw-bold text-primary">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="lead">
            Detalhes incríveis sobre a {product.name}. Uma ótima escolha para o
            seu dia a dia, combinando conforto e estilo.
          </p>
          <button
            className="btn btn-primary btn-lg mt-3 w-100 shadow-sm"
            onClick={() => addToCart(product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
