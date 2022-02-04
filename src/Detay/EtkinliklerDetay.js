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
            <div className='etkinlikler-detay-ortaalan'>
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataBlogs)=>(
                    <>
                    <div className='etkinlikler-detay-cover'>
                    </div>
                    <div className="etkinlikler-detay">
                        <div className="etkinlikler-detay-baslik">{dataBlogs.name}</div>
                        <div className='etkinlikler-detay-tarih'><InlineSVG src={dateIcon.datetime}></InlineSVG> {new Date(dataBlogs.datetime).toLocaleString('tr', {day:"numeric", month:"short", year:"numeric"})}</div>

                        <div className="etkinlikler-spot">
                            <div className="etkinlikler-spot-yazi">
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni pariatur, impedit cumque placeat corrupti omnis est commodi dolorem veniam quod voluptatibus laudantium sunt aliquam sed aliquid tenetur dolorum earum.
                            </div>
                        </div>

                        <div className="etkinlikler-mini-slider">
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

                    </div>
                    </>
                ))}
            </div>
        )
    
}

export default EtkinliklerDetay;