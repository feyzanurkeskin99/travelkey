import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { kategoriIcons } from '../icon';
import { AppContext } from '../Components/Context'

const YerlerTypes =(props)=>{    

    var {city, setCity} = useContext(AppContext);
const options = {};
const date="";
const {
    loading,
    error,
    data = [],
} = useFetch('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city+'&vitrin=true&type='+props.type, options, []);
    
    return(
        <div className='yerler-swiper yerler-types'>
        <div className="yerler-types-baslik-container">
            <div className="yerler-types-baslik">
                {props.name}
            </div>
        </div>
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiperYerler">
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.filter(data => data.sehir.plaka === city.city).map((places) => (
                <NavLink to={"/places?id="+places.id+"/"}>
                    <SwiperSlide>
                    <div className="yerler-swiper-kategori">
                                <div className="yerler-swiper-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                </div>
                                <div className="yerler-swiper-kategori-adi">
                                    {places.category.name}
                                </div>
                            </div>
                            <div className="yerler-swiper-baslik">{places.name}</div>
                    </SwiperSlide>
                </NavLink>
            ))}
        </Swiper>
        </div>
    )
}

export default YerlerTypes;