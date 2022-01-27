import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import '../ozel.css'
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

SwiperCore.use([EffectCards]);

const VitrinKoleksiyon =()=>{
  var {city, setCity} = useContext(AppContext);
  const options = {};
  const date="";
  const {
      loading,
      error,
      data = [],
  } = useFetch('https://seyyahpanel.kod8.app/bundles?city.plate='+city.city+'&isDistrict=false&vitrin=true', options, []);
        return(
              <div className='vitrin-koleksiyon'>
              <NavLink to='/koleksiyonlar-sirala'>
                <TumElemanlar name='Tüm Koleksiyonlar'></TumElemanlar>
              </NavLink>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                {error && <h1>Error!</h1>}
                {loading && <h1>Loading...</h1>}
                {data
                .map((bundles) => (
                    
                        <SwiperSlide>
                            <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.name)}>
                            <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                            </NavLink>
                            <div className="vitrin-koleksiyon-swiper-baslik">
                                {bundles.name}
                            </div>
                          
                        </SwiperSlide>
                    
                ))}
              </Swiper>
              </div>
        
        )
}

export default VitrinKoleksiyon;