import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import KategorilerSwiper2 from '../Swipers/KategorilerSwiper2'
import {havaIcons, conditions} from '../icon'
import InlineSVG from 'svg-inline-react';
import axios from 'axios';
import { getWeatherApiModels } from '../Models/ApiModels';
import { AppContext } from './Context'

const HavaDurumu =()=>{
    
	var {city, setCity} = useContext(AppContext);
    
    const [data, setData]=useState([]);
    const [dataDerece, setDataDerece]=useState([]);
    const [dataDurum, setDataDurum]=useState("default");
    var durum=conditions;
    

    const getWeatherApi = async() => {
        try{
            const res = await getWeatherApiModels();
            if(res.status) {
                setData(res.data[city.city].durum[0].condition);
                setDataDerece(res.data[city.city].durum[0]);
                setDataDurum(durum[res.data[city.city].durum[0].condition].general);
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getWeatherApi()
    },[])



        return(
            <div className='hava-durumu'>
                <div>
                    <h2 className='hava-durumu-derece'>{Math.round(dataDerece.now)}°</h2>
                    <h4 className='hava-durumu-sehir'>{city.cityName}</h4>
                    <h2 className='hava-durumu-durum'>{data}</h2>
                </div>
                <div className='hava-durumu-icon'>
                {(dataDurum !== undefined || dataDurum !== null || dataDurum !== "default") ? (
                    <InlineSVG src={[havaIcons[dataDurum]][0].icon}/>
                ):(
                    <InlineSVG src={havaIcons.cloudy.icon}/>
                )}
                </div>
            </div>
        )
}

export default HavaDurumu;