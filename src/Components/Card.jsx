import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Link } from "react-router";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Link to={`/${product.id}`}>
      <div className="rounded-xl border border-black border-2 transition-all hover:scale-105 bg-white ">
        <div className="h-[100px] md:h-[200px] flex items-center justify-center ">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl overflow-hidden h-[100px] md:h-[200px] object-cover"
          />
        </div>
        <div className="p-2 md:p-4 border border-gray-300">
          <h1 className="font-bold text-sm md:text-xl">{product.title}</h1>

          <p className="hidden md:block text-sm text-gray-500 mb-1">
            Brand: {product.brand}
          </p>
          <p className="hidden md:block text-sm text-gray-500 mb-1">
            Category: {product.category}
          </p>

          <div className="text-lg font-semibold text-green-600 mb-2">
            ₹ {product.price}
          </div>
          <div className="flex flex-col sm:flex-row gap-2  justify-between items-center mt-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="border-2 w-full sm:w-fit border-black px-2 sm:px-4 md:px-8 py-1 md:py-2 rounded-full text-black hover:scale-110 duration-300 "
            >
              Add to Cart
            </button>
            <button className="border-2 w-full sm:w-fit border-black bg-black px-2 sm:px-4 md:px-8 py-1 md:py-2 rounded-full text-white hover:scale-110 duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
