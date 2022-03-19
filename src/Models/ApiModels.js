import axios from 'axios';


export const getApiModels = async(url)=>{//genel url'den çekilecek
    try{
        const res = await axios.get(process.env.REACT_APP_URL+url);
        return {status :true, data : res.data}
    }catch(e){
        return {status : false, message: e}
    }
}

export const getWeatherApiModels = async()=>{
    try{
        const res = await axios.get(process.env.REACT_APP_WEATHER_URL);
        return {status :true, data : res.data}
    }catch(e){
        return {status : false, message: e}
    }
}