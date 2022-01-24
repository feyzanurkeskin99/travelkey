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



const YerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    const options = {};
const date="";
const {
    loading,
    error,
    data = [],
} = useFetch('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city, options, []);
    
    return(
        <div className='yerler-sirala'>


        {error && <h1>Error!</h1>}
        {loading && <h1>Loading...</h1>}
        {data.map((places) => (
            <NavLink to={"/places?id="+places.id+"/"}>
                <div className="yerler-container">
                <div className="yerler-sirala-kategori">
                            <div className="yerler-sirala-kategori-icon">
                                <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                            </div>
                            <div className="yerler-sirala-kategori-adi">
                                {places.category.name}
                            </div>
                        </div>
                        <div className="yerler-sirala-baslik">{places.name}</div>
                </div>
            </NavLink>
        ))}

            
        </div>
    )
}
export default YerlerSirala;