import { createContext, useState, type ReactNode, useContext } from "react";

export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Criamos um admin padrão no sistema
  const [users, setUsers] = useState<User[]>([
    { name: "Administrador", email: "admin@loja.com", password: "admin123", isAdmin: true }
  ]);
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
      const savedUser = localStorage.getItem("@ecommerce:user");
      return savedUser ? JSON.parse(savedUser) : null;
    });

  const login = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("@ecommerce:user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
      setCurrentUser(null);
      localStorage.removeItem("@ecommerce:user");
    };

  const register = (name: string, email: string, password: string) => {
    if (users.some(u => u.email === email)) return false;
    const newUser = { name, email, password, isAdmin: false };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem("@ecommerce:user", JSON.stringify(newUser));
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);