import React, {useState,useEffect, useContext, useRef} from 'react'
import ReactDOM, {useLocation} from 'react-dom'
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
import {NavLink, useParams} from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../Components/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import parse from 'html-react-parser';
import slugify from 'react-slugify';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { List, Divider } from 'antd';



const { Panel } = Collapse;

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const YerlerDetay =()=>{

    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);
    const [googleMap, setGoogleMap]=useState("");
    const [latitude, setLatitude]=useState([]);
    const [longitude, setLongitude]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/places?sehir.plate='+city.city)
            .then(response => {
                setData(response.data);
                response.data.filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataPlaces)=>(
                    setGoogleMap(dataPlaces.gps)
                ))
            })
        }
        fetchData();
        

        
    },[]);

    //url den id'yi çekmek için
    let { id } = useParams();
    if (!id) {
        return <NotFound />;
    }

    const deneme = [
            { 
                map:googleMap,
                title:"Google Maps"
            },
            {
                map:"https://yandex.com.tr/harita/103695/duzce/geo/efteni_golu/2525112965/?ll=31.049828%2C40.760052&z=15.89",
                title:"Yandex Maps"
            }
        ];

    const konumSec =()=>{ 
        document.querySelector('.konum-sec').classList.toggle('hidden')
        document.querySelector('.konum-sec-divider').classList.toggle('hidden')
        document.querySelector('.konum-sec-list').classList.toggle('hidden')
    }

        return(
            <div className='yerler-detay-ortaalan'>
            
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataPlaces)=>(
                    (dataPlaces.length !== 0) ? (
                        <>
                        <div className='yerler-detay-cover'>
                            <div className="cover-baslik">
                                <NavLink to={"/yerler-sirala/categorie-"+dataPlaces.category.name}>
                                <div className="kategori">

                                    <div className="kategori-icon"><InlineSVG src={kategoriIcons[dataPlaces.category.iconname]}></InlineSVG></div>

                                    <div className="kategori-adi">{dataPlaces.category.name}</div>
                                </div>
                                </NavLink>
                                <div className="baslik">{dataPlaces.name}</div>
                            </div>
                            <div className="konum" onClick={konumSec}>
                            {/* {(dataPlaces.gps === null)? (
                            <></>
                            ):(
                                <a href={dataPlaces.gps}></a>
                            )} */}
                                <div className="konum-ust-icon"><InlineSVG src={contactIcons.address}></InlineSVG></div>
                                <div>Konum</div>
                                <div className="konum-alt-icon"><InlineSVG src={locationIcons.location}></InlineSVG></div>
                            </div>
                            <div className="konum-sec hidden">
                            <Divider className='konum-sec-divider hidden' orientation="left"> <h2>HARİTALAR</h2> </Divider>
                            <List
                            className='konum-sec-list hidden'
                            size="large"
                            header={<></>}
                            footer={<></>}
                            bordered
                            dataSource={deneme}
                            renderItem={item => <a href={item.map}><List.Item> <InlineSVG src={locationIcons.choose_map}/>{item.title}</List.Item></a>}
                            />
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
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            destroyInactivePanel={true}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                        >
                            {/* İletişim */}
                            
                            {(dataPlaces.email=== null & dataPlaces.website=== null & dataPlaces.phone=== null & dataPlaces.address=== null) ? (<></>):(
                                <Panel header="İletişim" key="1" className="site-collapse-custom-panel">
                                    <div className="iletisim">
                                    <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                                    <div className="iletisim-bilgi">

                                    {dataPlaces.email === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.email}></InlineSVG>
                                        <span className="koyu">Mail:</span><span className="iletisim-detay">{dataPlaces.email}</span>
                                    </span>)}
                                        
                                    {dataPlaces.website === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.web}></InlineSVG>
                                        <span className="koyu">Web:</span><span className="iletisim-detay">{dataPlaces.website}</span>
                                    </span>)}
                                        
                                    {dataPlaces.phone === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.phone}></InlineSVG>
                                        <span className="koyu">Telefon:</span><span className="iletisim-detay">{dataPlaces.phone}</span>
                                    </span>)}

                                    {dataPlaces.address === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.address}></InlineSVG>
                                        <span className="koyu">Adres:</span><span className="iletisim-detay">{dataPlaces.address}</span>
                                    </span>)}
                                    </div>
                                    </div>
                                </Panel>
                                )}
                                    

                                    {/* Detay Yazı */}
                                    {dataPlaces.body === null ? (<></>):(
                                        <Panel header="Detay" key="2" className="site-collapse-custom-panel">
                                            <div className="detay-yazi">
                                                {parse(dataPlaces.body)}
                                            </div>
                                        </Panel>
                                    )}
                                    {/* Harita */}
                                    {(dataPlaces.gps === null)? (
                                    <></>
                                    ):(
                                    <Panel header="Adres" key="3" className="site-collapse-custom-panel">
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
                                </Panel>
                                )}
                            
                        </Collapse>
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