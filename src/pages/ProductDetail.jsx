import axios from "axios";
import React, { useEffect, useState } from "react";
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

  // return <div>{product.title}</div>;
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
        <p className="text-lg font-semibold text-green-600 mb-2">
          ₹ {product.price}
        </p>
        <p className="text-sm text-gray-500 mb-1">Brand: {product.brand}</p>
        <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  
  )
};

export default ProductDetail;
