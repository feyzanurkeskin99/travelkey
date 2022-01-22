import React,{useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import {backgroundIcons} from '../icon'

SwiperCore.use([Pagination]);

const IkiSiraSwiper =(props)=>{
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/categories?sehir_anavitrins.plate='+city.city, options, []);
    //isDistrict=false ile semt olmayan koleksiyonları getirdik
    return(
        <>
        {error && <h1>Error!</h1>}
        {loading && <h1>Loading...</h1>}
        {data
        .map((categories) => (
        <div className='iki-sira-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons[categories.iconname]}></InlineSVG>
                <h2 className='background-baslik'>{categories.name}</h2>
            </div>

                <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiper4">
                    
                {error && <h1>Error!</h1>}
                {loading && <h1>Loading...</h1>}
                {categories["places"].map((placess)=>(
                <NavLink to={"/places?="+placess.id+"/"}>
                    <SwiperSlide>
                        <div className="iki-sira-ust">{placess.name}</div>
                        <div className="iki-sira-alt">{placess.name}</div>
                    </SwiperSlide>
                </NavLink>
                ))}
                </Swiper>
        </div>
        ))}
        </>







    )
}

export default IkiSiraSwiper;