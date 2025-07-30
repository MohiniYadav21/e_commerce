import React from 'react'
import {Mail,User,Lock  } from "lucide-react";

const Login = () => {
  return (
  <div className='flex justify-center items-center min-h-screen mt-3 '>
    <div className='flex  flex-col  justify-center items-center mt-10 border border-black backdrop-gray-50 max-w-md shadow-lg p-4 '>
          <div className="flex items-center justify-center gap-2 my-5">
              <User size={30}/>
              <input
               type='text'
                className='flex-1 justify-center bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded max'
                 placeholder='Full Name'/>
           </div>
           <div className=" flex  justify-center items-center  gap-2 my-5">
           <Mail size={30}/>
           <input
            type='email'
             className='flex-1 justify-center bg-gray-50  border border-gray-300 text-gray-900 p-2 rounded '
              placeholder='Email '/>
           </div>
           <div className="flex justify-center items-center gap-2 my-5">
            <Lock size={30}/> 
           <input 
           type='password' 
           className='flex-1 justify-center bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded' 
           placeholder='password'/>
         </div>
         
         <div className="font-bold">Lost Password?<span className="text-blue-600 font-bold">Click Here</span></div>
         <div className="submit">
          <div className='flex justify-col items-center gap-2 my-3'>
            <div className="bg-blue-400 text-2xl font-black rounded-2xl p-3">Sign Up</div>
             <div className="bg-blue-400 text-2xl font-black rounded-2xl p-3">Login</div>
             </div>
         </div>
    </div>
    </div>
    
  )
}

export default Login
