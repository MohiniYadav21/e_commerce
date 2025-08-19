import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2> Your Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>{item.title} - ₹ {item.price}</p>
        ))
      )}
    </div>
  );
};

export default CartPage;
