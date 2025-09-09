


import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "../Components/Card";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh]">
      <h2 className="text-center mt-10 text-xl">
        Your cart is empty
      </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl min-h-[60vh] mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cart.map((item) => (
        <Card product={item} key={item.id} isCart={true} />
      ))}
    </div>
  );
};

export default Cart;

