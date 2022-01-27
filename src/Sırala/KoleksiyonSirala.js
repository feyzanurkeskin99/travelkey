import React, {useContext}  from 'react'
import ReactDOM from 'react-dom'
import SwiperCore, {Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import { Icon } from 'semantic-ui-react';
import InlineSVG from 'svg-inline-react';
import {collectionIcons} from '../icon'
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import slugify from 'react-slugify';

const KoleksiyonSirala =()=>{
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city+'&isDistrict=false', options, []);
    //isDistrict=false ile semt olmayan koleksiyonları getirdik
    return(
        <div className='koleksiyonlar-sirala'>
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {data.map((bundles) => (
                
                    <div className="koleksiyonlar-container">
                        <div className="koleksiyon-sirala-ust">
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
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