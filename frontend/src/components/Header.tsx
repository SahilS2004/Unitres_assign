import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;

