import React, {useContext} from 'react'
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

const KategoriSirala =()=>{
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/categories', options, []);
    return(
        <div className='kategoriler-sirala'>
            
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
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