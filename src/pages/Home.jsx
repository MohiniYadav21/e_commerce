import React from 'react'
import Products from '../Components/Products'
import Banner from "../Components/Banner"


const Home = () => {
  return (
    <div>
      <Banner />
     
<section className="bg-white p-4 mt-6 rounded-lg shadow">
  <h2 className="text-xl font-bold mb-3">Fashion's Top Deals</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {/* Product 1 */}
    <div className="border p-3 rounded-md text-center">
      <img
        src="/watch1.webp"
        alt="Wrist Watch"
        className="mx-auto h-32 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Wrist Watches</p>
      <p className="text-green-600 font-semibold">Min. 90% Off</p>
    </div>

    {/* Product 2 */}
    <div className="border p-3 rounded-md text-center">
      <img
        src="/dresss.webp"
        alt="Women's Saree"
        className="mx-auto h-32 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Women’s Sarees</p>
      <p className="text-green-600 font-semibold">Min. 50% Off</p>
    </div>

    {/* Product 3 */}
    <div className="border p-3 rounded-md text-center">
      <img
        src="/bag.jpeg"
        alt="Laptop Bag"
        className="mx-auto h-32 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Laptop Bags</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

    {/* Product 4 */}
    <div className="border p-3 rounded-md text-center">
      <img
        src="/shoes.webp"
        alt="Men’s Casual Shoes"
        className="mx-auto h-32 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Men’s Casual Shoes</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

    {/* Product 5 */}
    <div className="border p-3 rounded-md text-center">
      <img
        src="/perfume.webp"
        alt="perfume"
        className="mx-auto h-32 object-contain"
      />
      <p className="mt-2 text-gray-700 font-medium">Men’s Casual Shoes</p>
      <p className="text-green-600 font-semibold">Min. 70% Off</p>
    </div>

   

     
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
        <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Product Card 1 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="/style.png"
              alt="Shirt"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Men's Casual Shirt</h3>
            <p className="text-green-600 font-semibold">₹499</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="saree.webp"
              alt="Saree"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Women's Saree</h3>
            <p className="text-green-600 font-semibold">₹899</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 3 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="jewel.jpeg"
              alt="Saree"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Women's accessories</h3>
            <p className="text-green-600 font-semibold">₹299</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 4 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="tv.webp"
              alt="Saree"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Television</h3>
            <p className="text-green-600 font-semibold">₹10,000</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

           {/* Product Card 5 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="toy.jpeg"
              alt="Saree"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Toys</h3>
            <p className="text-green-600 font-semibold">₹899</p>
            <button className="w-full mt-2 bg-yellow-400 text-black py-1 rounded hover:bg-yellow-500">
              Add to Cart
            </button>
          </div>

          
           {/* Product Card 5 */}
          <div className="border rounded-lg p-3 shadow hover:shadow-lg transition">
            <img
              src="sunglass.webp"
              alt="Saree"
              className="w-full h-40 object-contain"
            />
            <h3 className="mt-2 text-sm font-medium">Sunglass</h3>
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


    </div>
  )
}

export default Home
