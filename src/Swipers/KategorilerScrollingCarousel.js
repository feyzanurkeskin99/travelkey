import React, {useContext} from 'react'
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


SwiperCore.use([EffectCoverflow]);

const KategorilerScrollingCarousel =()=>{
    var {city, setCity} = useContext(AppContext);
    const options = {};
    const date="";
    const {
        loading,
        error,
        data = [],
    } = useFetch('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city+'&anavitrin=true&isDistrict=false', options, []);
    //isDistrict=false ile semt olmayan koleksiyonları getirdik
    return(
        <>
        {error && <h1>Error!</h1>}
        {loading && <h1>Loading...</h1>}
        {data
        .map((bundles) => (
        <div className='kategoriler-scrolling-carousel'>        
        <div className="anavitrin-koleksiyon-baslik-container">
            <div className="anavitrin-koleksiyon-baslik">{bundles.name}</div>
            <div className="anavitrin-koleksiyon-spot">Cağnım düccem güzel düccem gezmek çok güsel lay lay buraya spot gelecek.</div>
        </div>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
            "rotate": 50,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
        }} className="mySwiper2">
            {error && <h1>Error!</h1>}
            {loading && <h1>Loading...</h1>}
            {bundles["places"].map((placess)=>(
                
                    <SwiperSlide key={placess.id}>
                    <NavLink to={"/places/"+placess.id+"-"+slugify(placess.name)}>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </NavLink>
                        <div className="koleksiyon-swiper-baslik">
                            {placess.name}
                        </div>
                    </SwiperSlide>
                
                ))}
            </Swiper>
        </div>
        ))}
        </>
    )
}

export default KategorilerScrollingCarousel;