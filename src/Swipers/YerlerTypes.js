import React, {useEffect, useState, useContext} from 'react'
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
import { getApiModels } from '../Models/ApiModels';

const YerlerTypes =(props)=>{    

    var {city, setCity} = useContext(AppContext);


    const [data, setData]=useState([]);

    const url="places?sehir.plate="+city.city+"&vitrin=true&type="+props.type
    const getYerlerTypesApi = async() => {
        try{
            const res = await getApiModels(url);
            if(res.status) {
                setData(res.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getYerlerTypesApi()
    },[])


    return(
        (data.length !== 0)?(
            <div className='yerler-swiper yerler-types'>
        <div className="yerler-types-baslik-container">
            <div className="yerler-types-baslik">
                {props.name}
            </div>
        </div>
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiperYerler">
            {data.map((places) => (
                
                    <SwiperSlide key={places.id}>
                    
                    <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                    {(places.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                ):(
                        <>
                        <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                        </>
                )}
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
        ):(
            <></>
        )
    )
}

export default YerlerTypes;