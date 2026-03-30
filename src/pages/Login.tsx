import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate("/loja"); // Vai para a loja se o login der certo
    } else {
      setError(true);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Acesso à Loja</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <div className="alert alert-danger">E-mail ou senha incorretos.</div>}
          <button type="submit" className="btn btn-primary w-100 mb-3">Entrar</button>

          <div className="text-center">
            <span>Não tem conta? </span>
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </form>
      </div>
    </div>
  );
}