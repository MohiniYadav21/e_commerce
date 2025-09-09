import React from 'react'
import { Warehouse, Sparkles, Gift, FileQuestionMark } from 'lucide-react'

const Footer = () => {
  return (
    <>
      
      <div className="flex flex-col md:flex-row justify-between bg-black px-8 py-8 gap-8 md:gap-0">
        <div className="flex flex-col">
          <p className="text-2xl text-gray-400">About</p>
          <ul className="text-lg text-white space-y-2">
            <a href="#" className="hover:underline"><li>Contact Us</li></a>
            <a href="#" className="hover:underline"><li>About</li></a>
            <a href="#" className="hover:underline"><li>Careers</li></a>
            <a href="#" className="hover:underline"><li>Press</li></a>
          </ul>
        </div>

        <div>
          <p className="text-2xl text-gray-400">GROUP COMPANIES</p>
          <ul className="text-lg text-white space-y-2">
            <a href="#" className="hover:underline"><li>Myntra</li></a>
            <a href="#" className="hover:underline"><li>Cleartrip</li></a>
            <a href="#" className="hover:underline"><li>Shopsy</li></a>
          </ul>
        </div>

        <div>
          <p className="text-2xl text-gray-400">Help</p>
          <ul className="text-lg text-white space-y-2">
            <a href="#" className="hover:underline"><li>Payment</li></a>
            <a href="#" className="hover:underline"><li>Shipping</li></a>
            <a href="#" className="hover:underline"><li>Cancellation and Returns</li></a>
            <a href="#" className="hover:underline"><li>FAQs</li></a>
          </ul>
        </div>

        <div>
          <p className="text-2xl text-gray-400">CONSUMER POLICY</p>
          <ul className="text-lg text-white space-y-2">
            <a href="#" className="hover:underline"><li>Cancellation and Returns</li></a>
            <a href="#" className="hover:underline"><li>Privacy</li></a>
            <a href="#" className="hover:underline"><li>Terms and Policy</li></a>
            <a href="#" className="hover:underline"><li>Security</li></a>
            <a href="#" className="hover:underline"><li>Sitemap</li></a>
            <a href="#" className="hover:underline"><li>EPR compliance</li></a>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Bottom Footer Section */}
      <div className="bg-black">
        <ul className="text-white flex flex-col md:flex-row justify-between items-center gap-4 px-9 py-9 text-center">
          <li className="flex items-center gap-2 text-lg">
            <Warehouse color="yellow" size={25} /> Become a seller
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Sparkles color="yellow" size={25} /> Advertise
          </li>
          <li className="flex items-center gap-2 text-lg">
            <Gift color="yellow" size={25} /> Gift cards
          </li>
          <li className="flex items-center gap-2 text-lg">
            <FileQuestionMark color="yellow" size={25} /> Help center
          </li>
          <li className="text-lg">©2007-2025 StuffSuss.com</li>
          <li><img src="/payment-method-c454fb.svg" alt="payment method" /></li>
        </ul>
      </div>
    </>
  )
}

export default Footer
