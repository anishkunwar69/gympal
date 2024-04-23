import React from 'react'
import ContentWrapper from '../../../components/ContentWrapper'
import Gym from "../../../assets/gymm.png"
import Gum from "../../../assets/gum.jpeg"
function Hero() {
  return (
    <>
    <section className={`h-[93.5vh] w-full border-b-2 border-slate-300 max-tab:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`}>
      <ContentWrapper>
        <div className='mainDiv h-screen w-full flex justify-center items-center'>
          <div className='textBox w-1/2 lg:max-w-[575.200px] md:min-w-[575.200px] max-tab:w-full max-tab:text-center max-sm:min-w-sm'>
            <h1 className='text-white font-montserrat font-extrabold max-lg:text-4xl max-sm:text-3xl max-lg:leading-normal  text-5xl uppercase leading-normal'>Build Your Body</h1>
            <h1 className='text-white font-montserrat font-extrabold max-lg:text-4xl max-sm:text-3xl max-lg:leading-normal text-5xl uppercase leading-normal'>Into A <span className='text-brand'>Healthy</span> And</h1>
            <h1 className='text-white font-montserrat font-extrabold max-lg:text-4xl max-sm:text-3xl max-lg:leading-normal text-5xl uppercase leading-normal'><span className='text-brand'>Strong</span> Body</h1>
            <button className='mr-4 max-sm:mr-2 max-sm:py-2 max-sm:px-7 max-sm:text-base max-sm:mt-[12px] inline-block mt-4 text-white bg-button font-poppins py-3 px-8 text-lg rounded'><a href='#select-muscle-group'>Start Training</a></button>
            <button className='max-sm:py-2 max-sm:mr-2 max-sm:px-7 max-sm:text-base max-sm:mt-[12px] inline-block mt-4 text-white bg-secondButton font-poppins py-[13px] px-8 text-lg rounded'>Do Not Contact Us</button>
          </div>

          <div className='imgBox w-1/2 max-tab:hidden'>
            <img src={Gym} className='h-[665px] max-lg:h-[650px] object-cover object-center'/>
          </div>

        </div>
      </ContentWrapper>
    </section>
    </>
  )
}

export default Hero