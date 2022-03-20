import React, {useState,useEffect, useContext} from 'react'
import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper'
import 'swiper/swiper.min.css'
import 'swiper/modules/effect-cards/effect-cards.js'
import 'swiper/modules/pagination/pagination.min.css'
import MiniSlider from '../Swipers/MiniSlider';
import {dateIcon, contactIcons, locationIcons} from '../icon'
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../Components/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import parse from 'html-react-parser';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

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
                .map((dataEvents)=>(
                    <>
                    <div className='etkinlikler-detay-cover'>
                    <div className="konum">
                            {(dataEvents.gps === null)? (
                            <></>
                            ):(
                                <a href={dataEvents.gps}></a>
                            )}
                                <div className="konum-ust-icon"><InlineSVG src={contactIcons.address}></InlineSVG></div>
                                <div>Konum</div>
                                <div className="konum-alt-icon"><InlineSVG src={locationIcons.location}></InlineSVG></div>
                            </div>
                    </div>
                    <div className="etkinlikler-detay">
                        <div className="etkinlikler-detay-baslik">{dataEvents.name}</div>
                        <div className='etkinlikler-detay-tarih'><InlineSVG src={dateIcon.datetime}></InlineSVG> {new Date(dataEvents.datetime).toLocaleString('tr', {day:"numeric", month:"short", year:"numeric"})}</div>

                        <div className="etkinlikler-spot">
                            <div className="etkinlikler-spot-yazi">
                            {dataEvents.spot}
                            </div>
                        </div>

                        <div className="etkinlikler-mini-slider">
                            <MiniSlider></MiniSlider>
                        </div>

                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            destroyInactivePanel={true}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                        >
                            {/* İletişim */}
                            
                                {/* Detay Yazı */}
                                {dataEvents.body === null ? (<></>):(
                                    <Panel header="Detay" key="2" className="site-collapse-custom-panel">
                                    <div className="detay-yazi">
                                        <>
                                        <span>
                                            {parse(dataEvents.body)}
                                        </span>
                                        </>
                                    </div>
                                    </Panel>
                                )}

                                 {/* Harita */}
                                 {(dataEvents.gps === null)? (
                                    <></>
                                    ):(
                                    <Panel header="Adres" key="3" className="site-collapse-custom-panel">
                                    <MapContainer center={[dataEvents.gps.split("@")[1].split(",")[0],dataEvents.gps.split("@")[1].split(",")[1]]} zoom={15} scrollWheelZoom={false} >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={[dataEvents.gps.split("@")[1].split(",")[0],dataEvents.gps.split("@")[1].split(",")[1]]}>
                                            <Popup>
                                            {dataEvents.name} <br /> Burada
                                            </Popup>
                                        </Marker>
                                    </MapContainer>

                                </Panel>
                                )}
                        </Collapse>



                    </div>
                    </>
                ))}
            </div>
        )
    
}

export default EtkinliklerDetay;