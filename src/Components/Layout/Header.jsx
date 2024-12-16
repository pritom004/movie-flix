import React from 'react'
import { NavLink,  } from 'react-router-dom'
export default function Header() {
  return (
    <div>


      <div className='flex w-[97%] mx-auto py-4 px-56 bg-gray-900 text-white justify-between text-base'>
      <NavLink>Get Movie Flix Membership. 30-days return or refund guarantee</NavLink> 
    <div className='text-indigo-500 space-x-4'>
      <NavLink to=''>SING UP</NavLink>
      <NavLink to=''>LOGIN</NavLink>
    </div>
      </div>
  

      <div className='flex w-[97%] mx-auto py-4 px-56 shadow-sm justify-between'>
        <NavLink to='/' className='text-indigo-600 text-lg font-extrabold'>MovieFlix</NavLink>
        <ul className="flex text-gray-800 gap-4 uppercase font-normal">
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/about">
              <strong>About</strong>
            </NavLink></li>
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/movies">
              <strong>Movie</strong>
            </NavLink></li>
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/">
              <strong>Home</strong>
            </NavLink></li>
          <li className='underline-animation'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/contact">
              <strong>Contact</strong>
            </NavLink></li>
        </ul>
      </div>

    </div>
  )
}
