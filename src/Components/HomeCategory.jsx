import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router";

const HomeCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      const data = res.data;
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="flex items-center gap-3 my-4 overflow-x-scroll">
      {categories.map((category) => (
        <Link
          to={`/categories/${category.slug}`}
          key={category.id}
          className="border border-black px-4 py-2 rounded-xl"
        >
          <h1 className="text-nowrap">{category.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default HomeCategory;
