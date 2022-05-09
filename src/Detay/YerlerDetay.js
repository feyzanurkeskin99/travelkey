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
import { Tabs } from 'antd';
import { getApiModels } from '../Models/ApiModels';
import { useQuery, gql } from '@apollo/client' 

const { TabPane } = Tabs;


const { Panel } = Collapse;

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const YerlerDetay =()=>{



    //url den id'yi çekmek için
    let { id } = useParams();
    var {city, setCity} = useContext(AppContext);
    let arr=[];
    const [gps, setGps]=useState([]);
    const [latitude, setLatitude]=useState([]);
    const [longitude, setLongitude]=useState([]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const YERLERDETAY = gql`
    query yerlerDetay($id:ID!) {
        yerlerdetay: places(
            filters:{
                id:{eq:$id}
            }
        ){
            data {
                id
                attributes {
                    name
                    image{
                        data{
                            id
                            attributes{
                            url
                            }
                        }
                    }
                    address
                    email
                    website
                    phone
                    ymapsurl
                    gmapsurl
                    spot
                    body
                    gps
                    category{
                        data{
                            id
                            attributes{
                            name
                            iconname
                            }
                        }
                    }
            }
        }
    }
}`
    const {loading, error, data} = useQuery(YERLERDETAY, {
        variables:{id : id.split("-")[0]}
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>


    const deneme = [
            {
                map:data.yerlerdetay.data[0].attributes.gmapsurl,
                title:"Google Maps"
            },
            {
                map:data.yerlerdetay.data[0].attributes.ymapsurl,
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
            {console.log(data.yerlerdetay.data)}
            {console.log(id.split("-")[0])}

            {data.yerlerdetay.data.filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataPlaces)=>(
                    (dataPlaces.length !== 0) ? (
                        <>            

                        <div className='yerler-detay-cover'>
                            <div className="cover-baslik">
                                <NavLink to={"/yerler-sirala/"+ dataPlaces.id+"-"+dataPlaces.attributes.category.data.attributes.iconname}>
                                <div className="kategori">

                                    <div className="kategori-icon"><InlineSVG src={kategoriIcons[dataPlaces.attributes.category.data.attributes.iconname]}></InlineSVG></div>

                                    <div className="kategori-adi">{dataPlaces.attributes.category.data.attributes.name}</div>
                                </div>
                                </NavLink>
                                <div className="baslik">{dataPlaces.attributes.name}</div>
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
                            <div className="konum-sec-container">
                            <div className="konum-sec hidden">
                            <Divider className='konum-sec-divider hidden' orientation="left"> <h2>HARİTALAR</h2> </Divider>
                            <List
                            className='konum-sec-list hidden'
                            size="large"
                            header={<></>}
                            footer={<></>}
                            bordered
                            dataSource={deneme}
                            renderItem={item => item.map ? (<a href={item.map}><List.Item> <InlineSVG src={locationIcons.choose_map}/>{item.title}</List.Item></a>):(<></>)}
                            />
                            </div>
                            </div>
                        </div>

                        <div className="yerler-spot">
                            <div className="yerler-spot-yazi">
                                {dataPlaces.attributes.spot}
                            </div>
                        </div>

                        <div className="yerler-mini-slider">
                            <MiniSlider></MiniSlider>
                        </div>
                        <Tabs defaultActiveKey="1">

                                    {/* İletişim */}

                                    {(dataPlaces.attributes.email=== null & dataPlaces.attributes.website=== null & dataPlaces.attributes.phone=== null & dataPlaces.attributes.address=== null) ? (<></>):(

                                    <TabPane tab="İletişim" key="1">
                                        <div className="iletisim">
                                        <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                                        <div className="iletisim-bilgi">

                                        {dataPlaces.attributes.email === null ? (<></>) :
                                        (
                                        <span className='iletisim-eposta'>
                                            <InlineSVG src={contactIcons.email}></InlineSVG>
                                            <span className="koyu">Mail:</span><span className="iletisim-detay">{dataPlaces.attributes.email}</span>
                                        </span>)}

                                        {dataPlaces.attributes.website === null ? (<></>) :
                                        (
                                        <span className='iletisim-eposta'>
                                            <InlineSVG src={contactIcons.web}></InlineSVG>
                                            <span className="koyu">Web:</span><span className="iletisim-detay">{dataPlaces.attributes.website}</span>
                                        </span>)}

                                        {dataPlaces.attributes.phone === null ? (<></>) :
                                        (
                                        <span className='iletisim-eposta'>
                                            <InlineSVG src={contactIcons.phone}></InlineSVG>
                                            <span className="koyu">Telefon:</span><span className="iletisim-detay">{dataPlaces.attributes.phone}</span>
                                        </span>)}

                                        {dataPlaces.attributes.address === null ? (<></>) :
                                        (
                                        <span className='iletisim-eposta'>
                                            <InlineSVG src={contactIcons.address}></InlineSVG>
                                            <span className="koyu">Adres:</span><span className="iletisim-detay">{dataPlaces.attributes.address}</span>
                                        </span>)}
                                        </div>
                                        </div>
                                    </TabPane>

                                    )}



                                    {/* Detay Yazı */}
                                    {dataPlaces.attributes.body === null ? (<></>):(     
                                        <TabPane tab="Detay" key="2">
                                        <div className="detay-yazi">
                                                {parse(dataPlaces.attributes.body)}
                                            </div>
                                        </TabPane>
                                    )}




                                    {/* Harita */}
                                    {(dataPlaces.attributes.gps === null)? (
                                    <></>
                                    ):(
                                        <TabPane tab="Harita" key="3">
                                        <MapContainer center={[dataPlaces.attributes.gps.split(",")[0],dataPlaces.attributes.gps.split(",")[1]]} zoom={15} scrollWheelZoom={true} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[dataPlaces.attributes.gps.split(",")[0],dataPlaces.attributes.gps.split(",")[1]]} >

                                        <Popup>
                                        {dataPlaces.attributes.name} <br /> Burada
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                                        </TabPane>
                                )}

                        </Tabs>

{/* 
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            destroyInactivePanel={true}
                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                            className="site-collapse-custom-collapse"
                        >

                            {(dataPlaces.attributes.email=== null & dataPlaces.attributes.website=== null & dataPlaces.attributes.phone=== null & dataPlaces.attributes.address=== null) ? (<></>):(
                                <Panel header="İletişim" key="1" className="site-collapse-custom-panel">
                                    <div className="iletisim">
                                    <h2 className='iletisim-baslik'>İletişim Bilgileri</h2>
                                    <div className="iletisim-bilgi">

                                    {dataPlaces.attributes.email === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.email}></InlineSVG>
                                        <span className="koyu">Mail:</span><span className="iletisim-detay">{dataPlaces.attributes.email}</span>
                                    </span>)}

                                    {dataPlaces.attributes.website === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.web}></InlineSVG>
                                        <span className="koyu">Web:</span><span className="iletisim-detay">{dataPlaces.attributes.website}</span>
                                    </span>)}

                                    {dataPlaces.attributes.phone === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.phone}></InlineSVG>
                                        <span className="koyu">Telefon:</span><span className="iletisim-detay">{dataPlaces.attributes.phone}</span>
                                    </span>)}

                                    {dataPlaces.attributes.address === null ? (<></>) :
                                    (
                                    <span className='iletisim-eposta'>
                                        <InlineSVG src={contactIcons.address}></InlineSVG>
                                        <span className="koyu">Adres:</span><span className="iletisim-detay">{dataPlaces.attributes.address}</span>
                                    </span>)}
                                    </div>
                                    </div>
                                </Panel>
                                )}


                                    {dataPlaces.attributes.body === null ? (<></>):(
                                        <Panel header="Detay" key="2" className="site-collapse-custom-panel">
                                            <div className="detay-yazi">
                                                {parse(dataPlaces.attributes.body)}
                                            </div>
                                        </Panel>
                                    )}
                                    {(dataPlaces.attributes.gps === null)? (
                                    <></>
                                    ):(
                                    <Panel header="Adres" key="3" className="site-collapse-custom-panel">
                                    <MapContainer center={[dataPlaces.attributes.gps.split(",")[0],dataPlaces.attributes.gps.split(",")[1]]} zoom={15} scrollWheelZoom={true} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[dataPlaces.attributes.gps.split(",")[0],dataPlaces.attributes.gps.split(",")[1]]} >

                                        <Popup>
                                        {dataPlaces.attributes.name} <br /> Burada
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                                </Panel>
                                )}

                        </Collapse> */}
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