import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import {NavLink, useParams} from 'react-router-dom';
import NotFound from '../Components/NotFound';
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { kategoriIcons } from '../icon';
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';

import { AppContext } from '../Components/Context'



const YerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);

const [data, setData]=useState([]);

const url="places?sehir.plate="+city.city
const getYerlerApi = async() => {
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
    getYerlerApi()
},[])

let { id } = useParams();
if (!id) {
    return null;
}

    return(
        <div className='yerler-sirala'>
        {console.log(id.split("-")[0] === "all")}
        {id.split("-")[0] === "all" ? (
            <>
            {data.map((places) => (
                <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                    <div className="yerler-container">
                    {(places.image === null ) ? (
                            <>
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                            </>
                    ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                            </>
                    )}
                    <div className="yerler-sirala-kategori">
                                <div className="yerler-sirala-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                </div>
                                <div className="yerler-sirala-kategori-adi">
                                    {places.category.name}
                                </div>
                            </div>
                            <div className="yerler-sirala-baslik">{places.name}</div>
                    </div>
                </NavLink>
            ))}
            </>
        ):(
            <>
            {data.filter(filter => filter.category.name === id.split("-")[1]).map((places) => (
                <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                    <div className="yerler-container">
                    {(places.image === null ) ? (
                            <>
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                            </>
                    ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                            </>
                    )}
                    <div className="yerler-sirala-kategori">
                                <div className="yerler-sirala-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                </div>
                                <div className="yerler-sirala-kategori-adi">
                                    {places.category.name}
                                </div>
                            </div>
                            <div className="yerler-sirala-baslik">{places.name}</div>
                    </div>
                </NavLink>
            ))}
            </>
        )}
        

        </div>
    )
}
export default YerlerSirala;