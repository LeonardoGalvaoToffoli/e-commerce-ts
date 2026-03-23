import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Loja de Camisa
        </Link>
        <div className="d-flex">
          <Link to="/carrinho" className="btn btn-outline-light">
            Carrinho ({cartCount})
          </Link>
        </div>
      </div>
    </header>
  );
}
