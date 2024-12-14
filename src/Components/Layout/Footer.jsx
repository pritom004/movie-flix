import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiFacebook} from "react-icons/ci";
import { RxTwitterLogo } from "react-icons/rx";
import { PiYoutubeLogo } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <div className='bg-gray-900 py-10'>
    <footer className='w-3/5 mx-auto px-32 '>
      <div className='flex space-x-2 text-3xl text-white'>
      <CiFacebook className='cursor-pointer hover:bg-white hover:text-black'/>
      <IoLogoInstagram className='cursor-pointer hover:bg-white hover:text-black'/>
      <RxTwitterLogo className='cursor-pointer hover:bg-white hover:text-black'/>
      <PiYoutubeLogo className='cursor-pointer hover:bg-white hover:text-black'/>
      </div>

    <div className='mt-5 flex w-full justify-between text-gray-300 font-semibold'>
    <ul className='space-y-1'>
      <li>
        <NavLink>Audio Description</NavLink>
      </li>
      <li>
        <NavLink>Inverstor</NavLink>
      </li>
      <li>
        <NavLink>Legal Notices</NavLink>
      </li>
    </ul>

    <ul className='space-y-1'>
      <li>
        <NavLink>Help Center</NavLink>
      </li>
      <li>
        <NavLink>Jobs</NavLink>
      </li>
      <li>
        <NavLink>Cookie Preferences</NavLink>
      </li>
    </ul>

    <ul className='space-y-1'>
      <li>
        <NavLink>Gift Cards</NavLink>
      </li>
      <li>
        <NavLink>Term of Use</NavLink>
      </li>
      <li>
        <NavLink>Corporate Information</NavLink>
      </li>
    </ul>

    <ul className='space-y-1'>
      <li>
        <NavLink>Media Centre</NavLink>
      </li>
      <li>
        <NavLink>Privacy</NavLink>
      </li>
      <li>
        <NavLink>Contact Us</NavLink>
      </li>
    </ul>

    </div>
    </footer>
    </div>
  )
}
