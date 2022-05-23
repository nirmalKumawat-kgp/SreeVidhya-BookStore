import { Navigate } from "react-router-dom";
import React from "react";
import { UserState } from "./UserContext";
import { useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { authed } = UserState();
  console.log(authed);
  const location = useLocation();
  return authed ? (
    children
  ) : (
    <Navigate to="/auth/signin" state={{ path: location.pathname }} />
  );
}
