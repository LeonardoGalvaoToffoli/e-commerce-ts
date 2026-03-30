import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export function Navbar() {
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!currentUser) return null;

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/loja">
          Loja de Camisa
        </Link>
        <div className="d-flex gap-3 align-items-center">
          <span className="text-light">Olá, {currentUser.name}</span>

          {currentUser.isAdmin && (
            <Link to="/admin" className="btn btn-outline-info btn-sm">
              Dashboard
            </Link>
          )}

          <Link to="/carrinho" className="btn btn-outline-light btn-sm">
            Carrinho ({cartCount})
          </Link>
          <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}