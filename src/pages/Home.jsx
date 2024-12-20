import Image from '../assets/movie-background.jpg'
import HomeImage from '../assets/homeimage.png'
import { NavLink } from 'react-router-dom'
import React from 'react'



export default function Home() {
  return (
    <>
      <img src={Image} className='absolute z-[-1] w-[97%] right-7 mix-blend-color-burn h-[760px] blur-sm'/>

      <div className='max-w-7xl mx-auto flex bg-transparent text-slate-100 pb-44 justify-center'>
        <div className='my-auto'>
          <p className='font-bold text-xl mb-3'>Explore The Latest in movie industries</p>
          <h1 className='text-5xl mb-7 font-extrabold max-w-lg'>Unlimited Movie, TVs Shows & More.</h1>

          <p className='text-md font-semibold max-w-xl mb-6'>Discover the Top Best Movies and Dramas with a catchy subtitle like your Ultimate Guaide to Must-watch Conetent.</p>

          <NavLink to='/movies' className='shadow-sm text-lg font-medium animate-bounce pb-2 py-2 px-5 rounded-md bg-indigo-700'>Explore Now</NavLink>

        </div>


      <div className='pt-10 pb-10'>
        <img src={HomeImage} alt="Movie Flix" className='' />
      </div>

      </div>
    </>
  )
}
