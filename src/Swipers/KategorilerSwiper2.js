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


const KategorilerSwiper2 =()=>{
    
    return(
        <div className='kategoriler-swiper-2'>
         <NavLink to='/kategori-sirala'>
            <TumElemanlar name='Tüm Kategoriler'></TumElemanlar>
        </NavLink>
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="mySwiper3">
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon>
            </div>
            <div className='kategoriler-alt'>DOĞA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon>
            </div>
            <div className='kategoriler-alt'>TARİH</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon>
            </div>
            <div className='kategoriler-alt'>LEZZET</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>KONAKLAMA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>AKTİVİTE</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>EĞLENCE</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>DOĞA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>TARİH</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='kategoriler-ust'>
                <Icon size='huge' name='food'></Icon></div>
            <div className='kategoriler-alt'>LEZZET</div>
        </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default KategorilerSwiper2;