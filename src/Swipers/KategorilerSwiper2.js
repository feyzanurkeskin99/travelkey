import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import {backgroundIcons, kategoriIcons} from '../icon'

import useFetch from 'use-http';

const KategorilerSwiper2 =()=>{
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/categories', options, []);
    
    return(
        <div className='kategoriler-swiper-2'>
         <NavLink to='/kategoriler-sirala'>
            <TumElemanlar name='Tüm Kategoriler'></TumElemanlar>
        </NavLink>
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="mySwiper3">
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.map((categories) => (
                <NavLink to={"/kategori?id="+categories.id+"/"}>
                    <SwiperSlide>
                        <div className='kategoriler-ust'>
                            <InlineSVG src={kategoriIcons[categories.iconname]}></InlineSVG>
                        </div>
                        <div className='kategoriler-alt'>{categories.name}</div>
                    </SwiperSlide>
                </NavLink>
            ))}
        </Swiper>
        </div>
    )
}

export default KategorilerSwiper2;