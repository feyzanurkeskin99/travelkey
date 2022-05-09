import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import {useParams} from 'react-router-dom'
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 


SwiperCore.use([FreeMode,Navigation,Thumbs]);

const SemtSwiper =()=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    var {city, setCity} = useContext(AppContext);


    
    const SEMTSWIPER = gql`
    query semtSwiper($city:String!) {
        semtswiper: bundles(
            pagination:{page:1, pageSize:100}
            filters:{
                city:{plate:{eq:$city}}
                isDistrict:{eq:true}
            }
        ){
            data{
                id
                attributes{
                  name
                  isDistrict
                  city {
                    data {
                      id
                      attributes {
                        plate
                      }
                    }
                  }
                }
              }
        }
    }`
    const {loading, error, data} = useQuery(SEMTSWIPER, {
        variables:{city: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

        return(
            <>
                <div className='semt-swiper'>
                <div className="block-baslik">Semtler</div>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiperSemt">
                    
                    {data.semtswiper.data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={Math.random()*1000}>
                                    <NavLink to={"/bundles/"+placess[0].id+"+"+slugify(placess[0].attributes.name)}>
                                        <div className="semt-adi-alt">{placess[0].attributes.name}</div>
                                    </NavLink>
                                    <NavLink to={"/bundles/"+placess[1].id+"+"+slugify(placess[1].attributes.name)}>
                                        <div className="semt-adi-alt">{placess[1].attributes.name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {data.semtswiper.data
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={Math.random()*1000}>
                                    <NavLink to={"/bundles/"+placess[0].id+"/"}>
                                        <div className="semt-adi-alt">{placess[0].attributes.name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </div>
            </>
        )
    
}

export default SemtSwiper;