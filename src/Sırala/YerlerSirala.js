import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';


const YerlerSirala =()=>{
    
    return(
        <div className='yerler-sirala'>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
            <div className="yerler-container">
                Slide 1
            </div>
        </div>
    )
}

export default YerlerSirala;