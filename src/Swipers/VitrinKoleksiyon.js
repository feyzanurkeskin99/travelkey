import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
// import '../ozel.css'
import '../Styles/output.css'
import SwiperCore, {EffectCards} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar'
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

SwiperCore.use([EffectCards]);

const VitrinKoleksiyon =()=>{
  var {city, setCity} = useContext(AppContext);

    const VITTRINBUNDLES = gql`
    query vitrinBundles($city:String!) {
        vitrinbundles: bundles(
            filters:{
                isDistrict:{eq:false}
                vitrin:{eq:true}
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
    const {loading, error, data} = useQuery(VITTRINBUNDLES, {
        variables:{city: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

        return(
            <div className='vitrin-koleksiyon'>
            <NavLink to='/koleksiyonlar-sirala'>
            <div className="block-baslik-container">
                <div className="block-baslik">Keşfet</div>
                <TumElemanlar name='Tüm Koleksiyonlar'></TumElemanlar></div>
            </NavLink>
            <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                {data.vitrinbundles.data
                .map((bundles) => (
                        <SwiperSlide key={bundles.id}>
                            <NavLink to={"/bundles/"+bundles.id+"+"+slugify(bundles.attributes.name)}>
                            {(!bundles.attributes.image.data.length ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={process.env.REACT_APP_IMG_URL+bundles.attributes.image.data[0].attributes.url} />
                            </>
                        )}

                            </NavLink>
                            <div className="vitrin-koleksiyon-swiper-baslik">
                                {bundles.attributes.name}
                            </div>
                        </SwiperSlide>
                ))}
            </Swiper>
            </div>
        
        )
}

export default VitrinKoleksiyon;