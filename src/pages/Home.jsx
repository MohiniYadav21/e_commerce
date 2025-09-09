import React from 'react'
import Products from '../Components/Products'
import Banner from "../Components/Banner"


const Home = () => {
   const electronics = [
    {
      id: 1,
      name: "Fans & Geysers",
      offer: "From ₹999",
      image: "/gyser.png",
    },
    {
      id: 2,
      name: "Home Essentials",
      offer: "From ₹2999",
      image: "/home.jpeg",
    },
    {
      id: 3,
      name: "Fridege",
      offer: "From ₹9990",
      image: "/fridge.jpeg",
    },
    {
      id: 4,
      name: "Best Selling Mobile Speakers",
      offer: "From ₹4999",
      image: "/speaker.jpeg",
    },
    {
      id: 5,
      name: "Monitors",
      offer: "From ₹6599",
      image: "/tv.webp",
    },
    {
      id: 6,
      name: "Fastrack Smartwatches",
      offer: "From ₹1399",
      image: "/watch1.webp",
    },
  ];

  return (
    <div>
      <Banner />
        <section className="bg-white rounded-lg shadow p-4 mt-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Best of Electronics
      </h2>

      {/* Horizontal scroll for products */}
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-6 scrollbar-hide">
        {electronics.map((item) => (
          <div
            key={item.id}
            className="min-w-[160px] bg-white  rounded-lg shadow hover:shadow-md transition p-3 text-center cursor-pointer flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-45 h-45 mx-auto object-contain"
            />
            <h3 className="text-gray-700 text-xl font-medium mt-2">
              {item.name}
            </h3>
            <p className="text-green-600 font-semibold">{item.offer}</p>
          </div>
        ))}
      </div>
    </section>

   <section className='bg-gray-100 '>
     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-6'>
      <img className="w-[600px] h-[300px]"
          src="/img6.jpg" alt="shoes" />
           <img className="w-[600px] h-[300px]"
     src="/img1.webp" alt="tv" />
     <img className="w-[600px] h-[300px]"
     src="/img2.jpg" alt="shoes" />
    </div>
   </section>

     
<section className="bg-white p-4 mt-6 rounded-lg shadow">
  <h2 className="text-xl font-bold mb-3">Fashion's Top Deals</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {/* Product 1 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/watch1.webp"
        alt="Wrist Watch"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Wrist Watches</p>
      <p className="text-green-600 font-semibold">Min. 90% Off</p>
    </div>

    {/* Product 2 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/dresss.webp"
        alt="Women's Saree"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Women’s Sarees</p>
      <p className="text-green-600 font-semibold">Min. 50% Off</p>
    </div>

    {/* Product 3 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/bag.jpeg"
        alt="Laptop Bag"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Laptop Bags</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

    {/* Product 4 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/shoes.webp"
        alt="Men’s Casual Shoes"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Men’s Casual Shoes</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

    {/* Product 5 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/perfume.webp"
        alt="perfume"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Men’s Casual Shoes</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

     {/* Product 6 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/beauty.png"
        alt="Skincare"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Skin care</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>     
  </div>
</section>


<section className='bg-gray-100 '>
     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-6'>
      <img className="w-[600px] h-[300px]"
          src="/img7.webp" alt="shoes" />
           <img className="w-[600px] h-[300px]"
     src="/img8.webp" alt="tv" />
     <img className="w-[600px] h-[300px]"
     src="/img9.webp" alt="shoes" />
    </div>
   </section>


<section className="bg-white p-4 mt-6 rounded-lg shadow flex flex-col md:flex-row items-center gap-6">
  {/* Banner Image */}
  <img
    src="/ban.png"
    alt="Fashion Banner"
    className="rounded-md object-cover w-full md:w-1/2"
  />

  {/* Text Content */}
  <div className="bg-white rounded-xl p-4 md:p-6 w-full md:w-1/2 text-center md:text-left leading-relaxed space-y-3">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      Exclusive Makeup Sale on the App 
    </h2>
    <p className="text-xl text-base md:text-lg text-gray-600">
      Get ready to glam up with our exclusive Makeup Sale on the app! Discover
      top beauty brands, trending products, and must-have essentials at
      unbeatable discounts. From long-lasting lipsticks and high-pigment
      eyeshadows to flawless foundations and skincare-infused makeup, everything
      you love is now just a tap away.
    </p>
    <p className="text-xl text-base md:text-lg text-gray-600">
      Shop your favorite beauty picks, enjoy limited-time offers, and unlock
      extra savings with app-only deals. Whether you’re creating a bold festive
      look or going for everyday elegance, we’ve got you covered.
    </p>
    <button className="text-xl mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition duration-300">
      Shop the Sale
    </button>
  </div>
</section>


 <section className="bg-white p-4 mt-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Product Card 1 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="/style.png"
              alt="Shirt"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Men's Casual Shirt</h3>
            <p className="text-green-600 font-semibold">₹499</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="saree.webp"
              alt="Saree"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Women's Saree</h3>
            <p className="text-green-600 font-semibold">₹899</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 3 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="jewel.jpeg"
              alt="Saree"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Women's accessories</h3>
            <p className="text-green-600 font-semibold">₹299</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 4 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="tv.webp"
              alt="Saree"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Television</h3>
            <p className="text-green-600 font-semibold">₹10,000</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 5 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="toy.jpeg"
              alt="Saree"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Toys</h3>
            <p className="text-green-600 font-semibold">₹899</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          
           {/* Product Card 5 */}
          <div className=" rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="sunglass.webp"
              alt="Saree"
              className="w-full h-45 object-contain"
            />
            <h3 className="mt-2 text-xl font-medium">Sunglass</h3>
            <p className="text-green-600 font-semibold">₹999</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>




          
        </div>
      </section>

      
      <section className="bg-white pt-4 mt-6 rounded-lg shadow">
        <h2 className="text-2xl text-bold font-semibold p-4 ">All Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
         
         
   
        </div>
      </section>






      <Products />

      

      <section className="bg-white p-4 mt-6 rounded-lg shadow flex flex-col md:flex-row items-center gap-6">
  {/* Banner Image */}
  <img
    src="/grow.png"
    alt="Fashion Banner"
    className="rounded-md object-cover w-full md:w-1/2"
  />

  {/* Text Content */}
  <div className="bg-white rounded-xl p-4 md:p-6 w-full md:w-1/2 text-center md:text-left leading-relaxed space-y-3">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      Exclusive Grocery Sale on the App 
    </h2>
    <p className="text-xl text-base md:text-lg text-gray-600">
      Get all your daily essentials at unbeatable prices with our exclusive Grocery Sale on the app! From fresh fruits and vegetables to pantry staples, snacks, beverages, and household items, 
      everything you need is now just a tap away. Enjoy top-quality groceries, exciting discounts, and extra savings with app-only deals..
    </p>
    <p className="text-xl text-base md:text-lg text-gray-600">
      Whether you’re stocking up for the week or planning a special family dinner, we’ve got you covered with reliable, fast delivery and trusted brands. Download the app now and experience the most
       convenient and budget-friendly grocery shopping before the sale ends!
    </p>
    <button className="text-xl mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition duration-300">
      Shop the Sale
    </button>
  </div>
</section>

<section className='bg-gray-100 '>
     <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-6'>
      <img className="w-[600px] h-[300px]"
          src="/img7.webp" alt="shoes" />
           <img className="w-[600px] h-[300px]"
     src="/img8.webp" alt="tv" />
     <img className="w-[600px] h-[300px]"
     src="/img9.webp" alt="shoes" />
    </div>
   </section>




   <section className="bg-gray-100 p-4 mt-6 rounded-lg shadow flex flex-col md:flex-row items-center gap-6">
  
   {/* Banner Image */}
 <img
    src="/banner3.webp"
    alt="Fashion Banner"
    className=" rounded-md object-cover w-full md:w-1/2 h-170"
  />

  
  <div className="bg-white rounded-xl p-4 md:p-6 w-full md:w-1/2 text-center md:text-left leading-relaxed space-y-3">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
      Best value deals on Fashion  
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-4">
    {/* Product 1 */}
    <div className="border border-gray-100 p-3 rounded-md text-center">
      <img
        src="/laptopbag.jpeg"
        alt="Bags"
        className="mx-auto h-50 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Bags</p>
      <p className="text-green-600 font-semibold">Just ₹68,999*</p>
    </div>

    {/* Product 2 */}
    <div className="border border-gray-100 p-3 rounded-md text-center">
      <img
        src="/shirt.webp"
        alt="Women's Saree"
        className="mx-auto h-50 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Nothing Phone(3a)</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

    {/* Product 3 */}
    <div className="border border-gray-100 p-3 rounded-md text-center">
      <img
        src="/watch2.jpeg"
        alt="Laptop Bag"
        className="mx-auto h-50 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Google Pixel 9</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

    {/* Product 4 */}
    <div className="border border-gray-100 p-3 rounded-md text-center">
      <img
        src="/saree.webp"
        alt="Men’s Casual Shoes"
        className="mx-auto h-50 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">vivo T4 Lite 5G</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>
    </div>

  
 

  </div>
</section>


<section className="bg-white p-4 mt-6 rounded-lg shadow">
  <h2 className="text-xl font-bold mb-3">Mobiles</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {/* Product 1 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p1.jpeg"
        alt="Wrist Watch"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Samsung Galaxy S25 5G</p>
      <p className="text-green-600 font-semibold">Just ₹68,999*</p>
    </div>

    {/* Product 2 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p2.webp"
        alt="Women's Saree"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Nothing Phone(3a)</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

    {/* Product 3 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p3.png"
        alt="Laptop Bag"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Google Pixel 9</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

    {/* Product 4 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p4.webp"
        alt="Men’s Casual Shoes"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">vivo T4 Lite 5G</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

    {/* Product 5 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p5.webp"
        alt="perfume"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Realme P3x5G</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>

     {/* Product 6 */}
    <div className=" p-3 rounded-md text-center">
      <img
        src="/p6.png"
        alt="Skincare"
        className="mx-auto h-40 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Oppo K13x5G</p>
      <p className="text-green-600 font-semibold">From ₹22,999*</p>
    </div>     
  </div>
</section>


<section className='rounded-md bg-gray-100'>
   <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-6 '>
    <img className="w-[600px] h-[300px]"
     src="/img1.webp" alt="tv" />
     <img className="w-[600px] h-[300px]"
     src="/img2.jpg" alt="shoes" />
      <img  className="w-[600px] h-[300px]"
       src="/img3.webp" alt="phone" />
       <img  className="w-[600px] h-[300px]"
        src="/img4.jpg" alt="shoes" />
        <img className="w-[600px] h-[300px]"
        src="/img5.jpg" alt="shoes" />
         <img className="w-[600px] h-[300px]"
          src="/img6.jpg" alt="shoes" />
           {/* <img className="w-[500px] h-[400px]"
     src="/img1.webp" alt="tv" />
     <img className="w-[500px] h-[400px]"
     src="/img2.jpg" alt="shoes" /> */}
   </div>
  </section>


    </div>
  )
}

export default Home
