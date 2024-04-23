import React, { useEffect, useState } from 'react'
import fetchVideosFromYt from '../../../utils/ytApi'
import ContentWrapper from '../../../components/ContentWrapper';
function RecomYtVideos({exerciseName}) {
  let [recommendedYtVideos,setRecommendedYtVideos] = useState([]);
  useEffect(()=>{
    fetchVideosFromYt(exerciseName).then((res)=>{
      console.log(res.data);
      setRecommendedYtVideos(res.data);
    })
  },[])
  return (
    <>
    <ContentWrapper>
    <h1 className=' font-montserrat mb-5 font-bold text-lg text-white text-center capitalize max-md:text-lg max-md:font-semibold'>Recommended Videos For "{exerciseName}"</h1>
    <section className='min-h-screen w-full  mt-8 mb-10'>
      {/* <Carousel/> */}
      
        <div className='w-full  min-h-screen flex justify-center gap-4 items-start flex-wrap'>
          {/* <div className='h-[360px] w-[400px] '>
            <div className='imgBox h-[80%] w-full '>

            </div>
            <div className='textBox h-[20%] w-full'>
              <h1>Barbell Rear Row</h1>
            </div>
          </div> */}
          {
            recommendedYtVideos?.items?.map((item)=>(
              <div key={item.id.videoId} className='h-[300px] w-[340px] rounded-md overflow-hidden'>
                <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target='_blank' className=' inline-block h-full w-full'>
            <div className='imgBox h-[80%] w-full  '>
              <img src={item.snippet.thumbnails.medium.url } className='h-full w-full object-cover object-center' />
            </div>
            <div className='textBox  bg-brand overflow-hidden w-full flex justify-center items-center capitalize p-2 h-[20%] '>
              <h1 className='font-medium font-poppins text-white my-3'>{item.snippet.title}</h1>
            </div>
            </a>
          </div>
            ))
          }
        </div>
        </section>
      </ContentWrapper>
    
    </>
  )
}

export default RecomYtVideos