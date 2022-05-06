import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import {kategoriIcons} from '../icon'
import slugify from 'react-slugify';
import { useQuery, gql } from '@apollo/client' 

import { getApiModels } from '../Models/ApiModels';

const KategoriSirala =()=>{

    const KATEGORILERSIRALA = gql`
    query kategorilerSwiper {
        kategorilersirala:
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
    const {loading, error, data} = useQuery(KATEGORILERSIRALA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return(
        <div className='kategoriler-sirala'>
            {data.kategorilersirala.data.map((categories) => (
                <NavLink to={"/yerler-sirala/"+categories.id+"-"+slugify(categories.attributes.iconname)}>
                    <div className="kategoriler-container">
                        <div className='kategoriler-ust'>
                            <InlineSVG src={kategoriIcons[categories.attributes.iconname]}></InlineSVG>
                        </div>
                        <div className='kategoriler-alt'>{categories.attributes.name}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default KategoriSirala;