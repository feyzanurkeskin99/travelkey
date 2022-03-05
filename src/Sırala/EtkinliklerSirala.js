import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';

const EtkinliklerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);

const [data, setData]=useState([""]);
const url="events?sehir.plate="+city.city
const getEventApi = async() => {
    try{
        const res = await getApiModels(url);
        if(res.status) {
            setData(res.data)
        }
    }catch(e){
        alert(e.message)
    }
}

useEffect(() => {
    getEventApi()
},[])

return(


    <div className='etkinlikler-sirala'>
        {data.map((events) => (
            <NavLink to={"/events/"+events.id+"-"+slugify(events.name)}>
                <div className='etkinlikler-satir'>
                    <div className="tarih">
                        <h2>{new Date(events.datetime).getDate()}</h2>
                        <div className="tarih-ay-yil">
                            <h4>{new Date(events.datetime).toLocaleString('tr', {month:"short"})}</h4>
                            <h3>{new Date(events.datetime).getFullYear()}</h3>
                        </div>
                    </div>
                    <h2 className="etkinlik-adi">{events.name}</h2>
                </div>
            </NavLink>
        ))}
    </div>
)
}

export default EtkinliklerSirala;