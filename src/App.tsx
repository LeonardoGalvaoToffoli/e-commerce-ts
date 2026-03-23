import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />

          <div className="container flex-grow-1 mt-4">
            <div className="row">
              <aside className="col-12 col-md-2 mb-4">
                <div className="p-3 bg-light rounded border">
                  <h5>Filtros</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-decoration-none">
                        Camisas Lisas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Camisas Estampadas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        Promoções
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <main className="col-12 col-md-10">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </main>
            </div>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
