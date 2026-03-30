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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => setCurrentUser(null);

  const register = (name: string, email: string, password: string) => {
    if (users.some(u => u.email === email)) return false; // E-mail já existe
    const newUser = { name, email, password, isAdmin: false }; // Novo usuário nunca é admin
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser); // Já loga automaticamente
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);