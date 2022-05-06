import React, {useEffect, useState, useContext} from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {EffectCoverflow, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { NavLink } from 'react-router-dom';
import useFetch from 'use-http';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 


SwiperCore.use([EffectCoverflow]);

const KategorilerScrollingCarousel =()=>{
    var {city, setCity} = useContext(AppContext);

    // const [data, setData]=useState([]);
    // const url="bundles?city.plate="+city.city+"&anavitrin=true&isDistrict=false"
    // const getAnaVitrinApi = async() => {
    //     try{
    //         const res = await getApiModels(url);
    //         if(res.status) {
    //             setData(res.data)
    //         }
    //     }catch(e){
    //         alert(e.message)
    //     }
    // }

    // useEffect(() => {
    //     getAnaVitrinApi()
    // },[])


    const KATEGORILERSCROLLING = gql`
    query kategroilerScrolling($city:String!) {
        kategorilerscrolling: bundles(
            filters:{
                isDistrict:{eq:false}
                anavitrin:{eq:true}
                city:{plate:{eq:$city}}
            }
        ){
            data{
                id
                attributes {
                    name
                    places{
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
    const {loading, error, data} = useQuery(KATEGORILERSCROLLING, {
        variables:{city: city.city}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return(
        (data.kategorilerscrolling.data) === [] ? (<></>):(
            <></>
            // data.kategorilerscrolling.data.map((bundles) => (
            //     (bundles.attributes.places.data.length !== 0) ? 
            //     (<div className='kategoriler-scrolling-carousel'>
            //         <div className="anavitrin-koleksiyon-baslik-container">
            //             <div className="anavitrin-koleksiyon-baslik">{bundles.attributes.name}</div>
            //             <div className="anavitrin-koleksiyon-spot">{bundles.attributes.name} görülmeden gidilmemesi gereken güzelliklerden.</div>
            //         </div>
            //         <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            //             "rotate": 50,
            //             "stretch": 0,
            //             "depth": 100,
            //             "modifier": 1,
            //             "slideShadows": true
            //         }} className="mySwiper2">
            //             {bundles.attributes.places.data.map((placess)=>(
            //                 <SwiperSlide key={placess.id}>
            //                 <NavLink to={"/places/" + placess.id + "-" + slugify(placess.attributes.name)}>
            //                     {console.log(placess.attributes.image.data[0].attributes.url)}
            //                     </NavLink>
            //                     <div className="koleksiyon-swiper-baslik">
            //                         {placess.attributes.name}
            //                     </div>
            //                 </SwiperSlide>
            //             ))}
            //         </Swiper>
            //     </div>
            //     ):(<></>)

            //     ))
        )
        
    )
}

export default KategorilerScrollingCarousel;