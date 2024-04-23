import React from 'react';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import fetchDataFromExerciseDbApi from '../../utils/api';
import AllExercises from './AllExercises';

function Exercises() {
  let [exercises,setExercises] = useState([]);
  let [equipments,setEquipments] = useState([]);
  const {selectedMuscleGroup} = useParams();

  // fetching exercises based on name
  useEffect(()=>{
    fetchDataFromExerciseDbApi(`/bodyPart/${selectedMuscleGroup}`,{limit: '1000'},).then((res)=>{
      setExercises(res);
    })
  },[])

  // fetching equipment list
  useEffect(()=>{
    fetchDataFromExerciseDbApi("/equipmentList").then((res)=>{
      setEquipments(res);
    })
  },[])

  return (
    <>
    <section className='w-full min-h-screen border-t-[1px]'>
      <ContentWrapper>
      <div className=' mt-32 w-full h-full'>
        <h1 className=' font-montserrat text-white font-bold text-lg text-center capitalize'>Search Results For "{selectedMuscleGroup}"</h1>
        <div className='mt-4 flex flex-col justify-between items-start gap-5 mb-10'>
        <AllExercises exercises={exercises?.data} equipments={equipments?.data}/> 
        </div>
      </div>
      </ContentWrapper>
    </section>
    </>
  )
}

export default Exercises