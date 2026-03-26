import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Seu carrinho está vazio</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Continuar Comprando
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Meu Carrinho</h2>
      <ul className="list-group mb-4 shadow-sm">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center p-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                className="rounded"
              />
              <div>
                <h6 className="my-0 fs-5">{item.name}</h6>
                <small className="text-muted">
                  Quantidade: {item.quantity}
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <span className="fw-bold fs-5">
                R$ {(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center bg-light p-4 rounded border">
        <h4 className="mb-0">Total: R$ {total.toFixed(2)}</h4>
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/finalizar-pagamento")}
        >
          Avançar para Pagamento
        </button>
      </div>
    </div>
  );
}
