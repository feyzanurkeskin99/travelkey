import React from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';


const KoleksiyonSirala =()=>{
    
    return(
        <div className='koleksiyonlar-sirala'>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            <div className="koleksiyonlar-container">
                Slide 1
            </div>
            
        </div>
    )
}

export default KoleksiyonSirala;