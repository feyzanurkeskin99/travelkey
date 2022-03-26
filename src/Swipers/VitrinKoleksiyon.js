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

SwiperCore.use([EffectCards]);

const VitrinKoleksiyon =()=>{
  var {city, setCity} = useContext(AppContext);

  const [data, setData]=useState([]);

  const url="bundles?city.plate="+city.city+"&isDistrict=false&vitrin=true"//semt olan koleksiyonlar
  const getVitrinApi = async() => {
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
      getVitrinApi()
  },[])




        return(
              <div className='vitrin-koleksiyon'>
              <NavLink to='/koleksiyonlar-sirala'>
                <TumElemanlar name='Tüm Koleksiyonlar'></TumElemanlar>
              </NavLink>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                {data
                .map((bundles) => (
                    
                        <SwiperSlide key={bundles.id}>
                            <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.name)}>
                            {(bundles.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+bundles.image.url} />
                            </>
                        )}

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