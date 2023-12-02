// src/pages/Cart.js
import React from 'react';
import { useTokenContext } from '../context/TokenContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useTokenContext();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b-2 py-4">
              <div>
                <img className="w-full h-48 object-cover object-center"
                src={item.image}
                alt={item.name}
                />

                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 font-semibold hover:underline focus:outline-none"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button
              onClick={handleClearCart}
              className="text-red-500 font-semibold hover:underline focus:outline-none"
            >
              Clear Cart
            </button>
            <p className="text-lg font-semibold">
              Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
