import axios from 'axios';

const BASE_URL="https://exercisedb.p.rapidapi.com/exercises";
const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_APIEKY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }

async function fetchDataFromExerciseDbApi(url,params){
    try{
    const data = await axios.get(BASE_URL+url,{
        headers,
        params
    })
    return data;
    }catch(error){
    console.log(error.message);
    }
}

export default fetchDataFromExerciseDbApi;