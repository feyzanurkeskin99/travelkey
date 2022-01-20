import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'


const Haberler =()=>{
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/blogs?sehir.plate='+city.city, options, []);
    
    return(
        <div className='haberler-swiper'>
        <NavLink to='/haberler-sirala'>
            <TumElemanlar name='Tüm Haberler'></TumElemanlar>
        </NavLink>
        
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="haberler">
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.map((blogs) => (
                <NavLink to={"/blogs?="+blogs.id+"/"}>
                    <SwiperSlide key={blogs.id}>
                            <div className='haberler-ust'>
                                <div className="haberler-swiper-tarih">{new Date(blogs.datetime).toLocaleString('tr', {day:"numeric", month:"short"})}</div>
                            </div>
                            <div className='haberler-alt'>
                                <div className="haberler-swiper-baslik">
                                    {blogs.title}
                                </div>
                            </div>
                    </SwiperSlide>
                </NavLink>
            ))}

            
        </Swiper>
        </div>
    )
}

export default Haberler;