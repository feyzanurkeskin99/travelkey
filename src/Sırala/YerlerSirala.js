import React, { memo, useContext} from 'react'
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
import { kategoriIcons } from '../icon';
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

import { AppContext } from '../Components/Context'

const Yerler =({place, id})=>{
    return(
        <NavLink to={"/places/"+id+"-"+slugify(place.attributes.name)}>
        {console.log(place.attributes.category.data.attributes.name)}
    
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
            <div className="yerler-sirala-kategori">
                <div className="yerler-sirala-kategori-icon">
                    <InlineSVG src={kategoriIcons[place.attributes.category.data.attributes.iconname]}></InlineSVG>
                </div>
                <div className="yerler-sirala-kategori-adi">
                    {place.attributes.category.data.attributes.name}
                </div>
            </div>
            <div className="yerler-sirala-baslik">{place.attributes.name}</div>
            </div>
        </NavLink>
    )
}

const YerlerSirala =memo(()=>{
    
    var {city, setCity} = useContext(AppContext);
    let { id } = useParams();
    var {city, setCity} = useContext(AppContext);

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



    return(
        <div className='yerler-sirala'>
        {console.log(data.yerlertypes.data[5].attributes.category.data.attributes.iconname)}
        {id.split("-")[0] === "all" ? (
            data.yerlertypes.data.map((places) => {
                return (
                    
                <Yerler place={places} id={id.split("-")[0]}>
                    {console.log("deneme")}
                </Yerler>
                )
            })
        ):(
            data.yerlertypes.data.filter(filter => id.split("-")[1] === filter.attributes.category.data.attributes.iconname).map((places) => {
                return (
                    
                <Yerler place={places} id={id.split("-")[1]}>
                    {console.log("deneme")}
                </Yerler>
                )
            })
        )}
        

        </div>
    )
})
export default YerlerSirala;