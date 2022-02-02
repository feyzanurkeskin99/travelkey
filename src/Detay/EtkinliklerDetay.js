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
import {dateIcon, contactIcons} from '../icon'
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../Components/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const EtkinliklerDetay =()=>{
    


    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/events?sehir.plate='+city.city)
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
            <div className='etkinler-detay-ortaalan'>
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataBlogs)=>(
                    <>
                    <div className='etkinler-detay-cover'>
                    </div>
                    <div className="etkinlikler-detay">
                        <div className="etkinlikler-detay-baslik">{dataBlogs.name}</div>
                        <div className='etkinler-detay-tarih'><InlineSVG src={dateIcon.datetime}></InlineSVG> {new Date(dataBlogs.datetime).toLocaleString('tr', {day:"numeric", month:"short", year:"numeric"})}</div>

                        <div className="etkinler-spot">
                            <div className="etkinler-spot-yazi">
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni pariatur, impedit cumque placeat corrupti omnis est commodi dolorem veniam quod voluptatibus laudantium sunt aliquam sed aliquid tenetur dolorum earum.
                            </div>
                        </div>

                        <div className="etkinler-mini-slider">
                            <MiniSlider></MiniSlider>
                        </div>
                        <div className="detay-yazi">
                            <>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, excepturi, at ullam et magni, rem pariatur quisquam ducimus commodi eius veniam temporibus assumenda. Sint eum molestias vero accusantium eaque necessitatibus.
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, excepturi, at ullam et magni, rem pariatur quisquam ducimus commodi eius veniam temporibus assumenda. Sint eum molestias vero accusantium eaque necessitatibus.</span>
                            </>
                        </div>
                    
                        <MapContainer center={[40.8555272, 31.1370757]} zoom={15} scrollWheelZoom={false} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[40.8555272, 31.1370757]}>
                                <Popup>
                                {dataBlogs.name} <br /> Burada
                                </Popup>
                            </Marker>
                        </MapContainer>

                        <div className="iletisim">
                            <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                            <div className="iletisim-bilgi">
                                <span className='iletisim-eposta'><InlineSVG src={contactIcons.email}></InlineSVG><span className="koyu">Mail:</span><span className="iletisim-detay">feyzanurkeskin1999@gmail.com</span></span>
                                <span className='iletisim-web'><InlineSVG src={contactIcons.web}></InlineSVG><span className="koyu">Web:</span><span className="iletisim-detay">www.seyyah.tk</span></span>
                                <span className='iletisim-telefon'><InlineSVG src={contactIcons.phone}></InlineSVG><span className="koyu">Telefon:</span><span className="iletisim-detay">0542 776 20 22</span></span>
                                <span className='iletisim-adres'><InlineSVG src={contactIcons.address}></InlineSVG><span className="koyu">Adres:</span> <span className="iletisim-detay">Bitirme cad. Projesi mah. No:100</span></span>
                            </div>
                        </div>

                    </div>
                    </>
                ))}
            </div>
        )
    
}

export default EtkinliklerDetay;