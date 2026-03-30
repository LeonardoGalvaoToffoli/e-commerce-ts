import { createContext, useState, type ReactNode, useContext } from "react";
import { type Product, mockProducts } from "../data/products";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, "id" | "sold">) => void;
  processPurchase: (items: { id: number; quantity: number }[]) => void;
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const addProduct = (productData: Omit<Product, "id" | "sold">) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now(),
      sold: 0,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const processPurchase = (items: { id: number; quantity: number }[]) => {
    setProducts((prev) =>
      prev.map((product) => {
        const itemComprado = items.find((i) => i.id === product.id);
        if (itemComprado) {
          return {
            ...product,
            stock: product.stock - itemComprado.quantity,
            sold: product.sold + itemComprado.quantity,
          };
        }
        return product;
      })
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, processPurchase }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);