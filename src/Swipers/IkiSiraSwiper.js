import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';

SwiperCore.use([Pagination]);

const IkiSiraSwiper =(props)=>{
    
    return(
        <div className='iki-sira-swiper'>
            <div className='background-icon'>
                <InlineSVG src={props.backgroundIcon}></InlineSVG>
                <h2 className='background-baslik'>{props.name}</h2>
            </div>
                <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiper4">
                    <SwiperSlide>
                        <div className="iki-sira-ust">Slide 1</div>
                        <div className="iki-sira-alt">Slide 1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="iki-sira-ust">Slide 2</div>
                        <div className="iki-sira-alt">Slide 2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="iki-sira-ust">Slide 3</div>
                        <div className="iki-sira-alt">Slide 3</div>
                    </SwiperSlide>
                </Swiper>
        </div>
    )
}

export default IkiSiraSwiper;