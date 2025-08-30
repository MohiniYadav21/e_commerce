import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, useLocation } from "react-router";

const HomeCategory = () => {
  const [categories, setCategories] = useState([]);
   const location = useLocation();
   console.log("location", location)


  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      const data = res.data;
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div   className="flex items-center  gap-3 my-4 overflow-x-scroll categories">
      {categories.map((category, index) => {
        const isActive = location.pathname === `/categories/${category.slug}`; 

        return (
          <Link
            to={`/categories/${category.slug}`}
            key={index}
            className={`border px-4 py-2 rounded-xl transition-all 
              ${isActive ? "bg-black text-white" : "bg-white text-black"} 
              hover:bg-black hover:text-white hover:scale-105`}
          >
            <h1 className="text-nowrap">{category.name}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeCategory;
