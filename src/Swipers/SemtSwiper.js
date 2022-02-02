import React, {useState,useEffect, useContext} from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import InlineSVG from 'svg-inline-react';
import {collectionIcons} from '../icon'
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import {useParams} from 'react-router-dom'
import axios from 'axios';


SwiperCore.use([FreeMode,Navigation,Thumbs]);

const SemtSwiper =()=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city+'&isDistrict=true') //semt olan koleksiyonlar
            .then(response => {
                setData(response.data);
            })
        }
        fetchData();
    },[]);
        return(
            <>
                <div className='semt-swiper'>
                <div className="semt-baslik">Semtler</div>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiperSemt">
                    {data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"-"+slugify(placess[0].name)}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                                    <NavLink to={"/bundles/"+placess[1].id+"-"+slugify(placess[1].name)}>
                                        <div className="semt-adi-alt">{placess[1].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"/"}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </div>
            </>
        )
    
}

export default SemtSwiper;