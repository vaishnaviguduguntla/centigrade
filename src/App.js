// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
