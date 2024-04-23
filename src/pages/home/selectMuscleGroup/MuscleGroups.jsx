import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    back,
    cardio,
    chest,
    lowerArms,
    shoulder,
    upperArms,
    neck,
    waist,
    legs
} from "../../../assets/muscleGroups/index"
function MuscleGroups({muscleGroup}) {
  const navigate = useNavigate();
  function handleClick(muscle){
    if(muscle=="upper legs" || muscle=="lower legs"){}
    else{
      navigate(`/${muscle}`);
    }
  }
  return (
    <>
    {
        muscleGroup?.map((muscle)=>(
          <div key={muscle} className={` p-1 rounded-md ${muscle == "upper legs"? "cursor-not-allowed" : muscle == "lower legs"? "cursor-not-allowed" : "cursor-pointer"}`} onClick={()=>handleClick(muscle)}>
            <div className='h-[350px] w-[250px] flex flex-col items-center rounded-md overflow-hidden bg-cardColor'>
              <div className='img-box h-[85%] w-full'>
                <img src={muscle=="back"? back : muscle=="cardio"? cardio : muscle=="chest"? chest : muscle=="lower arms"?lowerArms : muscle=="shoulders"? shoulder : muscle=="upper arms"? upperArms : muscle=="waist"?waist : muscle=="neck"? neck : legs} className='h-full w-full object-cover object-center'/>
              </div>
              <div className='text-box w-full h-[15%]'>
                <h1 className={`font-poppins bg-brand font-bold h-full w-full capitalize text-white flex items-center justify-center ${muscle == "lower legs" ? "cursor-not-allowed" : muscle == "upper legs" ? "cursor-not-allowed" : "cursor-pointer"}`}>{muscle}</h1>
              </div>
            </div>
            </div>
        ))
    }
    </>
  )
}

export default MuscleGroups