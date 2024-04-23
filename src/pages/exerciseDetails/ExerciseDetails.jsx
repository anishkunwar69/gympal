import React from 'react'
import { useParams } from 'react-router-dom';
import Details from './Details'
import RecomYtVideos from './recommendedYtVideos/RecomYtVideos'

function ExerciseDetails() {
  const {selectedExerciseName} = useParams();
  return (
    <>
    <Details/>
    <RecomYtVideos exerciseName={selectedExerciseName}/>
    </>
  )
}

export default ExerciseDetails