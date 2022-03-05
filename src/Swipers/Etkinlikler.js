import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';

const Etkinlikler =()=>{
    
    var {city, setCity} = useContext(AppContext);
    
    const [data, setData]=useState([""]);
    const url="events?sehir.plate="+city.city+"&vitrin=true"
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
        (data.length !== 0) ? (
            <div className='etkinlikler'>
            <NavLink to='/etkinlikler-sirala'>
                    <TumElemanlar name='Tüm Etkinlikler'></TumElemanlar>
            </NavLink>

            {data.map((events) => (
                <NavLink to={"/events/"+events.id+"-"+slugify(events.name)}>
                    <div key={events.id} className='etkinlikler-satir'>
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
        ):(
            <></>
        )
        
    )
}

export default Etkinlikler;