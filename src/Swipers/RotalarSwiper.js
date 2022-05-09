import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { kategoriIcons, backgroundIcons } from '../icon';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

const RotalarSwiper =()=>{
    var {city, setCity} = useContext(AppContext);

const ROTALARSWIPER = gql`
query rotalarSwiper($city:String!) {
    rotalarswiper: bundles(
        pagination:{page:1, pageSize:100}
        filters:{
            city:{plate:{eq:$city}}
            vitrin:{eq:true}
            isRoute:{eq:true}
        }
    ){
        data{
            id
            attributes{
              name
              image{
                data{
                  id
                  attributes{
                    url
                  }
                }
              }
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
const {loading, error, data} = useQuery(ROTALARSWIPER, {
    variables:{city: city.city}
})
if (loading) return <p>Loading...</p>
if (error) return <p>Error...</p>


    return(
        
        <div className='rotalar-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons.routes}></InlineSVG>
                <h2 className='background-baslik'>Rotalar</h2>
            </div>

        <Swiper centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} grabCursor={true} className="mySwiper3">
        
                {data.rotalarswiper.data.map((bundles) => (
                    <SwiperSlide key={Math.random()*1000}>
                        <img src={bundles.attributes.image.data.url === undefined ?                             
                        ("https://i12.haber7.net//haber/haber7/photos/2021/42/turkiyedeki_yuruyus_rotalari_nerede_1634557754_4097.jpg") 
                        : 
                        (bundles.attributes.image.data.url)} />
                        
                        <NavLink to={"/bundles/"+bundles.id+"+"+slugify(bundles.attributes.name)}>
                        <div className="rotalar-baslik">
                            {bundles.attributes.name}
                        </div>
                        </NavLink>
                    </SwiperSlide>
            ))}
        
        </Swiper>
        </div>
    )
}

export default RotalarSwiper;