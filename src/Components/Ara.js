import React, {useContext, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import TumElemanlar from '../TumElemanlar';
import HavaDurumu from './HavaDurumu'
import InlineSVG from 'svg-inline-react';
import useFetch from 'use-http';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Components/Context'
import {backgroundIcons, kategoriIcons} from '../icon'
import axios from 'axios';
import slugify from 'react-slugify';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import backgroundImage from '../images/news.jpg'
import { getApiModels } from '../Models/ApiModels';

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const Ara =()=>{
    
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    var {city, setCity} = useContext(AppContext);
    
    const [dataVitrin, setDataVitrin]=useState([]);
    const [dataSemt, setDataSemt]=useState([]);
    const [dataYerler, setDataYerler]=useState([]);
    const [dataRotalar, setDataRotalar]=useState([]);
    const [dataAktivite, setDataAktivite]=useState([]);
    const [dataMeshur, setDataMeshur]=useState([]);
    const [dataKoleksiyon, setDataKoleksiyon]=useState([]);
    const [dataIkiSira, setDataIkiSira]=useState([]);
    const [dataEtkinlikler, setDataEtkinlikler]=useState([]);
    const [dataHaberler, setDataHaberler]=useState([]);

    const getApi = async() => {
        try{
            const resDataVitrin = await getApiModels("bundles?city.plate="+city.city+"&name_contains="+id+"&isDistrict=false&vitrin=true");
            const resDataSemt = await getApiModels("bundles?city.plate="+city.city+"&name_contains="+id+"&isDistrict=true");
            const resDataYerler = await getApiModels("places?sehir.plate="+city.city+"&name_contains="+id+"&vitrin=true&type=place");
            const resDataRotalar = await getApiModels("bundles?city.plate="+city.city+"&vitrin=true&isRoute=true&name_contains="+id);
            const resDataAktivite = await getApiModels("places?sehir.plate="+city.city+"&vitrin=true&type=activity&name_contains="+id);
            const resDataMeshur = await getApiModels("places?sehir.plate="+city.city+"&vitrin=true&type=iconic&name_contains="+id);
            const resDataKoleksiyon = await getApiModels("bundles?city.plate="+city.city+"&anavitrin=true&isDistrict=false&name_contains="+id);
            const resDataEtkinlikler = await getApiModels("events?sehir.plate="+city.city+"&name_contains="+id+"&vitrin=true");
            const resDataHaberler = await getApiModels("blogs?sehir.plate="+city.city+"&title_contains="+id);
            
            if( resDataSemt.status 
                && resDataYerler.status
                && resDataRotalar.status 
                && resDataAktivite.status
                && resDataMeshur.status
                && resDataKoleksiyon.status 
                && resDataEtkinlikler.status
                && resDataHaberler.status
                && resDataVitrin.status
                ) {
                setDataVitrin(resDataVitrin.data);
                setDataSemt(resDataSemt.data);
                setDataYerler(resDataYerler.data);
                setDataRotalar(resDataRotalar.data);
                setDataAktivite(resDataAktivite.data);
                setDataMeshur(resDataMeshur.data);
                setDataKoleksiyon(resDataKoleksiyon.data);
                setDataEtkinlikler(resDataEtkinlikler.data);
                setDataHaberler(resDataHaberler.data);
            }
        }catch(e){
            alert(e.message)
        }
    }

    useEffect(() => {
        getApi()
    },[])


    let { id } = useParams();
    if (!id) {
        return <NotFound />;
    }
    //url den id'yi çekmek için


    return(
        <div className='ortaalan mt-20'>
        <AppContext.Provider value={{city, setCity}}>

        {(dataVitrin.length !== 0)?(
            <>
            <div className='vitrin-koleksiyon'>
              <NavLink to='/koleksiyonlar-sirala'>
                <TumElemanlar name='Tüm Koleksiyonlar'></TumElemanlar>
              </NavLink>
              <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                {dataVitrin
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
            </>
        ):(
            <></>
        )}

        


        {(dataSemt.length !== 0)?(
            <>
                <div className='semt-swiper'>
                <div className="semt-baslik">Semtler</div>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiperSemt">
                    {dataSemt
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===2)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"-"+slugify(placess[0].name)}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                                    <NavLink to={"/bundles/"+placess[1].id+"-"+slugify(placess[1].name)}>
                                        <div className="semt-adi-alt">{placess[1].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                        {dataSemt
                        .reduce((previous, current, index, array)=>{
                        return index %2 === 0 ? [...previous, array.slice(index,index+2)] : previous},[])
                        .filter(diziFilter => diziFilter.length===1)
                        .map((placess) => (
                            <SwiperSlide key={placess.id}>
                                    <NavLink to={"/bundles/"+placess[0].id+"/"}>
                                        <div className="semt-adi-alt">{placess[0].name}</div>
                                    </NavLink>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </div>
            </>
        ):(
            <></>
        )}

        


        {(dataYerler.length !== 0)?(
            <div className='yerler-swiper'>
            <NavLink to='/yerler-sirala/all'>
                <TumElemanlar name='Tüm Yerler'></TumElemanlar>
            </NavLink>
        
            <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} slidesPerView={'auto'} grabCursor={true} className="mySwiperYerler">
                {dataYerler.map((places) => (
                    
                        <SwiperSlide key={places.id}>
                        <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                        {(places.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                            </>
                        )}

                        </NavLink>
                        <div className="yerler-swiper-kategori">
                                    <div className="yerler-swiper-kategori-icon">
                                        <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                    </div>
                                    
                                    <div className="yerler-swiper-kategori-adi">
                                        {places.category.name}
                                    </div>
                        </div>
                        <div className="yerler-swiper-baslik">{places.name}</div>
                        </SwiperSlide>
                    
                ))}
            </Swiper>
            </div>
        ):(
            <></>
        )}

        


        {(dataRotalar.length !== 0)?(
            <div className='rotalar-swiper'>
            <div className='background-icon'>
                <InlineSVG src={backgroundIcons.routes}></InlineSVG>
                <h2 className='background-baslik'>Rotalar</h2>
            </div>

            <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiper3">
            
                    {dataRotalar.map((bundles) => (
                        <SwiperSlide key={bundles.id}>
                            
                        {(bundles.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+bundles.image.url} />
                            </>
                        )}

                            
                            <NavLink to={"/bundles/"+bundles.id+"-"+slugify(bundles.name)}>
                            <div className="rotalar-baslik">
                                {bundles.name}
                            </div>
                            </NavLink>
                        </SwiperSlide>
                ))}
            
            </Swiper>
            </div>
        ):(
            <></>
        )}


        {(dataAktivite.length !== 0) ? (
            <div className='yerler-swiper yerler-types'>
            <div className="yerler-types-baslik-container">
                <div className="yerler-types-baslik">
                    {"Aktiviteler"}
                </div>
            </div>
            <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiperYerler">
                
                {dataAktivite.map((places) => (
                    
                        <SwiperSlide key={places.id}>
                        
                        <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                        {(places.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                            </>
                        )}

                        </NavLink>
                        <div className="yerler-swiper-kategori">
                                    <div className="yerler-swiper-kategori-icon">
                                        <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                    </div>
                                    <div className="yerler-swiper-kategori-adi">
                                        {places.category.name}
                                    </div>
                                </div>
                                <div className="yerler-swiper-baslik">{places.name}</div>
                        </SwiperSlide>
                ))}
            </Swiper>
            </div>
        ):(
            <></>
        )}


        {(dataMeshur.length !== 0) ? (
            <div className='yerler-swiper yerler-types'>
        <div className="yerler-types-baslik-container">
            <div className="yerler-types-baslik">
                {"Neyi Meşhur?"}
            </div>
        </div>
        <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={30} slidesPerView={'auto'} grabCursor={true} className="mySwiperYerler">
            
            {dataMeshur.map((places) => (
                
                    <SwiperSlide key={places.id}>
                    
                    <NavLink to={"/places/"+places.id+"-"+slugify(places.name)}>
                    {(places.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                    ):(
                        <>
                        <img src={"https://seyyahpanel.kod8.app"+places.image.url} />
                        </>
                    )}

                    </NavLink>
                    <div className="yerler-swiper-kategori">
                                <div className="yerler-swiper-kategori-icon">
                                    <InlineSVG src={kategoriIcons[places.category.iconname]}></InlineSVG>
                                </div>
                                <div className="yerler-swiper-kategori-adi">
                                    {places.category.name}
                                </div>
                            </div>
                            <div className="yerler-swiper-baslik">{places.name}</div>
                    </SwiperSlide>
            ))}
        </Swiper>
            </div>
        ):(
            <></>
        )}


        {(dataKoleksiyon.length !== 0) ? (
            <>
            {dataKoleksiyon
            .map((bundles) => (
            <div className='kategoriler-scrolling-carousel'>        
            <div className="anavitrin-koleksiyon-baslik-container">
                <div className="anavitrin-koleksiyon-baslik">{bundles.name}</div>
                <div className="anavitrin-koleksiyon-spot">{bundles.name} görülmeden gidilmemesi gereken güzelliklerden.</div>
            </div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true
            }} className="mySwiper2">
                {bundles["places"].map((placess)=>(
                    
                        <SwiperSlide key={placess.id}>
                        <NavLink to={"/places/"+placess.id+"-"+slugify(placess.name)}>
                        {(placess.image === null ) ? (
                        <>
                        <img src="https://www.yoloykuleri.com/wp-content/uploads/2018/04/efteni-go%CC%88lu%CC%88-480x600.jpg" />
                        </>
                        ):(
                            <>
                            <img src={"https://seyyahpanel.kod8.app"+placess.image.url} />
                            </>
                        )}

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
        ):(
            <></>
        )}


        {(dataEtkinlikler.length !== 0) ? (
            <>
                <div className='etkinlikler'>
                <NavLink to='/etkinlikler-sirala'>
                        <TumElemanlar name='Tüm Etkinlikler'></TumElemanlar>
                </NavLink>

                {dataEtkinlikler.map((events) => (
                    <NavLink to={"/events/"+events.id+"-"+slugify(events.name)}>
                        <div key={events.id} className='etkinlikler-satir'>
                            <div className="tarih">
                                <h2>{new Date(events.datetime).getDate()}</h2>
                                <div className="tarih-ay-yil">
                                    <h4>{new Date(events.datetime).toLocaleString('tr', {month:"short"})}</h4>
                                    <h3>{new Date(events.datetime).getFullYear()}</h3>
                                </div>
                            </div>
                            <h2 className="etkinlik-adi">{events.name}</h2>
                        </div>
                    </NavLink>
                ))}
                </div>
            </>
        ):(
            <></>
        )}


        {(dataHaberler.length !== 0) ? (
            <>
            <div className='haberler-swiper'>
            <NavLink to='/haberler-sirala'>
                <TumElemanlar name='Tüm Haberler'></TumElemanlar>
            </NavLink>
            
            <Swiper slidesPerView={5} centeredSlides={true} slidesPerView={'auto'} spaceBetween={20} grabCursor={true} className="haberler">

                {dataHaberler.map((blogs) => (
                    
                        <SwiperSlide key={blogs.id}>
                            <NavLink to={"/blogs/"+blogs.id+"-"+slugify(blogs.title)}>
                                <div className='haberler-ust'>
                                    <img src={backgroundImage} />
                                    <div className="haberler-swiper-tarih">{new Date(blogs.datetime).toLocaleString('tr', {day:"numeric", month:"short"})}</div>
                                </div>
                            </NavLink>
                                <div className='haberler-alt'>
                                    <div className="haberler-swiper-baslik">
                                        {blogs.title}
                                    </div>
                                </div>
                        </SwiperSlide>
                    
                ))}

            </Swiper>
            </div>
            </>
        ):(
            <></>
        )}
    </AppContext.Provider>  

        </div>
    )
}

export default Ara;