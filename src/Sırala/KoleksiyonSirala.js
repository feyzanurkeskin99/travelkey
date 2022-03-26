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

const KoleksiyonSirala =()=>{
    var {city, setCity} = useContext(AppContext);

    const [data, setData]=useState([]);

    const url="bundles?city.plate="+city.city+"&isDistrict=false"
    const getBundlesApi = async() => {
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
        getBundlesApi()
    },[])



    return(
        <div className='koleksiyonlar-sirala'>
            {data.map((bundles) => (
                
                    <div className="koleksiyonlar-container">
                        <div className="koleksiyon-sirala-ust">
                        {(bundles.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                ):(
                        <>
                        <img src={"https://seyyahpanel.kod8.app"+bundles.image.url} />
                        </>
                )}
                        </div>
                        <div className="koleksiyon-sirala-alt">
                            <div className="koleksiyon-sirala-alt-baslik">
                                {bundles.name}
                            </div>
                            <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.name)}>
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