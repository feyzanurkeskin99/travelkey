import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import backgroundImage from '../images/news.jpg'
import { getApiModels } from '../Models/ApiModels';


const Haberler =()=>{
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
        (data.length !==0)?(
            <div className='haberler-swiper'>
        <NavLink to='/haberler-sirala'>
            <TumElemanlar name='Tüm Haberler'></TumElemanlar>
        </NavLink>
        
        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="haberler">
            {data.map((blogs, index) => (
                    
                    <SwiperSlide key={index}>
                        <NavLink  key={blogs.id} to={"/blogs/"+blogs.id+"-"+slugify(blogs.title)}>
                            <div className='haberler-ust'>
                                <img src={backgroundImage} />
                                <div className="haberler-swiper-tarih">{new Date(blogs.datetime).toLocaleString('tr', {day:"numeric", month:"short"})}</div>
                            </div>
                        </NavLink>
                            <div className='haberler-alt'>
                                <div className="haberler-swiper-baslik">
                                    {blogs.title}
                                </div>
                            </div>
                    </SwiperSlide>
                
            ))}

        </Swiper>
        </div>
        ):(
            <></>
        )
    )
}

export default Haberler;