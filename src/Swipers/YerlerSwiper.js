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
import slugify from 'react-slugify';

const YerlerSwiper =(props)=>{    

    var {city, setCity} = useContext(AppContext);
const options = {};
const date="";
const {
    loading,
    error,
    data = [],
} = useFetch('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city+'&vitrin=true&type=place', options, []);
    
    return(
        <div className='yerler-swiper'>
            <NavLink to='/yerler-sirala'>
                <TumElemanlar name='Tüm Yerler'></TumElemanlar>
            </NavLink>
        
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} slidesPerView={'auto'} grabCursor={true} className="mySwiperYerler">
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.map((places) => (
                
                    <SwiperSlide key={places.id}>
                    <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                    <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                    
                    </NavLink>
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
                
            ))}
        </Swiper>
        </div>
    )
}

export default YerlerSwiper;