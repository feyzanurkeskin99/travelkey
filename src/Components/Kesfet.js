import React from 'react'
import ReactDOM from 'react-dom'
// import '../ozel.css'
import '../Styles/output.css'
import SwiperCore, {EffectCards,Pagination, Navigation, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import KategorilerScrollingCarousel from '../Swipers/KategorilerScrollingCarousel'
import KategorilerSwiper2 from '../Swipers/KategorilerSwiper2'
import RotalarSwiper from '../Swipers/RotalarSwiper'
import Haberler from '../Swipers/Haberler'
import IkiSiraSwiper from '../Swipers/IkiSiraSwiper'
import Etkinlikler from '../Swipers/Etkinlikler'
import YerlerTypes from '../Swipers/YerlerTypes'



SwiperCore.use([EffectCards]);


const Kesfet =()=>{
    
        return(
            <div className="ortaalan">
                <KategorilerSwiper2></KategorilerSwiper2>
                <Haberler></Haberler>
                <RotalarSwiper></RotalarSwiper>
                <YerlerTypes name="Aktiviteler" type="activity"></YerlerTypes>
                <YerlerTypes name="Neyi Meşhur?" type="iconic"></YerlerTypes>
                <KategorilerScrollingCarousel></KategorilerScrollingCarousel>
                <IkiSiraSwiper></IkiSiraSwiper>
                <Etkinlikler></Etkinlikler>
            </div>
        )
}

export default Kesfet;