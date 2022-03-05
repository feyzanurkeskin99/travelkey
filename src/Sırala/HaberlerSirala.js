import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import { NavLink } from 'react-router-dom';
import slugify from 'react-slugify';
import backgroundImage from '../images/news.jpg'
import { getApiModels } from '../Models/ApiModels';


const HaberlerSirala =()=>{
    var {city, setCity} = useContext(AppContext);
    
    const [data, setData]=useState([""]);
    const url="blogs?sehir.plate="+city.city
    const getBlogApi = async() => {
        try{
            const res = await getApiModels(url);
            if(res.status) {
                setData(res.data)
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getBlogApi()
    },[])



    return(
        <div className='haberler-sirala'>
            {data.map((blogs) => (
                <NavLink to={"/blogs/"+blogs.id+"-"+slugify(blogs.title)}>
                    <div className="haberler-container">
                        <div className='haberler-ust'>
                            <img src={backgroundImage} />
                            <div className="haberler-sirala-tarih">{new Date(blogs.datetime).toLocaleString('tr', {day:"numeric", month:"short"})}</div>
                        </div>
                        <div className='haberler-alt'>
                            <div className="haberler-sirala-baslik">
                                {blogs.title}
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}

        </div>
    )
}

export default HaberlerSirala;