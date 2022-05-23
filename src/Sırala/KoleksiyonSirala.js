import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import InlineSVG from 'svg-inline-react';
import {collectionIcons, bookMarkIcon} from '../icon'
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

const KoleksiyonSirala =()=>{
    var {city, setCity} = useContext(AppContext);
    const [sayac, setSayac]=useState(10);




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

    const ShowMore =()=>{
        if(sayac+10 < data.bundles.data.length){
            setSayac(sayac+10)
        }else{
            if(sayac+5 < data.bundles.data.length){
                setSayac(sayac+5)
            }else{
                if(sayac+1 < data.bundles.data.length){
                    setSayac(sayac+1)
                }else{
                    setSayac(sayac)
                }
            }
        }
    }

    return(
        <div className='koleksiyonlar-sirala mt-70px'>
            {data.bundles.data.map((bundles, index) => (
                (index < sayac) ? (
                    <div className="koleksiyonlar-container sticky">
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
                        <InlineSVG className='absolute right-types-baslik top-15px fill-birincil-color bg-link-active-before-color rounded-50% flex items-center p-2px' src={bookMarkIcon.bookMark}></InlineSVG>

                        <div className="koleksiyon-sirala-alt">
                            <div className="koleksiyon-sirala-alt-baslik">
                                {bundles.attributes.name}
                            </div>
                            <NavLink to={"/bundles/"+bundles.id+"+"+slugify(bundles.attributes.name)}>
                            <div className="koleksiyon-sirala-buton">
                                <InlineSVG src={collectionIcons.arrow}></InlineSVG>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                ):(<></>)
                
            ))}

            <div className="show-more-container w-full m-15px pb-30px mb-200px flex items-center justify-center">
        <div className="show-more p-15px mb-40px bg-darkgrey-color rounded text-birincil-color font-bold" onClick={ShowMore}>Daha Fazla Göster</div>
        </div>
        </div>
    )
}

export default KoleksiyonSirala;