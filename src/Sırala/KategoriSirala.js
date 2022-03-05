import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';
import {kategoriIcons} from '../icon'
import slugify from 'react-slugify';

import { getApiModels } from '../Models/ApiModels';

const KategoriSirala =()=>{

    const [data, setData]=useState([""]);
    
    const getCategoriesApi = async() => {
        try{
            const res = await getApiModels("categories");
            if(res.status) {
                setData(res.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getCategoriesApi()
    },[])


    return(
        <div className='kategoriler-sirala'>
            {data.map((categories) => (
                <NavLink to={"/categories/"+categories.id+"-"+slugify(categories.name)}>
                    <div className="kategoriler-container">
                        <div className='kategoriler-ust'>
                            <InlineSVG src={kategoriIcons[categories.iconname]}></InlineSVG>
                        </div>
                        <div className='kategoriler-alt'>{categories.name}</div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}

export default KategoriSirala;