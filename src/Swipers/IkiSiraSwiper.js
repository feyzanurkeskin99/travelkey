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

const IkiSiraSwiper =()=>{
    var {city, setCity} = useContext(AppContext);
    const options = {};
    var arr=[]
    const {
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/categories?sehir_anavitrins.plate='+city.city, options, []);
    //https://seyyahpanel.kod8.app/places?sehir.plate=81&category.anavitrin_contains=81 url 'i denenecek
    const {
        sehirId = [],
    } = useFetch('https://seyyahpanel.kod8.app/sehirs?plate='+city.city, options, []);
    
    return(
        <>
        
        {data
        .map((categories) => (
        <div className='iki-sira-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons[categories.iconname]}></InlineSVG>
                <h2 className='background-baslik'>{categories.name}</h2>
            </div>
                <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiper4">
                    {categories["places"]
                    .reduce((previous, current, index, array)=>{
                    return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                    .filter(dizi => dizi.length === 2)
                    .map((placess) => (
                        <SwiperSlide>
                                <NavLink to={"/places?id="+[placess[0]].id+"/"}>
                                    <div className="iki-sira-ust">
                                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                        <div className="iki-sira-ust-baslik">
                                            {placess[0].name}
                                        </div>
                                        
                                    </div>
                                </NavLink>
                                <NavLink to={"/places?id="+[placess[1]].id+"/"}>
                                    <div className="iki-sira-ust">
                                    <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                        <div className="iki-sira-alt-baslik">
                                            {placess[1].name}
                                        </div>
                                    </div>
                                </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
        ))}
        </>
    )
}

export default IkiSiraSwiper;