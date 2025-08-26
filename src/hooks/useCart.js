import {useState,useEffect} from 'react';

export function useCart(){
   const[cart,setCart] =useState([]);

   useEffect(( ) => {
    const data =  localStorage.getItem("cart");
    if(data){
        try{
            setCart(JSON.parse(data))
        }catch{
            localStorage.removeItem("cart");
        }
    }
   },[]);

    // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return { cart, addToCart, removeFromCart, clearCart };
}

