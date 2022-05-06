import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import {collectionIcons} from '../icon'
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

const KoleksiyonSirala =()=>{
    var {city, setCity} = useContext(AppContext);




    const BUNDLES = gql`
    query Bundles($city:String!) {
        bundles: bundles(
            pagination:{page:1, pageSize:100}
            filters:{
                isDistrict:{eq:false}
                city:{plate:{eq:$city}}
            }
        ){
            data{
                id
                attributes {
                    name
                    image{
                        data
                        {
                            id
                            attributes{
                                url
                            }
                        }
                    }
                }
            }
        }
    }`
    const {loading, error, data} = useQuery(BUNDLES, {
        variables:{city: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    return(
        <div className='koleksiyonlar-sirala'>
            {data.bundles.data.map((bundles) => (
                
                    <div className="koleksiyonlar-container">
                        <div className="koleksiyon-sirala-ust">
                        {(!bundles.attributes.image.data.length ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={process.env.REACT_APP_IMG_URL+bundles.attributes.image.data[0].attributes.url} />
                            </>
                        )}
                        </div>
                        <div className="koleksiyon-sirala-alt">
                            <div className="koleksiyon-sirala-alt-baslik">
                                {bundles.attributes.name}
                            </div>
                            <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.attributes.name)}>
                            <div className="koleksiyon-sirala-buton">
                                <InlineSVG src={collectionIcons.arrow}></InlineSVG>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                
            ))}

        </div>
    )
}

export default KoleksiyonSirala;