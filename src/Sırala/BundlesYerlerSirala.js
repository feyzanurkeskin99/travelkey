import React, {useContext} from 'react'
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
import { kategoriIcons } from '../icon';

import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import { AppContext } from '../Components/Context'



const BundlesYerlerSirala =()=>{
    
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date=[];
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city, options, []);
        
    let { id } = useParams();

    if (!id) {
        return <NotFound />;
    }
    return(
        <div className='yerler-sirala'>
        {error && <h1>Error!</h1>}
        {loading && <h1>Loading...</h1>}
        {data
        .filter(dataFilter => ""+dataFilter.id===id)
        .map((places) => (
            places["places"].map((placess)=>(
                
                <NavLink to={"/places/"+placess.id+"/"}>
                
                <div className="yerler-container">
                <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                <div className="yerler-sirala-kategori">
                            <div className="yerler-sirala-kategori-icon">
                                <InlineSVG src={kategoriIcons.nature}></InlineSVG>
                            </div>
                            <div className="yerler-sirala-kategori-adi">
                                Doğa
                            </div>
                        </div>
                        <div className="yerler-sirala-baslik">{placess.name}</div>
                </div>
            </NavLink>
            ))
            
        ))}

        </div>
    )
}
export default BundlesYerlerSirala;