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


const Haberler =()=>{
    
    return(
        <div className='haberler-swiper'>
        <NavLink to='/haber-sirala'>
            <TumElemanlar name='Tüm Haberler'></TumElemanlar>
        </NavLink>
        
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="haberler">
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak
            </div>
            <div className='haberler-alt'>DOĞA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak
            </div>
            <div className='haberler-alt'>TARİH</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak
            </div>
            <div className='haberler-alt'>LEZZET</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>KONAKLAMA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>AKTİVİTE</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>EĞLENCE</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>DOĞA</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>TARİH</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='haberler-ust'>
                9 Ocak</div>
            <div className='haberler-alt'>LEZZET</div>
        </SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Haberler;