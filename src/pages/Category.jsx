import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Card from '../Components/Card';

const Category = () => {
      const [categoryProducts, setCategoryProducts] = useState([]);

      const params = useParams();
      const slug = params.slug;


  useEffect(() => {
    const fetchCategoryProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/category/${slug}`);
      const data = res.data.products;
      setCategoryProducts(data);
    };

    fetchCategoryProduct();
  }, [slug]);

  return (
    <>
    <h1 className='capitalize font-bold text-4xl my-5 px-10'>{slug} Products</h1>
    <div
     className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5 my-10 px-10 ">
    {categoryProducts.map((product) => (
        <Card key={product.id} product={product} />
    ))}
  </div>

  </>
  )
}

export default Category
