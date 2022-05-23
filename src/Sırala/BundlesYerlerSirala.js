import React, {useEffect, useState, useContext} from 'react'
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
import { kategoriIcons, bookMarkIcon} from '../icon';
import axios from 'axios';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 
import { DataNode } from 'html-react-parser/node_modules/domhandler';
import { Empty } from 'antd';



const BundlesYerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    let { id } = useParams();
    const [sayac, setSayac]=useState(10);
    const [dataLength, setDataLength]=useState(10);
    const [places, setPlaces]=useState([]);


    
   useEffect(() => {
        console.log(sayac)
    },[sayac])


   useEffect(() => {
        console.log(sayac)
    },[places])





    const VITRINBUNDLES = gql`
    query vitrinBundles($city:String!) {
        vitrinbundles: bundles(
            pagination:{page:1, pageSize:100}
            filters:{
                city:{plate:{eq:$city}}
            }
        ){
            data{
                id
                attributes {
                    name
                    places(
                        pagination:{page:1, pageSize:100}
                    ){
                        data{
                            id
                            attributes{
                                name
                                category{
                                        data{
                                        id
                                        attributes{
                                            name
                                            iconname
                                        }
                                        }
                                    }
                                image{
                                data{
                                    id
                                    attributes{
                                    url
                                    }
                                }
                                }
                            }
                            }
                        }
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
    const {loading, error, data} = useQuery(VITRINBUNDLES, {
        variables:{city: city.city}
        
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    const ShowMore =async()=>{
        // let dataLength=0
        // dataLength = await data.vitrinbundles.data
        // .filter(dataFilter => slugify(dataFilter.attributes.name) === id.split("+")[1]).length
        setDataLength(await data.vitrinbundles.data
                .filter(dataFilter => slugify(dataFilter.attributes.name) === id.split("+")[1])
                .map((place) => (
                    place.attributes.places.data.length)))
        if(sayac+10 <= dataLength){
            setSayac(sayac+10)
        }else{
            if(sayac+5 <= dataLength){
                setSayac(sayac+5)
            }else{
                if(sayac+1 <= dataLength){
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
        {
            data.vitrinbundles.data ? (
                data.vitrinbundles.data
                .filter(dataFilter => slugify(dataFilter.attributes.name) === id.split("+")[1])
                .map((place) => (
                place.attributes.places.data.map((placess, index)=>(
                    (index <= sayac) ? (
                        placess.attributes.category.data ? (
                            <NavLink to={"/places/"+placess.id+"-"+slugify(placess.attributes.name)}>
                            <div className="yerler-container">
                            {!placess.attributes.image.data[0] ? (
                                    <>
                                    <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                                    </>
                            ):(
                                    <>
                                    <img src={process.env.REACT_APP_IMG_URL+placess.attributes.image.data[0].attributes.url} />
                                    </>
                            )}
                            <div className="yerler-sirala-kategori w-full justify-between pr-5px">
                            <div className="flex">
                            <div className="yerler-sirala-kategori-icon">
                                <InlineSVG src={kategoriIcons[placess.attributes.category.data.attributes.iconname]}></InlineSVG>
                            </div>
                            <div className="yerler-sirala-kategori-adi">
                                {placess.attributes.category.data.attributes.name}
                                
                            </div>
                            </div>
                            <InlineSVG className='fill-birincil-color bg-link-active-before-color rounded-50% flex items-center p-2px' src={bookMarkIcon.bookMark}></InlineSVG>

                            </div>

                            <div className="yerler-sirala-baslik">{placess.attributes.name}</div>
                            </div>
                            </NavLink>
                            ):(
                                <>                        
                                {console.log(placess)}
                                </>
                            )
                    ):(<></>)
                    ))
                    
                ))
            ) : (
                <>{console.log(data.vitrinbundles.data ? true : false)}</>
            )
            
        }
        
        <div className="show-more-container w-full m-15px py-30px pb-0 flex items-center justify-center">
        <div className="show-more p-15px bg-darkgrey-color rounded text-birincil-color font-bold" onClick={ShowMore}>Daha Fazla Göster</div>
        </div>
        </div>
    )
}
export default BundlesYerlerSirala;