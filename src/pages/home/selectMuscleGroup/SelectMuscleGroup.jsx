import React, { useEffect, useState } from 'react'
import fetchDataFromExerciseDbApi from '../../../utils/api'
import ContentWrapper from '../../../components/ContentWrapper';
import MuscleGroups from './MuscleGroups';

function SelectMuscleGroup() {
  let [bodyPartList,setBodyPartList] = useState([]);
  let [loading,setLoading] = useState(null);
  useEffect(()=>{
    setLoading(true);
    fetchDataFromExerciseDbApi("/bodyPartList").then((res)=>{
      setLoading(false);
      setBodyPartList(res);
    })
  },[])
  return (
    <>
    <section id='select-muscle-group' className='text-center'>
      <ContentWrapper>
        { !loading &&
      <h1 className='my-2 font-montserrat text-xl font-semibold text-white'>Select Muscle Group</h1>
        }
        <div className=' flex items-center flex-wrap justify-center gap-5 mb-8'>
          {
            !loading?
          <MuscleGroups muscleGroup={bodyPartList?.data}/>:
          <h1 className=' font-montserrat mt-4 text-xl font-semibold text-white'>Please Wait...</h1>
          }
        </div>
      </ContentWrapper>
    </section>
    </>
  )
}

export default SelectMuscleGroup