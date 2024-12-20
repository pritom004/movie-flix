import React from 'react'
import { Form } from 'react-router-dom'
import ContactImage from '../assets/contactimage.png'


export const contactData = async ({request}) =>{
    try {

      const res = await request.formData();
      console.log(res);
      
      
    } catch (error) {
      console.error(error)
    }
}



export default function Contact() {
  return (
    <div className='w-full bg-gray-100'>
      
      <div className='max-w-7xl mx-auto pb-20 px-28 pt-20'>
      <h1 className='font-bold text-2xl'>Contact Us</h1>
      <p className='font-thin'>Get touch with us. We are always here to help.</p>

      <Form action="/contact" method='POST' className='flex flex-col mt-10 w-auto '>
      
        <label htmlFor="fullname" className='font-normal text-gray-600 text-lg'>Full Name</label>
          <input type="text" 
                  name='fullname' 
                  placeholder='Enter Full Name'
                  required 
                  className='max-w-md py-1 px-5 mb-7 border-2 outline-none border-gray-500' 
          />
        
        <label htmlFor="fullname" className='font-normal text-gray-600 text-lg'>Email</label>
          <input type="text" 
                  name='fullname' 
                  placeholder='Enter Your Email'
                  required 
                  className='max-w-md py-1 px-5 mb-7 border-2 outline-none border-gray-500'
          />


        <label htmlFor="fullname" className='font-normal text-gray-600 text-lg'>Message</label>
          <textarea type="text" 
                  name='fullname' 
                  placeholder='We Are Always Here To Help You'
                  required  
                  className='max-w-md h-40 py-1 px-5 mb-7 border-2 outline-none border-gray-500'
          />

          <button type='submit' className='text-slate-100 hover:text-gray-600 hover:bg-gray-200 rounded-md w-36 border py-2 font-extralight px-5 bg-indigo-600'>Send Message</button>
      </Form>


      
    <div className='absolute right-32 top-72 animate-bounce shadow-xl 2xl:flex hidden'>
        <img src={ContactImage} width={600} height={500}/>
      </div>
    </div>
    </div>
  )
}
