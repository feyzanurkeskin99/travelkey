import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import {backgroundIcons, kategoriIcons} from '../icon'
import { getApiModels } from '../Models/ApiModels';
import slugify from 'react-slugify';
import { useQuery, gql } from '@apollo/client' 


const KategorilerSwiper2 =()=>{

    const KATEGORILERSWİPER = gql`
    query kategorilerSwiper {
        yerlertypes:
            categories(
                pagination:{page:1, pageSize:100}
            ) {
                data {
                    id
                    attributes {
                        name
                        iconname
                    }
                }
            }
        }`
    const {loading, error, data} = useQuery(KATEGORILERSWİPER)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return(
        <div className='kategoriler-swiper-2'>
         <NavLink to='/kategoriler-sirala'>
         
         <div className="block-baslik-container">
                <div className="block-baslik">Kategoriler</div>
                <TumElemanlar name='Tüm Kategoriler'></TumElemanlar></div>
            
        </NavLink>
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="mySwiper3">

            {data.yerlertypes.data.map((categories) => (
                    <SwiperSlide key={categories.id}>
                        <NavLink to={"/yerler-sirala/"+categories.id+"-"+slugify(categories.attributes.iconname)}>
                            <div className='kategoriler-ust'>
                                <InlineSVG src={kategoriIcons[categories.attributes.iconname]}></InlineSVG>
                            </div>
                            <div className='kategoriler-alt'>{categories.attributes.name}</div>
                        </NavLink>

                    </SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}

export default KategorilerSwiper2;