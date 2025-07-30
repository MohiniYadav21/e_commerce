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

  return <div className="grid grid-cols-4 gap-5 my-10 px-10">
    {products.map((product) => (
        <Card key={product.id} product={product} />
    ))}
  </div>;
};

export default Products;
