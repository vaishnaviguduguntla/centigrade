import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const useTokenContext = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const login = (tokenKey) => {
    setToken(tokenKey);
  };

  const logout = () => {
    setToken(null);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <TokenContext.Provider value={{ token, login, logout, cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </TokenContext.Provider>
  );
};
