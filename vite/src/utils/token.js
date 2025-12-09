// src/utils/token.js
export const getToken = (key = "access_token") => {
  const token = localStorage.getItem(key);
  return token ? JSON.parse(token) : null;
};

export const setToken = (key = "access_token", data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeToken = (key = "access_token") => {
  localStorage.removeItem(key);
};
