import React from 'react'
import ContentWrapper from '../ContentWrapper'
import { BsHeart } from 'react-icons/bs'
function Footer() {
  return (
    <>
    <footer className='w-full bg-footer text-white font-poppins'>
      <ContentWrapper>
        <div className='py-10 text-center w-full'>
          <h1>No Rights Reserved &copy;2024</h1>
          <div className='w-full flex items-center justify-center gap-2.5'>
            <p>Skip LEG Days With</p>
            <h1 className='text-xl font-montserrat font-bold max-lg:text-xl'>Gym<span className='text-brand'>Pal</span></h1>
          </div>
          <p className=' font-montserrat  text-slate-100'>made by <span><a href='https://www.instagram.com/anishkunwarr/'>@anishkunwarr</a></span></p>
          </div>
      </ContentWrapper>
    </footer>
    </>
  )
}

export default Footer