import React, {useContext, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import KategorilerSwiper2 from '../Swipers/KategorilerSwiper2'
import {havaIcons, conditions} from '../icon'
import InlineSVG from 'svg-inline-react';
import axios from 'axios';

import { AppContext } from './Context'

const HavaDurumu =()=>{
    
	var {city, setCity} = useContext(AppContext);
    
    const [data, setData]=useState([]);
    const [dataDerece, setDataDerece]=useState([]);
    var durum=conditions;
    

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://service.kod8.app/data/hava/hava_trt.json')
            .then(response => {
                setData(response.data[city.city].durum[0].condition);
                setDataDerece(response.data[city.city].durum[0]);
            })
        }
        fetchData();
    },[]);

        return(
            <div className='hava-durumu'>
                <div>
                    <h2 className='hava-durumu-derece'>{Math.round(dataDerece.now)}°</h2>
                    <h4 className='hava-durumu-sehir'>{city.cityName}</h4>
                    <h2 className='hava-durumu-durum'>{data}</h2>
                </div>
                <div className='hava-durumu-icon'>
                {(durum[data] !== undefined) ? (
                    <InlineSVG src={havaIcons[durum[data].general].icon}/>
                ):(
                    <InlineSVG src={havaIcons.cloudy.icon}/>
                )}
                </div>
            </div>
        )
}

export default HavaDurumu;