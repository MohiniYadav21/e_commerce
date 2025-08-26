// import React, { useContext } from "react";
// import  {CartContext } from "../context/CartContext";


// const Cart = () => {
//   const { cart,removeFromCart } = useContext(CartContext);

//   if (cart.length === 0) {
//     return (
//       <h2 className="text-center mt-10 text-xl">
//         Your cart is empty 
//       </h2>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//       {cart.map((item, index) => (
//         <div
//           key={index}
//           className="rounded-xl border border-black border-2 bg-gray-100"
//         >
//           <div className="h-[200px] flex items-center justify-center">
//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               className="rounded-xl overflow-hidden h-[200px] object-cover"
//             />
//           </div>
//           <div className="p-4 border border-gray-300">
//             <h1 className="font-bold text-xl">{item.title}</h1>
//             <p className="text-sm text-gray-500 mb-1">Brand: {item.brand}</p>
//             <p className="text-sm text-gray-500 mb-1">Category: {item.category}</p>
//             <div className="text-lg font-semibold text-green-600 mb-2">
//               ₹ {item.price}
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <button
//              onClick={() => removeFromCart(item.id)}

//               className="border-2 border-black px-8 py-2 rounded-full text-black hover:scale-110 duration-300">
//                 Remove
//               </button>
//               <button className="border-2 border-black bg-black px-8 py-2 rounded-full text-white hover:scale-110 duration-300">
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Your cart is empty
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cart.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border border-black border-2 bg-gray-100"
        >
          <div className="h-[200px] flex items-center justify-center">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-xl overflow-hidden h-[200px] object-cover"
            />
          </div>
          <div className="p-4 border border-gray-300">
            <h1 className="font-bold text-xl">{item.title}</h1>
            <p className="text-sm text-gray-500 mb-1">Brand: {item.brand}</p>
            <p className="text-sm text-gray-500 mb-1">Category: {item.category}</p>
            <div className="text-lg font-semibold text-green-600 mb-2">
              ₹ {item.price}
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => removeFromCart(item.id)}
                className="border-2 border-black px-8 py-2 rounded-full text-black hover:scale-110 duration-300"
              >
                Remove
              </button>
              <button className="border-2 border-black bg-black px-8 py-2 rounded-full text-white hover:scale-110 duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

