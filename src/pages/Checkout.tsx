import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

export function Checkout() {
  const { cart, clearCart } = useCart();
  const { processPurchase } = useProducts();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    processPurchase(cart);
    clearCart();
    navigate("/pagamento-finalizado");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>O carrinho está vazio.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Finalizar Pagamento</h2>
      <div className="row">
        <div className="col-md-8 mb-4">
          <form
            onSubmit={handleFinish}
            className="bg-light p-4 border rounded shadow-sm"
          >
            <h4 className="mb-3">Dados de Entrega</h4>
            <div className="mb-3">
              <label className="form-label">Nome Completo</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço Completo</label>
              <input type="text" className="form-control" required />
            </div>

            <h4 className="mb-3 mt-4">Dados de Pagamento</h4>
            <div className="mb-3">
              <label className="form-label">Número do Cartão</label>
              <input
                type="text"
                className="form-control"
                placeholder="0000 0000 0000 0000"
                required
              />
            </div>
            <div className="row">
              <div className="col-6 mb-3">
                <label className="form-label">Validade</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/AA"
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100 mt-3 btn-lg">
              Confirmar Pagamento
            </button>
          </form>
        </div>

        <div className="col-md-4">
          <div className="bg-light p-4 border rounded shadow-sm">
            <h4 className="mb-4">Resumo do Pedido</h4>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-muted">Qtd: {item.quantity}</small>
                  </div>
                  <span className="text-muted">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-3 mt-3">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}