import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { kategoriIcons, backgroundIcons } from '../icon';
import { AppContext } from '../Components/Context'

const RotalarSwiper =()=>{
    var {city, setCity} = useContext(AppContext);
const options = {};
const date="";
const {
    loading,
    error,
    data = [],
} = useFetch('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city+'&vitrin=true&isRoute=true', options, []);
    return(
        <div className='rotalar-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons.routes}></InlineSVG>
                <h2 className='background-baslik'>Rotalar</h2>
            </div>

        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiper3">
        
                {error && <h1>Error!</h1>}
                {loading && <h1>Loading...</h1>}
                {data.map((bundles) => (
                    <SwiperSlide>
                        
                        <img src="https://i12.haber7.net//haber/haber7/photos/2021/42/turkiyedeki_yuruyus_rotalari_nerede_1634557754_4097.jpg" />
                        
                        <NavLink to={"/bundles?id="+bundles.id+"/"}>
                        <div className="rotalar-baslik">
                            {bundles.name}
                        </div>
                        </NavLink>
                    </SwiperSlide>
            ))}
        
        </Swiper>
        </div>
    )
}

export default RotalarSwiper;