import React, {useState,useEffect, useContext, useRef} from 'react'
import ReactDOM, {useLocation} from 'react-dom'
import { Button, Icon } from 'semantic-ui-react'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import MiniSlider from '../Swipers/MiniSlider';
import IkiSiraSwiper from '../Swipers/IkiSiraSwiper';
import {backgroundIcons, contactIcons, kategoriIcons, locationIcons} from '../icon'
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../Components/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import parse from 'html-react-parser';
SwiperCore.use([FreeMode,Navigation,Thumbs]);

const YerlerDetay =()=>{

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);
    const [latitude, setLatitude]=useState([]);
    const [longitude, setLongitude]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city)
            .then(response => {
                setData(response.data);
            })
        }
        fetchData();
    },[]);


    let { id } = useParams();
    if (!id) {
        return <NotFound />;
    }
    //url den id'yi çekmek için

        return(
            <div className='yerler-detay-ortaalan'>
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataPlaces)=>(
                    (dataPlaces.length !== 0) ? (
                        <>
                        {console.log(dataPlaces.email === null)}
                        <div className='yerler-detay-cover'>
                            <div className="cover-baslik">
                                <div className="kategori">

                                    <div className="kategori-icon"><InlineSVG src={kategoriIcons[dataPlaces.category.iconname]}></InlineSVG></div>

                                    <div className="kategori-adi">{dataPlaces.category.name}</div>
                                </div>
                                <div className="baslik">{dataPlaces.name}</div>
                            </div>
                            <div className="konum">
                            {(dataPlaces.gps === null)? (
                            <></>
                            ):(
                                <a href={dataPlaces.gps}></a>
                            )}
                                <div className="konum-ust-icon"><InlineSVG src={contactIcons.address}></InlineSVG></div>
                                <div>Konum</div>
                                <div className="konum-alt-icon"><InlineSVG src={locationIcons.location}></InlineSVG></div>
                            </div>
                        </div>
                        
                        <div className="yerler-spot">
                            <div className="yerler-spot-yazi">
                                {dataPlaces.spot}
                            </div>
                        </div>

                        <div className="yerler-mini-slider">
                            <MiniSlider></MiniSlider>
                        </div>

                        <div className="iletisim">
                            <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                            <div className="iletisim-bilgi">
                                <span className='iletisim-eposta'>
                                    <InlineSVG src={contactIcons.email}></InlineSVG>
                                    <span className="koyu">Mail:</span><span className="iletisim-detay">{dataPlaces.email === null ? ("-"):(dataPlaces.email)}</span>
                                </span>
                                <span className='iletisim-web'>
                                    <InlineSVG src={contactIcons.web}></InlineSVG>
                                    <span className="koyu">Web:</span><span className="iletisim-detay">{dataPlaces.website === null ? ("-"):(dataPlaces.website)}</span>
                                </span>
                                <span className='iletisim-telefon'>
                                    <InlineSVG src={contactIcons.phone}></InlineSVG>
                                    <span className="koyu">Telefon:</span><span className="iletisim-detay">{dataPlaces.phone === null ? ("-"):(dataPlaces.phone)}</span>
                                </span>
                                <span className='iletisim-adres'>
                                    <InlineSVG src={contactIcons.address}></InlineSVG>
                                    <span className="koyu">Adres:</span> <span className="iletisim-detay">{dataPlaces.address === null ? ("-"):(dataPlaces.address)}</span>
                                </span>
                            </div>
                        </div>

                        <div className="detay-yazi">
                                {dataPlaces.body === null ? (<></>):(parse(dataPlaces.body))}
                        </div>
                            
                        {(dataPlaces.gps === null)? (
                            <></>
                        ):(
                            <MapContainer center={[dataPlaces.gps.split("@")[1].split(",")[0],dataPlaces.gps.split("@")[1].split(",")[1]]} zoom={15} scrollWheelZoom={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            
                            <Marker position={[dataPlaces.gps.split("@")[1].split(",")[0],dataPlaces.gps.split("@")[1].split(",")[1]]} >
                                
                                <Popup>
                                {dataPlaces.name} <br /> Burada
                                </Popup>
                            </Marker>
                        </MapContainer>
                        )}
                        
                        <IkiSiraSwiper></IkiSiraSwiper>
                    </>
                    ):(
                        <></>
                    )
                ))}
            </div>
        )
    
}

export default YerlerDetay;