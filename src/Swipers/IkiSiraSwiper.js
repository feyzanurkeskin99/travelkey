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
import { useQuery, gql } from '@apollo/client' 

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


    
    const KATEGORILERSCROLLING = gql`
    query yerlerTypes {
        yerlertypes:
            sehirs (
                pagination:{page:1, pageSize:100}
            ){
                data {
                attributes {
                    plate
                    name
                    anavitrin_categories{
                    data{
                        id
                        attributes{
                        name
                        iconname
                        places(
                            pagination:{page:1, pageSize:100}
                        ){
                            data{
                            id
                            attributes{
                                name
                                image{
                                data{
                                    id
                                    attributes{
                                    url
                                    }
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                    places{
                    data{
                        id
                        attributes{
                        name
                        image{
                            data{
                            id
                            attributes{
                                url
                            }
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
        }`
    const {loading, error, data} = useQuery(KATEGORILERSCROLLING)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return(
        <>
        {data.yerlertypes.data.filter(element => element.attributes.plate === city.city)
        .map((categories, index) => (
            <>
                {
                    categories.attributes.anavitrin_categories.data.map((anavitrin)=>{
            <div className='iki-sira-swiper' key={index}>     
                <div className='background-icon'>
                    <InlineSVG src={backgroundIcons[anavitrin.attributes.iconname]}></InlineSVG>
                    <h2 className='background-baslik'>{anavitrin.attributes.name}</h2>
                </div>
                <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiper4">
                    <div key={index}>
                        {anavitrin.attributes.places.data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={placess[0].id}>
                                {console.log(anavitrin.attributes.places.data)}
                                    <NavLink to={"/places/"+placess[0].id+"-"+slugify(placess[0].attributes.name)}>
                                         <div className="iki-sira-ust">
                                        {(!placess[0].attributes.image.data.length) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={process.env.REACT_APP_IMG_URL+placess[0].attributes.image.data[0].attributes.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-ust-baslik">
                                                {placess[0].attributes.name}
                                            </div>
                                            
                                        </div>
                                    </NavLink>
                                    <NavLink to={"/places/"+placess[1].id+"-"+slugify(placess[1].attributes.name)}>
                                        <div className="iki-sira-ust">
                                        {(!placess[1].attributes.image.data.length) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={process.env.REACT_APP_IMG_URL+placess[1].attributes.image.data[0].attributes.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-alt-baslik">
                                                {placess[1].attributes.name}
                                            </div>
                                        </div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {anavitrin.attributes.places.data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={placess[0].id}>
                                    <NavLink to={"/places/"+placess[0].id+"-"+slugify(placess[0].attributes.name)}>
                                        <div className="iki-sira-ust">
                                        {(!placess[0].attributes.image.data.length) ? (
                                                <>
                                                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                                </>
                                        ):(
                                                <>
                                                <img src={process.env.REACT_APP_IMG_URL+placess[0].attributes.image.data[0].attributes.url} />
                                                </>
                                        )}
                                            <div className="iki-sira-ust-baslik">
                                                {placess[0].attributes.name}
                                            </div>
                                            
                                        </div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        </div>
                    </Swiper>
        </div>

        })
                }
            </>
        ))}
        </>
    )
}

export default IkiSiraSwiper;