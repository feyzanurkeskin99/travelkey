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
import { useQuery, gql } from '@apollo/client' 

const YerlerTypes =({Type, name})=>{    

    var {city, setCity} = useContext(AppContext);
    const YERLERTYPES = gql`
    query yerlerTypes($sehir:String!) {
        yerlertypes: places(
            filters:{
                sehir:{plate:{eq:$sehir}}
                vitrin:{eq:true}
                type: {eq: Type}
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
    const {loading, error, data} = useQuery(YERLERTYPES, {
        variables:{sehir: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

 
    return(
        (data.yerlertypes.data.length !== 0)?(
            <div className='yerler-swiper yerler-types'>
        <div className="yerler-types-baslik-container">
            <div className="block-baslik">
                {name}
            </div>
        </div>
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiperYerler">
            {data.yerlertypes.data.map((places) => (
                
                    <SwiperSlide key={places.id}>
                    <NavLink to={"/places/"+places.id+"-"+slugify(places.attributes.name)}>
                    {(places.attributes.image.data === undefined ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                ):(
                        <>
                        <img src={"https://gezgit.kod8.app"+places.attributes.image.data[0].attributes.url} />
                        </>
                )}
                    </NavLink>
                    <div className="yerler-swiper-kategori">
                                <div className="yerler-swiper-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.attributes.category.data.attributes.iconname]}></InlineSVG>
                                </div>
                                <div className="yerler-swiper-kategori-adi">
                                    {places.attributes.category.data.attributes.name}
                                </div>
                            </div>
                            <div className="yerler-swiper-baslik">{places.attributes.name}</div>
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