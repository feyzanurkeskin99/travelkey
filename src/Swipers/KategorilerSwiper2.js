import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import {backgroundIcons, kategoriIcons} from '../icon'
import { getApiModels } from '../Models/ApiModels';


const KategorilerSwiper2 =()=>{
    const [data, setData]=useState([""]);
    
    const getCategoriesApi = async() => {
        try{
            const res = await getApiModels("categories");
            if(res.status) {
                setData(res.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getCategoriesApi()
    },[])


    return(
        <div className='kategoriler-swiper-2'>
         <NavLink to='/kategoriler-sirala'>
         
         <div className="block-baslik-container">
                <div className="block-baslik">Kategoriler</div>
                <TumElemanlar name='Tüm Kategoriler'></TumElemanlar></div>
            
        </NavLink>
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="mySwiper3">

            {data.map((categories) => (
                
                    <SwiperSlide key={categories.id}>
                            <div className='kategoriler-ust'>
                                <InlineSVG src={kategoriIcons[categories.iconname]}></InlineSVG>
                            </div>
                        <div className='kategoriler-alt'>{categories.name}</div>
                    </SwiperSlide>
                
            ))}
        </Swiper>
        </div>
    )
}

export default KategorilerSwiper2;