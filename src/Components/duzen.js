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





import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import {NavLink, useParams} from 'react-router-dom';
import NotFound from '../Components/NotFound';
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { kategoriIcons } from '../icon';
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

import { AppContext } from '../Components/Context'



const YerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    let { id } = useParams();
    var {city, setCity} = useContext(AppContext);

    const YERLERSIRALA = gql`
    query yerlerTypes($sehir:String!) {
        yerlertypes: places(
            pagination:{page:1, pageSize:200}
            filters:{
                sehir:{plate:{eq:$sehir}}
            }
        ){
            data {
                id
                attributes {
                    name
                    image{
                        data{
                            id
                            attributes{
                            url
                            }
                        }
                    }
                    address
                    email
                    website
                    phone
                    ymapsurl
                    gmapsurl
                    spot
                    body
                    gps
                    category{
                        data{
                            id
                            attributes{
                            name
                            iconname
                            }
                        }
                    }
            }
        }
    }
    }`
    const {loading, error, data} = useQuery(YERLERSIRALA, {
        variables:{sehir: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return(
        <div className='yerler-sirala'>
        {console.log(id.split("-")[0])} 
        {console.log(data.yerlertypes.data)}
        {id.split("-")[0] === "all" ? (
            data.yerlertypes.data.map((places) => (
                <NavLink to={"/places/"+places.id+"-"+slugify(places.attributes.name)}>
                    <div className="yerler-container">
                    {(!places.attributes.image.data.length) ? (
                            <>
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                            </>
                    ):(
                            <>
                            </>
                    )}
                    <div className="yerler-sirala-kategori">
                        <div className="yerler-sirala-kategori-icon">
                            <InlineSVG src={kategoriIcons[places.attributes.category.data.attributes.iconname]}></InlineSVG>
                        </div>
                        <div className="yerler-sirala-kategori-adi">
                            {places.attributes.category.data.attributes.name}
                        </div>
                    </div>
                    <div className="yerler-sirala-baslik">{places.attributes.name}</div>
                    </div>
                </NavLink>
            ))
        ):(
            data.yerlertypes.data.filter(filter => filter.attributes.category.iconname === id.split("-")[1]).map((places) => (
                <NavLink to={"/places/"+places.id+"-"+slugify(places.attributes.name)}>
                    <div className="yerler-container">
                    {(!places.attributes.image.data.length) ? (
                            <>
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                            </>
                    ):(
                            <>
                            <img src={process.env.REACT_APP_IMG_URL+places.attributes.image.data[0].attributes.url} />
                            </>
                    )}
                    <div className="yerler-sirala-kategori">
                        <div className="yerler-sirala-kategori-icon">
                            <InlineSVG src={kategoriIcons[places.attributes.category.data.attributes.iconname]}></InlineSVG>
                        </div>
                        <div className="yerler-sirala-kategori-adi">
                            {places.attributes.category.data.attributes.name}
                        </div>
                    </div>
                    <div className="yerler-sirala-baslik">{places.attributes.name}</div>
                    </div>
                </NavLink>
            ))
        )}
        

        </div>
    )
}
export default YerlerSirala;