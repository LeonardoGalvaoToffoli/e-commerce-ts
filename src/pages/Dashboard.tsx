import { useState } from "react";
import { useProducts } from "../context/ProductContext";

export function Dashboard() {
  const { products, addProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !image || !stock) return;

    addProduct({
      name,
      price: parseFloat(price),
      image,
      stock: parseInt(stock, 10),
    });

    setName("");
    setPrice("");
    setImage("");
    setStock("");
  };

  return (
    <div>
      <h2 className="mb-4">Dashboard Administrativo</h2>

      <div className="card mb-4 p-3 shadow-sm">
        <h4>Adicionar Novo Produto</h4>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nome da Camisa</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label className="form-label">Preço (R$)</label>
            <input type="number" step="0.01" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <label className="form-label">Estoque Inicial</label>
            <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} required />
          </div>
          <div className="col-md-12">
            <label className="form-label">URL da Imagem</label>
            <input type="url" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} required />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Adicionar Produto</button>
          </div>
        </form>
      </div>

      <h4>Produtos em Estoque</h4>
      <table className="table table-striped table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Vendidos</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>R$ {p.price.toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>{p.sold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}