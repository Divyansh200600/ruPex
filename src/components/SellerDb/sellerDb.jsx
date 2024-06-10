// src/pages/SellerDbPage/sellerDbPage.jsx
import React from 'react';
import { useAuth } from '../../utils/Auth/AuthContext';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SellerDbPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default SellerDbPage;