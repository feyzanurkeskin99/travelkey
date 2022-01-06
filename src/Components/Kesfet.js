import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'semantic-ui-react'
import '../ozel.css'
import SwiperCore, {EffectCards,Pagination, Navigation, Scrollbar, A11y} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import giris from '../images/giris.png'
import giris2 from '../images/giris2.png'
import giris3 from '../images/giris3.png'



SwiperCore.use([EffectCards]);


const Kesfet =()=>{
    const data=[
    {
        title:"Road",
        subtitle:"Long road",
        image: {giris}
    },
    {
        title:"Mountains",
        subtitle:"Long mountains",
        image: {giris2}
    },
    {
        title:"Unknown ",
        subtitle:"Long unknown",
        image: {giris3}
    },
    ]
    
        return(
            <div className="ortaalan">
              <>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
              </>
            </div>
        )
}

export default Kesfet;