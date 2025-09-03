import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Products = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data.products;
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return <div className="grid min-h-[80vh] grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4  md:gap-5 py-10 px-2 md:px-10 bg-gray-100">
    {products.map((product) => (
        <Card key={product.id} product={product} />
    ))}




  </div>
  
 
};

export default Products;
