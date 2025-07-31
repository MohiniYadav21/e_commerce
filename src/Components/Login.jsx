import React,{useState} from 'react'
import {Mail,User,Lock  } from "lucide-react";
import { Link } from 'react-router';

const Login = () => {

const [action,setAction] =useState("login");

  return (
  <div className='flex justify-center items-center w-2xl mt-3 m-auto pb-3 '>
    <div className='flex  flex-col  justify-center items-center mt-10 border border-black backdrop-gray-50 max-w-md w-2xl shadow-lg p-4 '>
      <div className='text-2xl text-blue-700 font-bold ' >{action}</div>
      <div className='w-8 text-blue-700 border border-r-1 mt-2 '></div>
          
            {action === "login"?<div></div>:
            <div className="flex items-center justify-center gap-2 my-5 ">
            <User size={30}/>
              <input
               type='text'
                className='flex-1 justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 p-2 rounded max m-auto '
                 placeholder='Full Name'/> </div>}
              
          
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
         {action === "Sign Up" ?<div></div>: <div className="font-bold">Lost Password?<span className="text-blue-600 font-bold">Click Here</span></div>
         }
        
         <div className="">
          <div className='flex justify-col items-center gap-2 my-3 '>
            <Link to="/signup" className='px-5 py-1 rounded-2xl text-lg border-2 border-black'
            >Sign Up</Link>
             <Link to="/login" className='px-5 py-1 rounded-2xl text-lg border-2 border-blue-500 bg-blue-500 text-white'>Login</Link>
             </div>
         </div>
    </div>
    </div>
    
  )
}

export default Login
