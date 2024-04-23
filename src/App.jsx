import React from 'react'
import { useEffect , useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Home, Exercises, ExerciseDetails } from "./pages/index"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>
      {/* <div><button onClick={()=>setDarkMode(!darkMode)}>Change Theme</button></div> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:selectedMuscleGroup' element={<Exercises/>}/>
        <Route path='/:selectedMuscleGroup/:selectedExerciseName/:selectedExerciseId/details' element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App