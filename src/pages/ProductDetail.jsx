import axios from "axios";
import React, {  useEffect, useState } from "react";
import { useParams } from "react-router";


const ProductDetail = () => {
  const params = useParams();
  const id = params.id;
  

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = res.data;
      setProduct(data);
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const response = await axios.get('/api/products/123');
      setProduct(response.data);
    } catch (error) {
      console.error('Axios fetch error:', error);
      
    }
  };

  fetchProduct();
}, []);


  
  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        {product.images && (
          <img
            src={product.images[0]}
            alt={product.title}
            className=" flex items-center justify-center overflow-hidden object-cover rounded-xl mb-4"
          />
        )}
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="">{product.description}</p>
        <p className="text-lg font-semibold text-green-600 mb-2">
          ₹ {product.price}
        </p>
        <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
        
      
       <div className="flex items-center justify-between">
         <button 
        
         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-white">
          Add to Cart
        </button>
        <button className="bg-whute text-blue-600 border border-blue-600 px-4 py-2 gap-3 rounded hover:bg-blue-700 hover:text-white">
          Buy Now
        </button>
       </div>
     
      </div>
    </div>
  
  )
};

export default ProductDetail;
