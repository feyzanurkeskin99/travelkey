import React, {useContext, useEffect, useState} from 'react'
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
import axios from 'axios';
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';

SwiperCore.use([Pagination]);

const IkiSiraSwiper =()=>{
    var {city, setCity} = useContext(AppContext);
    
    const [dataCity, setDataCity]=useState([]);
    const [dataCat, setDataCat]=useState([]);


    const getApi = async() => {
        try{
            const resCat = await getApiModels("categories?sehir_anavitrins.plate="+city.city);
            const resCity = await getApiModels("sehirs?plate="+city.city);
            
            if(resCat.status && resCity.status) {
                setDataCat(resCat.data)
                setDataCity(resCity.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getApi()
    },[])


    return(
        <>
        {dataCat
        .map((categories, index) => (
        <div className='iki-sira-swiper' key={index}>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons[categories.iconname]}></InlineSVG>
                <h2 className='background-baslik'>{categories.name}</h2>
            </div>
                <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiper4">
                    <>
                    {dataCity.map((deneme, index)=>(
                        <div key={index}>
                        {categories["places"]
                        .filter(dizi => dizi.sehir===deneme.id)
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/places/"+placess[0].id+"-"+slugify(placess[0].name)}>
                                        <div className="iki-sira-ust">
                                        {(placess[0].image === null ) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={"https://seyyahpanel.kod8.app"+placess[0].image.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-ust-baslik">
                                                {placess[0].name}
                                            </div>
                                            
                                        </div>
                                    </NavLink>
                                    <NavLink to={"/places/"+placess[1].id+"-"+slugify(placess[1].name)}>
                                        <div className="iki-sira-ust">
                                        {(placess[1].image === null ) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={"https://seyyahpanel.kod8.app"+placess[1].image.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-alt-baslik">
                                                {placess[1].name}
                                            </div>
                                        </div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {categories["places"]
                        .filter(dizi => dizi.sehir===deneme.id)
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/places/"+placess[0].id+"-"+slugify(placess[0].name)}>
                                        <div className="iki-sira-ust">
                                        {(placess[0].image === null ) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={"https://seyyahpanel.kod8.app"+placess[0].image.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-ust-baslik">
                                                {placess[0].name}
                                            </div>
                                            
                                        </div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        </div>
                    ))}
                    </>
                    
                </Swiper>
        </div>
        ))}
        </>
    )
}

export default IkiSiraSwiper;