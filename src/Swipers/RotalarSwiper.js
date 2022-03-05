import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { kategoriIcons, backgroundIcons } from '../icon';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';

const RotalarSwiper =()=>{
    var {city, setCity} = useContext(AppContext);


const [data, setData]=useState([""]);
const url="bundles?city.plate="+city.city+"&vitrin=true&isRoute=true"
const getRouteApi = async() => {
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
    getRouteApi()
},[])


    return(
        <div className='rotalar-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons.routes}></InlineSVG>
                <h2 className='background-baslik'>Rotalar</h2>
            </div>

        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiper3">
        
                {data.map((bundles) => (
                    <SwiperSlide key={bundles.id}>
                        
                        <img src="https://i12.haber7.net//haber/haber7/photos/2021/42/turkiyedeki_yuruyus_rotalari_nerede_1634557754_4097.jpg" />
                        
                        <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.name)}>
                        <div className="rotalar-baslik">
                            {bundles.name}
                        </div>
                        </NavLink>
                    </SwiperSlide>
            ))}
        
        </Swiper>
        </div>
    )
}

export default RotalarSwiper;