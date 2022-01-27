import React, {useContext, useEffect, useState} from 'react'
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
import axios from 'axios';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';



const BundlesYerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    
    
    const [dataPlace, setDataPlace]=useState([]);
    const [dataCat, setDataCat]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city)
            .then(response => {
                setDataCat(response.data);
            })
            await axios.get('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city)
            .then(response => {
                setDataPlace(response.data);
            })
        }
        fetchData();
    },[]);
    
    let { id } = useParams();

    if (!id) {
        return <NotFound />;
    }
    return(
        <div className='yerler-sirala'>
        {dataPlace
        .filter(dataFilter => ""+dataFilter.id=== id.split("-")[0])
        .map((places) => (
        places["places"].map((placess)=>(
                
                <NavLink to={"/places/"+placess.id+"-"+slugify(placess.name)}>
                <div className="yerler-container">
                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                <div className="yerler-sirala-kategori">
                {dataCat
                .filter(dataCatFilter => dataCatFilter.id=== placess.id)
                .map((categories)=>(
                    <>
                    <div className="yerler-sirala-kategori-icon">
                                <InlineSVG src={kategoriIcons[categories.category.iconname]}></InlineSVG>
                    </div>
                    <div className="yerler-sirala-kategori-adi">
                        {categories.category.name}
                        
                    </div>
                    </>
                ))}
                </div>
                
                <div className="yerler-sirala-baslik">{placess.name}</div>
                </div>
            </NavLink>
            ))
            
        ))}
        </div>
    )
}
export default BundlesYerlerSirala;