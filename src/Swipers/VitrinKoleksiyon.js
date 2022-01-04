import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import '../ozel.css'
import SwiperCore, {EffectCards} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'


SwiperCore.use([EffectCards]);

const VitrinKoleksiyon =()=>{
    
        return(
              <>
              <div className='all-collections-container'>
                <div className='all-collections'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="7" r="4" opacity=".35"></circle><path d="M15,3c-1.105,0-2,0.895-2,2v4c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H15z"></path><path d="M10,21H4c-0.347,0-0.668-0.18-0.851-0.475s-0.199-0.663-0.044-0.973l3-6c0.339-0.678,1.45-0.678,1.789,0l3,6	c0.155,0.31,0.138,0.678-0.044,0.973S10.347,21,10,21z"></path><path d="M18.536,21h-4.072c-0.433,0-0.817-0.279-0.951-0.69l-1.259-3.873	c-0.134-0.412,0.013-0.864,0.363-1.118l3.295-2.394c0.351-0.256,0.825-0.256,1.176,0l3.295,2.394	c0.351,0.254,0.497,0.706,0.363,1.118l-1.259,3.873C19.353,20.721,18.969,21,18.536,21z" opacity=".35"></path></svg>
                    <span>Tüm Koleksiyonlar</span>
                </div>
              </div>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
              </>
        
        )
}

export default VitrinKoleksiyon;