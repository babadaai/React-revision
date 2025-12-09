// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { isValidRole, isValidToken } from "../utils/secure";

export const PrivateRoute = ({ component, sysRole = [] }) => {
  // For testing, you can hardcode userRole
  const tokenData = JSON.parse(localStorage.getItem("access_token")) || null;
  const userRole = tokenData ?[tokenData.role]:[]; // Replace with actual user role from token or context

  if (!isValidToken()) return <Navigate to="/login" replace />;
  if (!isValidRole(sysRole, userRole)) return <Navigate to="/admin/dashboard" replace />;

  return component;
};
