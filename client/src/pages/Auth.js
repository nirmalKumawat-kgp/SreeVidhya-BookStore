import React from "react";
import "./Auth.css";
import { Outlet } from "react-router-dom";
export default function Auth() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
