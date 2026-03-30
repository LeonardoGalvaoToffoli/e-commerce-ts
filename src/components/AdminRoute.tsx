import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { type ReactNode } from "react";

export function AdminRoute({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth();

  if (!currentUser?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}