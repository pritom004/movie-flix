import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavLink,  } from 'react-router-dom'
import { useState } from 'react';
import ResHeader from './ResHeader';




export default function Header() {

const [active, setActive] = useState(true);

  return (
    <div>


      <div className='flex flex-col items-center sm:flex-row space-y-4 w-[97%] mx-auto py-4 px-10 xl:px-56  bg-gray-900 text-white justify-center sm:justify-between text-base'>
      <NavLink className='text-balance text-center text-sm lg:text-lg'>Get Movie Flix Membership. 30-days return or refund guarantee</NavLink> 
    <div className='text-indigo-500 text-center space-x-4 lg:flex w-56'>
      <NavLink to=''>SING UP</NavLink>
      <NavLink to=''>LOGIN</NavLink>
    </div>
      </div>
  

      <div className='flex w-[97%] mx-auto py-4 px-5 sm:px-10 xl:px-56
       shadow-sm justify-between
         items-center'>
        <NavLink to='/' className='text-indigo-600 text-lg font-extrabold'>MovieFlix</NavLink>

        <ul className="sm:flex text-gray-800 gap-4 uppercase hidden font-normal">
        <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/">
              <strong>Home</strong>
            </NavLink></li>
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/movies">
              <strong>Movie</strong>
            </NavLink></li>
            <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/about">
              <strong>About</strong>
            </NavLink></li>
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/contact">
              <strong>Contact</strong>
            </NavLink></li>
        </ul>
        <span className=' sm:hidden text-2xl' onClick={()=> {setActive(active? false: true)}}>{active? <FiAlignJustify /> : <RxCross2 />}</span>
      </div>
    {active || <ResHeader />}
    </div>
  )
}
