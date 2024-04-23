import React from 'react'
import { useNavigate } from 'react-router-dom';
function AllExercises({exercises,equipments}) {
    const navigation = useNavigate();
    function handleClick(selectedMuscleGroup,selectedExerciseName,selectedExerciseId){
        navigation(`/${selectedMuscleGroup}/${selectedExerciseName}/${selectedExerciseId}/details`);
    }
  return (
    <>
    {
        equipments?.map((equipment)=>{
            const availableExercises = exercises?.filter((exercise)=>exercise.equipment == equipment);
            if(availableExercises?.length>0){
                
                return(
                    <div className='mainDiv w-full' key={equipment}>
                        <h1 className='mt-2 font-poppins text-lg font-medium text-center text-white capitalize'>Exercises With {equipment}</h1>
                        <div className='w-full flex gap-x-2.5 flex-wrap justify-center items-center'>
                            {
                                availableExercises?.map((exercise)=>(
                                    <div key={exercise.id} className=' rounded-md flex flex-col my-4 h-[320px] w-[250px] overflow-hidden cursor-pointer' onClick={()=>handleClick(exercise.bodyPart,exercise.name,exercise.id)}>
                                        <div className='imgBox h-[80%] w-full'>
                                            <img src={exercise.gifUrl} className='h-full w-full object-cover object-center' />
                                        </div>
                                        <div className='textBox h-[20%] bg-brand overflow-hidden w-full flex justify-center items-center capitalize p-2'>
                                            <h1 className='font-medium font-poppins text-white my-3'>{exercise.name}</h1>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                    </div>
                )
            }
        })
    }
    </>
  )
}

export default AllExercises