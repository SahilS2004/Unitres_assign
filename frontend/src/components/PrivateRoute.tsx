import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));

  const location = useLocation(); // Gets the current location

  // If not authenticated, redirect to login with the intended path
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
