// src/utils/secure.js
import { getToken } from "./token";

export const isValidToken = () => {
  const token = getToken();
  return !!token; // true if token exists, false otherwise
};

export const isValidRole = (sysRole = [], userRole = []) => {
  if (sysRole.length === 0) return true; // no restriction
  return sysRole.some((role) => userRole.includes(role));
};
