import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        className="w-full h-48 object-cover object-center"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4">
        <p className="text-gray-700 text-base">{product.title}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gray-700 font-bold">${product.price}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
