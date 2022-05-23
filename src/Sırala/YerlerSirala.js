import React, { memo, useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import {NavLink, useParams} from 'react-router-dom';
import NotFound from '../Components/NotFound';
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { kategoriIcons, bookMarkIcon} from '../icon';
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

import { AppContext } from '../Components/Context'

const Yerler =({place, id})=>{
    return(
        <NavLink to={"/places/"+id+"-"+slugify(place.attributes.name)}>
        {/* {console.log(place.attributes.category.data.attributes.name)} */}
    
            <div className="yerler-container">
            {(!place.attributes.image.data.length) ? (
                    <>
                    <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                    </>
            ):(
                    <>                            
                    <img src={process.env.REACT_APP_IMG_URL+place.attributes.image.data[0].attributes.url} />
                    </>
            )}
            <div className="yerler-sirala-kategori justify-between px-5px">
                <div className="flex">
                <div className="yerler-sirala-kategori-icon">
                    <InlineSVG src={kategoriIcons[place.attributes.category.data.attributes.iconname]}></InlineSVG>
                </div>
                <div className="yerler-sirala-kategori-adi">
                    {place.attributes.category.data.attributes.name}
                </div>
                </div>
                <InlineSVG className='fill-birincil-color bg-link-active-before-color rounded-50% flex items-center p-2px' src={bookMarkIcon.bookMark}></InlineSVG>

            </div>
            <div className="yerler-sirala-baslik">{place.attributes.name}</div>
            </div>
        </NavLink>
    )
}
// const loopPlaces=({places})=>{
//     return(
//         for(let i=0 ; i < places.length ; i++){
//             console.log(i)
//         }
//     )
// }
const YerlerSirala =memo(()=>{
    
    var {city, setCity} = useContext(AppContext);
    let { id } = useParams();
    const [sayac, setSayac]=useState(10);

    const YERLERSIRALA = gql`
    query yerlerTypes($sehir:String!) {
        yerlertypes: places(
            pagination:{page:1, pageSize:200}
            filters:{
                sehir:{plate:{eq:$sehir}}
            }
        ){
            data {
                id
                attributes {
                    name
                    type
                    image{
                        data{
                            id
                            attributes{
                            url
                            }
                        }
                    }
                    address
                    email
                    website
                    phone
                    ymapsurl
                    gmapsurl
                    spot
                    body
                    gps
                    category{
                        data{
                            id
                            attributes{
                            name
                            iconname
                            }
                        }
                    }
                }
            }
        }
    }`
    const {loading, error, data} = useQuery(YERLERSIRALA, {
        variables:{sehir: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    const ShowMore =()=>{
        if(sayac+10 < data.yerlertypes.data.length){
            setSayac(sayac+10)
        }else{
            if(sayac+5 < data.yerlertypes.data.length){
                setSayac(sayac+5)
            }else{
                if(sayac+1 < data.yerlertypes.data.length){
                    setSayac(sayac+1)
                }else{
                    setSayac(sayac)
                }
            }
        }
    }


    return(
        <div className='yerler-sirala'>
        {console.log(sayac)}
        {id.split("-")[0] ? (
            id.split("-")[0] === "all" ? (
            data.yerlertypes.data?.filter(place => { return place.attributes ? "place" === place.attributes.type : false;})?.map((places, index) => (                    
                (index < sayac) ? (
                    <Yerler place={places} id={places.id}>
                {/* {console.log(index)} */}
                    {/* {console.log(places.id)} */}
                    {/* <loopPlaces places={places}></loopPlaces> */}
                </Yerler> 
                ):(
                    <></>
                )            
            ))
            
            ):(
            data.yerlertypes.data?.filter(place => { return place.attributes.category.data ? id.split("-")[1] === place.attributes.category.data.attributes.iconname : false;})?.map((places, index) => {
                return (
                    (index < sayac) ? (
                    <Yerler place={places} id={places.id}>
                {/* {console.log(index)} */}
                    {/* {console.log(places.id)} */}
                    {/* <loopPlaces places={places}></loopPlaces> */}
                </Yerler> 
                ):(
                    <></>
                )  
                )
            })
        )
        ) : (
            <></>
        )}
        
        <div className="show-more-container w-full m-15px py-30px pb-0 flex items-center justify-center">
        <div className="show-more p-15px bg-darkgrey-color rounded text-birincil-color font-bold" onClick={ShowMore}>Daha Fazla Göster</div>
        </div>

        </div>
    )
})
export default YerlerSirala;