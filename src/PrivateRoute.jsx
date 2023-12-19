import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Función para comprobar si el usuario está autenticado
const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  return token != null;
};

// Componente PrivateRoute para proteger rutas que requieren autenticación
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
