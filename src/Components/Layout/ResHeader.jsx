import React from 'react'
import { NavLink } from 'react-router-dom'

function ResHeader() {
  return (
    <>
    <ul className=" text-gray-800 gap-4 uppercase text-center font-normal 
     space-y-3 pb-5">
        <li className='border py-2 shadow'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/">
              <strong>Home</strong>
            </NavLink></li>
          <li className='border py-2 shadow'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/movies">
              <strong>Movie</strong>
            </NavLink></li>
            <li className='border py-2 shadow'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/about">
              <strong>About</strong>
            </NavLink></li>
          <li className='border py-2 shadow'><NavLink className={({isActive})=>{return isActive? "text-indigo-500" : "text-gray-500"}} to="/contact">
              <strong>Contact</strong>
            </NavLink></li>
        </ul>
    </>
  )
}


export default ResHeader;