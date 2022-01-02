import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import './ozel.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const VitrinKoleksiyon =()=>{
    
        return(
            <div className="ortaalan">
              <>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
              </>
            </div>
        )
}

export default VitrinKoleksiyon;