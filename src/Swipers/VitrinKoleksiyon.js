import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import '../ozel.css'
import SwiperCore, {EffectCards} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar'

SwiperCore.use([EffectCards]);

const VitrinKoleksiyon =()=>{
    
        return(
              <div className='vitrin-koleksiyon'>
              <TumElemanlar name='Tüm Vitrindekiler'></TumElemanlar>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
              </div>
        
        )
}

export default VitrinKoleksiyon;