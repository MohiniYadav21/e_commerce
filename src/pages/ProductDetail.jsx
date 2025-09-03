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
    
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
       
        <div className="flex flex-col items-center justify-center">
          {product.images && (
            <img
              src={product.images[0]}
              alt={product.title}
              className="rounded-xl object-cover w-full max-h-[400px] mb-4 pt-4"
            />
          )}
         
          
          
        </div>

        
        <div>
          <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ₹ {product.price}
          </p>
          <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>

         
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
