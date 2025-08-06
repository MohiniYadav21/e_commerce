import React from 'react'
import {  Warehouse } from 'lucide-react'
import { Sparkles } from 'lucide-react'
import { Gift } from 'lucide-react'
import {FileQuestionMark} from 'lucide-react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between bg-black px-8 py-8'>
          <div className='flex  flex-col'>
              <p className='text-2xl text-gray-400'>About</p>
              <ul className='text-xl text-white'>
                 <a href="#" className='hover:underline'><li>Contact Us</li></a> 
                 <a href="#" className='hover:underline'><li>About</li></a> 
                  <a href="#" className='hover:underline'><li>Careers</li></a>
                 <a href="#" className='hover:underline'><li>Press</li></a> 
              </ul>
          </div>
          <div>
              <p className='text-2xl text-gray-400'>GROUP COMPANIES</p>
              <ul className='text-xl text-white'>
                   <a href="#" className='hover:underline'><li>Myntra</li></a>
                   <a href="#" className='hover:underline'><li>Cleartrip</li></a>
                   <a href="#" className='hover:underline'><li>Shopsy</li></a>
              </ul>
          </div>
          <div>
              <p className='text-2xl text-gray-400'>Help</p>

              <ul className='text-xl text-white'>
                  <a href="#" className='hover:underline'><li>Payment</li></a>
                   <a href="#" className='hover:underline'><li>Shipping</li></a>
                  <a href="#" className='hover:underline'> <li>Cancellation and Returns</li></a>
                  <a href="#" className='hover:underline'> <li>FAQs</li></a>
              </ul>
          </div>
          <div>
              <p className='text-2xl text-gray-400'>CONSUMER POLICY</p>
              <ul className='text-xl text-white'>
                 <a href="#" className='hover:underline'> <li>Cancellation and Returns</li></a>
                  <a href="#" className='hover:underline'><li>Privacy</li></a>
                 <a href="#" className='hover:underline'> <li>Terms and Policy</li></a>
                  <a href="#" className='hover:underline'><li>Security</li></a>
                 <a href="#" className='hover:underline'> <li>Sitemap</li></a>
                 <a href="#" className='hover:underline'> <li>EPR compilance</li></a>
              </ul>
          </div>
      </div>
      <hr className='text-white ' />
      <div className='bg-black'>
        <ul className='text-white flex justify-between gap-2 px-9 py-9'>
            <li className='flex justify-around gap-1 text-xl'><Warehouse color='yellow' size={30}/>Become a seller</li>
            <li className='flex justify-around gap-1 text-xl'><Sparkles color='yellow' size={30}/>Advertize</li>
            <li className='flex justify-around gap-1 text-xl'><Gift color='yellow' size={30}/>Gift cards</li>
            <li className='flex justify-around gap-1 text-xl'><FileQuestionMark color='yellow' size={30}/>Help center</li>
            <li className=' text-xl'>©2007-2025 StuffSuss.com</li>
        </ul>
      </div>
      </>
  )
}

export default Footer
