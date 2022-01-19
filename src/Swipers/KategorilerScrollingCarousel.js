import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';


SwiperCore.use([EffectCoverflow]);

const KategorilerScrollingCarousel =()=>{
    
    return(
        <div className='kategoriler-scrolling-carousel'>        
        <NavLink to='/koleksiyonlar-sirala'>
            <TumElemanlar name='Tüm Koleksiyonlar'></TumElemanlar>
        </NavLink>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
          }} className="mySwiper2">
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            </Swiper>
    </div>
    )
}

export default KategorilerScrollingCarousel;