// import React, { useEffect, useRef, useState } from "react";
// import { Search, ShoppingCart } from "lucide-react";
// import { Link, useNavigate } from "react-router";
// import axios from "axios";

// const Nav = () => {
//   const [searchterm, setSearchterm] = useState("");
//   const [openSearchResult, setOpenSearchResult] = useState(false)
//   const[suggestions,setSuggestions] =useState([]);
//   const wrapperRef = useRef(null);

//   const navigate = useNavigate();

//   console.log("suggestions", suggestions)
 
  
//     useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setOpenSearchResult(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);


//     const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchterm.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchterm)}`);
//     }
//   };


//     useEffect(() => { 
//         const fetchProduct = async () => {
//             const res = await axios.get(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchterm)}`);
//             const data = res.data.products;
//             setSuggestions(data);
//         };
//         fetchProduct();
//     },[searchterm])

    




//   return (

// <div className="bg-white shadow-md px-10 py-4" ref={wrapperRef}>
     
//       <div className="flex items-center justify-between gap-10">
        
       
//         <Link to="/">
//           <img src="./flipkart-logo.webp" alt="Logo" className="h-16" />
//         </Link>

        
//         <form onSubmit={handleSearch} className="flex items-center gap-4 flex-grow max-w-2xl">
//           <div className="relative w-full">
//             <div className="flex items-center gap-4">
//             <input
//               value={searchterm}
//               onChange={(e) => setSearchterm(e.target.value)}
//               type="text"
//               onFocus={() => setOpenSearchResult(true)}
//               placeholder="Search for Products, Brands and More"
//               className="w-full bg-gray-100 border border-gray-300  pl-10 pr-4  py-3 rounded-t-2xl text-xl text-gray-700 focus:outline-none"
//             />
//              <button
//             type="submit"
//             className="bg-blue-700 text-white px-5 py-3 rounded-2xl hover:bg-gray-800"
//           >
//             Search
//           </button>
//             </div>
//             <div className={`${openSearchResult ? "block" : "hidden"} absolute w-[85%] bg-white border-gray-300 pl-10 rounded-b-2xl text-xl`}>
//               {suggestions.slice(0, 6).map((suggestion) => (
//                 <Link key={suggestion.id} to={`/${suggestion.id}`}>
//                 <div className="flex gap-2 py-2 border-b border-gray-400">
//                   <img src={suggestion.thumbnail} alt={suggestion.title} height={30} width={30} className="object-cover" />
//                   <h1 className="font-bold text-lg">{suggestion.title}</h1>
//                 </div>
//                 </Link>
//               ))}                 
                      
//             </div>
//           </div>
         
//         </form>

       
//         <ul className="flex items-center gap-6 text-md text-gray-800">
//           <Link to="/"><li className=" text-xl">Shop</li></Link>
//           <Link to="/blog"><li className="text-xl">Blog</li></Link>
//           <Link to="/login"><li className=" text-xl">
//             <button
//             type="submit"
//             className="bg-blue-700 text-white px-5 py-3 rounded-2xl hover:bg-gray-800"
//           >
//             Login
//           </button>
//             </li></Link>
//           <li>
//            <Link to='/cart'>
//             <ShoppingCart size={30} className="hover:text-blue-600" />
//            </Link>
//           </li>
//         </ul>

//       </div>
//     </div>

//   );
// };

// export default Nav;

import React, { useEffect, useRef, useState } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [searchterm, setSearchterm] = useState("");
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenSearchResult(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchterm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchterm)}`);
    }
  };

  useEffect(() => {
    if (!searchterm) return;
    const fetchProduct = async () => {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(searchterm)}`
      );
      setSuggestions(res.data.products);
    };
    fetchProduct();
  }, [searchterm]);

  return (
    <div className="bg-white shadow-md px-6 py-4 relative" ref={wrapperRef}>
      {/* ✅ Flex container: logo + search + menu */}
      <div className="flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Link to="/">
          <img src="./flipkart-logo.webp" alt="Logo" className="h-12" />
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 w-[500px] relative hidden md:flex"
        >
          <input
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
            type="text"
            placeholder="Search for Products, Brands and More"
            onFocus={() => setOpenSearchResult(true)}
            className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-l-xl text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 rounded-r-xl hover:bg-gray-800"
          >
            <Search size={20} />
          </button>

          {/* ✅ Suggestions dropdown absolute */}
          {openSearchResult && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {suggestions.slice(0, 6).map((s) => (
                <Link key={s.id} to={`/${s.id}`}>
                  <div className="flex gap-2 py-2 px-3 border-b hover:bg-gray-100">
                    <img
                      src={s.thumbnail}
                      alt={s.title}
                      className="h-10 w-10 object-cover rounded"
                    />
                    <h1 className="font-medium">{s.title}</h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </form>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-md text-gray-800">
          <Link to="/"><li className="text-xl">Shop</li></Link>
          <Link to="/blog"><li className="text-xl">Blog</li></Link>
          <Link to="/login">
            <li>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-2xl hover:bg-gray-800">
                Login
              </button>
            </li>
          </Link>
          <li>
            <Link to="/cart">
              <ShoppingCart size={28} className="hover:text-blue-600" />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Search (below navbar) */}
      <div className="md:hidden mt-3">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 w-full relative"
        >
          <input
            value={searchterm}
            onChange={(e) => setSearchterm(e.target.value)}
            type="text"
            placeholder="Search..."
            onFocus={() => setOpenSearchResult(true)}
            className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-l-xl text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-r-xl hover:bg-gray-800"
          >
            <Search size={20} />
          </button>

          {openSearchResult && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {suggestions.slice(0, 6).map((s) => (
                <Link key={s.id} to={`/${s.id}`}>
                  <div className="flex gap-2 py-2 px-3 border-b hover:bg-gray-100">
                    <img
                      src={s.thumbnail}
                      alt={s.title}
                      className="h-10 w-10 object-cover rounded"
                    />
                    <h1 className="font-medium">{s.title}</h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </form>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-lg text-gray-800">
          <Link to="/"><li>Shop</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Nav;
