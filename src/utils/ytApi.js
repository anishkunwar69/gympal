import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

async function fetchVideosFromYt(exerciseName){
    try{
    const res = await axios.get(BASE_URL,{
        params:{
            q: exerciseName,
            part: 'snippet',
            type: 'video',
            key: import.meta.env.VITE_APP_YT_KEY,
            maxResults:9
        }
    })
    return res;
}catch(err){
    return err;
}
}

export default fetchVideosFromYt;

