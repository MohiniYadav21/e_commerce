import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Link } from "react-router";

const Card = ({ product, isCart = false }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Link to={`/${product.id}`}>
      <div className="rounded-xl  transition-all hover:scale-105 bg-white shadow ">
        <div className="h-[100px] md:h-[200px] flex items-center justify-center ">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl overflow-hidden h-[100px] md:h-[200px] object-cover"
          />
        </div>
        <div className="p-2 md:p-4 ">
          <h1 className="font-bold text-sm md:text-xl">{product.title}</h1>

          <p className=" text-sm text-gray-500 mb-1">
            Brand: {product.brand}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            Category: {product.category}
          </p>

          <div className="text-lg font-semibold text-green-600 mb-2">
            ₹ {(product.price * 100).toFixed(2)}
          </div>
          <div className="flex flex-col sm:flex-row gap-2  justify-between items-center mt-4">
            { isCart ? (
              <button
                onClick={(e) =>{
                  e.preventDefault();
                   removeFromCart(product.id)
                }}
                className="border-2 border-black px-8 py-2 rounded-full text-black hover:scale-110 duration-300"
              >
                Remove
              </button>
            ) : (
              <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="hidden md:block border-2 w-full sm:w-fit border-black px-2 sm:px-4 md:px-8 py-1 md:py-2 rounded-full text-black hover:scale-110 duration-300 "
            >
              Add to Cart
            </button>
            )}
            <button className="hidden md:block border-2 w-full sm:w-fit border-black bg-black px-2 sm:px-4 md:px-8 py-1 md:py-2 rounded-full text-white hover:scale-110 duration-300">
              Buy Now
            </button>
            
          </div>
        </div>
      </div>
    </Link>
   
  );
};

export default Card;
