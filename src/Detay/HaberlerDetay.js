import React, {useState,useEffect, useContext, useRef} from 'react'
import ReactDOM from 'react-dom'
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
import {contactIcons, dateIcon} from '../icon';
import InlineSVG from 'svg-inline-react';
import NotFound from '../Components/NotFound';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Components/Context';
import parse from 'html-react-parser';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Panel } = Collapse;

SwiperCore.use([FreeMode,Navigation,Thumbs]);

const HaberlerDetay =()=>{

    const mapRef= useRef();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    var {city, setCity} = useContext(AppContext);
    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get('https://seyyahpanel.kod8.app/blogs?sehir.plate='+city.city)
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
            <div className='haberler-detay-ortaalan'>
                {
                data
                .filter(dataFilter => ""+dataFilter.id === id.split("-")[0])
                .map((dataBlogs)=>(
                    <>
                    <div className='haberler-detay-cover'>
                    </div>
                    <div className="haber-detay">
                        <div className="haber-detay-baslik">{dataBlogs.title}</div>
                        <div className='haberler-detay-tarih'><InlineSVG src={dateIcon.datetime}></InlineSVG> {new Date(dataBlogs.datetime).toLocaleString('tr', {day:"numeric", month:"short", year:"numeric"})}</div>

                        <div className="haberler-spot">
                            <div className="haberler-spot-yazi">
                                {dataBlogs.spot}
                            </div>
                        </div>

                        <div className="haberler-mini-slider">
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
                                {dataBlogs.body === null ? (<></>):(
                                    <Panel header="Detay" key="2" className="site-collapse-custom-panel">
                                        <div className="detay-yazi">
                                            {parse(dataBlogs.body)}
                                        </div>
                                    </Panel>
                                )}
                        </Collapse>



                    </div>
                    </>
                ))}
            </div>
        )
    
}

export default HaberlerDetay;