import React, { useState } from 'react'
import ContentWrapper from '../ContentWrapper'
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Navbar() {
  let [navbarToggle,setNavbarToggle] = useState(false);
  return (
    <>
    <nav className='w-full text-white absolute max-tab:bg-[#1a1a1a] max-tb:opacity-[0.9]'>
      <ContentWrapper>
        <div className='main w-full flex justify-between items-center py-4'>
          <div className='logoBox'>
            <Link to={"/"} className='cursor-pointer'>
            <h1 className='text-2xl font-montserrat font-bold max-lg:text-xl'>Gym<span className='text-brand'>Pal</span></h1>
            </Link>
          </div> 
          <div className='ulBox max-lg:hidden'>
            <ul className='flex items-center justify-start font-montserrat text-lg max-lg:text-base font-medium'>
              <li className='ml-5'>Home</li>
              <li className='ml-5'>About Us</li>
              <li className='ml-5'>Our Services</li>
              <li className='ml-5'>Contact Us</li>
              <li className='ml-5'>Testimonials</li>
            </ul>
          </div>
          <div className='hamburger lg:hidden h-8 relative'>
            <div className='h-full  w-6 absolute top-0 right-0'>
            {
              
              navbarToggle ? <VscChromeClose className='h-full text-lg' onClick={()=>setNavbarToggle(!navbarToggle)}/> : <SlMenu className='h-full text-lg' onClick={()=>setNavbarToggle(!navbarToggle)}/>
            }
            </div>
            <ul className={`text-white mt-[60px]  bg-darkMode h-[80vh] w-[250px] opacity-90 flex-col items-start font-montserrat text-lg max-lg:text-base font-medium rounded-md p-3 ${navbarToggle ? "flex" : "hidden"}`}>
              <li className='ml-5 my-4'>Home</li>
              <li className='ml-5 my-4'>About Us</li>
              <li className='ml-5 my-4'>Our Services</li>
              <li className='ml-5 my-4'>Contact Us</li>
              <li className='ml-5 my-4'>Testimonials</li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </nav>
    </>
  )
}

export default Navbar