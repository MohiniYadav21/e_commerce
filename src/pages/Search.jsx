import axios from 'axios';
import  React, {useState,useEffect} from 'react'
import {  useSearchParams } from 'react-router';
import Card from '../Components/Card';

const Search = () => {
    const [params]=useSearchParams();
    const query = params.get("q")
    
    const[products,setProducts] =useState([]);

    useEffect(() => { 
        const fetchProduct = async () => {
            
            const res = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
            const data = res.data.products;
            setProducts(data);

        };
        fetchProduct();
    },[query])

  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-20'>
         
{products.map((product) => (
    <Card key={product.id} product={product} />
))}
    </div>
  )
}

export default Search
