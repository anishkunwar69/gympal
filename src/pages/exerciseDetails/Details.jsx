import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import fetchDataFromExerciseDbApi from '../../utils/api';
import ContentWrapper from '../../components/ContentWrapper';

function Details() {
  let [exercise,setExercise] = useState({});
  const {selectedExerciseId} = useParams();
  let [loading,setLoading] = useState(null);
  useEffect(()=>{
    setLoading(true);
    fetchDataFromExerciseDbApi(`/exercise/${selectedExerciseId}`).then((res)=>{
      setLoading(false);
      setExercise(res.data);
    })
  },[])
  let totalLength = exercise?.secondaryMuscles?.length;
  return (
    <>
    <section className='min-h-screen w-full text-white max-lg:mb-5'>
    <ContentWrapper>
      <div className='w-full  min-h-[95vh] border-b-[2px] max-lg:p-[76px] flex max-lg:flex-wrap justify-center items-center'>
        {
          !loading? 
        <>
          <div className='imgBox rounded-md border-[2px] max-lg:min-h-[260px] max-lg:min-w-[300px]  lg:h-[500px] lg:w-[650px]'>
            <img src={exercise?.gifUrl}  className='h-full w-full object-cover object-center'/>
          </div>
          <div className='textBox  border-blue-600 min-w-[300px] '>
            <div className='w-full  border-red-600 lg:pl-10 max-lg:pl-8 max-sm:pl-1 pt-10 lg:pb-10'>
              <h1 className=' capitalize font-montserrat font-semibold text-xl max-md:text-lg'>{exercise?.name}</h1>
              <p className='mt-2 font-poppins text-slate-500 capitalize max-md:text-sm'>Target Muscle : {exercise?.target}</p>
              <ul className='mt-2 flex max-sm:flex-col items-start gap-x-2 '>
                <p className='font-poppins text-slate-500 capitalize max-md:text-sm'>Secondary Muscles : </p>
                {
                  exercise?.secondaryMuscles?.map((secondaryMuscle,index)=>(
                    <li key={secondaryMuscle} className='font-poppins text-slate-500 capitalize max-md:text-sm'>{secondaryMuscle}{index == totalLength-1? "" : ","}</li>
                  ))
                }
              </ul>
              <p className=' font-montserrat text-xl font-bold text-white mt-2 max-md:text-lg'>Instructions :</p>
              <ol className='mt-2 flex flex-col items-start justify-between list-decimal ml-4'>
                {
                  exercise?.instructions?.map((instruction)=>(
                    <li key={instruction} className=' font-poppins my-2 max-sm:tracking-wider max-md:text-sm'>{instruction}</li>
                  ))

                }
              </ol>
            </div>
          </div>
          </>:<ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
}
      </div>
      </ContentWrapper>
    </section>
    </>
  )
}

export default Details