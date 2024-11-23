import React from "react";
import { Navigate } from "react-router-dom";
import { PermitAuth } from "./PermitAuth.js";

export default function PermitRoute({ children }) {
  const { token } = PermitAuth(); 
  
  if (!token) {
    return <Navigate to="/admin/get-permision" />;
  }

  return children;
}
