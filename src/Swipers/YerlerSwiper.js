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
import { bookMarkIcon, kategoriIcons } from '../icon';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { useQuery, gql } from '@apollo/client' 

const YerlerSwiper =(props)=>{    

    var {city, setCity} = useContext(AppContext);

    const url="places?sehir.plate="+city.city+"&vitrin=true&type=place"//semt olan koleksiyonlar

    const YERLERSWIPER = gql`
    query yerlerSwiper($sehir:String!) {
        yerlerswiper: places(
            pagination:{page:1, pageSize:100}
            filters:{
                sehir:{plate:{eq:$sehir}}
                vitrin:{eq:true}
                type:{eq:"place"}
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
    const {loading, error, data} = useQuery(YERLERSWIPER, {
        variables:{sehir: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>



    return(
        <div className='yerler-swiper'>
            <NavLink to='/yerler-sirala/all'>
            
            <div className="block-baslik-container">
                <div className="block-baslik">Yerler</div>
                <TumElemanlar name='Tüm Yerler'></TumElemanlar></div>
                
            </NavLink>
        
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="mySwiperYerler">
            {data.yerlerswiper.data.map((places, index) => (
                
                    <SwiperSlide key={places.id}>            
                    {/* {console.log(places.attributes.image.data[0].attributes)} */}
                    
                    <NavLink to={"/places/"+places.id+"-"+slugify(places.attributes.name)}>
                    {(places.attributes.image.data[0].attributes.url === null || places.attributes.image.data[0].attributes.url === undefined || places.attributes.image.data===[]) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                    ):(
                        <>
                        <img src={"https://gezgit.kod8.app/"+places.attributes.image.data[0].attributes.url} />
                        </>
                    )}
                    
                    </NavLink>
                    <div className="yerler-swiper-kategori justify-between px-5px">
                                <div className='flex'>
                                <div className="yerler-swiper-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.attributes.category.data.attributes.iconname]}></InlineSVG>
                                </div>
                                
                                <div className="yerler-swiper-kategori-adi">
                                    {places.attributes.category.data.attributes.name}
                                </div>
                                </div>
                                <InlineSVG className='fill-birincil-color bg-link-active-before-color rounded-50% flex items-center p-2px' src={bookMarkIcon.bookMark}></InlineSVG>
                    </div>
                    <div className="yerler-swiper-baslik">{places.attributes.name}</div>
                    </SwiperSlide>
                
            ))}
        </Swiper>
        </div>
    )
}

export default YerlerSwiper;