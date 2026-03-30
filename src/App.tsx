import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderSuccess } from "./pages/OrderSuccess";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AdminRoute } from "./components/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="d-flex flex-column min-vh-100">
              <Navbar />

              <div className="container flex-grow-1 mt-4 mb-5">
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/cadastro" element={<Register />} />
                  <Route path="/loja" element={<Home />} />
                  <Route path="/produto/:id" element={<ProductDetails />} />
                  <Route path="/carrinho" element={<Cart />} />
                  <Route path="/finalizar-pagamento" element={<Checkout />} />
                  <Route path="/pagamento-finalizado" element={<OrderSuccess />} />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <Dashboard />
                      </AdminRoute>
                    }
                  />
                </Routes>
              </div>

              <Footer />
            </div>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;