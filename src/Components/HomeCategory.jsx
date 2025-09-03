// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useLocation } from "react-router";

// const categoryImages = {
//     beauty: "/smartphones.png",
//     fragrances: "/beauty.png",
//      furniture: "/furniture.webp",
//      groceries: "/grocery.png",
//       home: "/homedecor.webp",
//      kitchen: "/tops.webp",
//      laptops:"/tv.webp",
  
    
//   };


// const HomeCategory = () => {
//   const [categories, setCategories] = useState([]);
//    const location = useLocation();
   


//   useEffect(() => {
//     const fetchCategories = async () => {
//       const res = await axios.get("https://dummyjson.com/products/categories");
//       const data = res.data;
//       setCategories(data);
//     };
  

//     fetchCategories();
//   }, []);

//   return (
//     <div   className="flex items-center  gap-3 my-4 overflow-x-scroll categories">
//       {categories.map((category, index) => {
//         const isActive = location.pathname === `/categories/${category.slug}`; 
//         const categoryImages = categoryImages[category] || "/default.webp"; 
       

//         return (
          
//           <Link
//             to={`/categories/${category.slug}`}
//             key={index}
//             className={`border px-4 py-2 rounded-xl transition-all 
//               ${isActive ? "bg-black text-white" : "bg-white text-black"} 
//               hover:bg-black hover:text-white hover:scale-105`}
//           >
            
//            <div className="flex flex-col w-28 h-28 items-center justify-center">
//             {/* <img src="/electronics.webp" width={80} height={80} alt="electorncis" /> */}
//              <img
//                 src={categoryImages}
//                 width={80}
//                 height={80}
//                 alt={category}
//                 className="rounded-md object-cover"
//               />
//             <h1 className="text-nowrap">{category.name}</h1>
//            </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default HomeCategory;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router";

const HomeCategory = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  // Map category slug -> image in your public folder
  const categoryImages = {
    0: "/beauty.png",
    1: "/smartphone.png",
    2: "/homedecor.webp",
    3: "/grocery.png",
    4: "/homedecor.webp",
    5: "/food.jpeg",
    6: "/laptop.jpeg",
    7: "/homedecor.webp",
    8: "/style.png",
    9:"/watch1.webp",
    10:"/tv.webp",
    11:"/style.png",
    12:"/beauty.png",
    13:"/smartphone.png",
    14:"/style.png",
    15:"/sunglass.webp",
    16:"/laptop.jpeg",
    17:"/style.png",
    18:"/vehcile.jpeg",
    19:"/bag.jpeg",
    20:"/style.png",
    21:"/jewel.jpeg",
    22:"/womenshoes.jpg",
    23:"/watch1.webp",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data); // API gives objects
    };
    fetchCategories();
  }, []);

  console.log("Categories", categories)

  return (
    <div className="flex items-center gap-3 my-4 overflow-x-scroll categories">
      {categories.map((category, index) => {
        const isActive = location.pathname === `/categories/${category.slug}`;
        const categoryImage = categoryImages[index] || "/default.webp";

        return (
          <Link
            to={`/categories/${category.slug}`}
            key={index}
            className={`border px-4 py-2 rounded-xl transition-all 
              ${isActive ? "bg-black text-white" : "bg-white text-black"} 
              hover:bg-black hover:text-white hover:scale-105`}
          >
            <div className="flex flex-col w-12 md:w-28 h-12 md:h-28 items-center justify-center">
              <img
                src={categoryImage}
                alt={category.name}
                className="w-10 md:w-20 h-10 md:h-20 rounded-md object-cover"
              />
              <h1 className="text-xs md:text-base capitalize text-center ">{category.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomeCategory;
