import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = register(name, email, password);

    if (success) {
      navigate("/loja"); // Vai para a loja após cadastrar
    } else {
      setError(true);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Criar Conta</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nome Completo</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
          </div>
          {error && <div className="alert alert-danger">Este e-mail já está em uso.</div>}
          <button type="submit" className="btn btn-success w-100 mb-3">Cadastrar</button>

          <div className="text-center">
            <span>Já tem conta? </span>
            <Link to="/">Faça Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}